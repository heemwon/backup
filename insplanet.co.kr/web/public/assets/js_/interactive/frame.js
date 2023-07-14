/*=========================================================== [ UI ] =======================================================================*/
define(['app', 'TweenMax','TweenScrollTo'], function (App, TW) {
    const Ui_Frame = (function (ns) {
		let body, headerContainer, mainContainer, footerContainer;
		let btnGotoTop;
        let contentSection;
        let gnbNavItem, btnToggleMobileGnb;
        let isOpenedMobileMenu = false,
            currentHeaderThemeCode = null;
        let scrollTop, oldScrollTop;
        let isInitializePage = false;

        const _init = function () {
			_setDomElements();

            _addEvent();
            _checkHash();
            _onChangeDeviceSizeHandler();
            if(window.Detectizr.device.type == 'mobile') _resizeMobileGnbLayer();
        };

        const defaultHash = function(){
            return '#/'+ window.GlobalVars.PAGE_SECTION_ID_NAME.WORK;
        }

        const _checkHash = function() {
            let hash = window.location.hash;
            const hashReg = /\/?#\/(work|company)(\?((&?\w+=?(\w+)?)+))?$/;
             console.log('_checkHash ::', (hashReg).test(hash), hash.match(hashReg))
            if(hashReg.test(hash)){
                const newHash = hash.indexOf('?') > 0 ? hash.split('?')[0] : hash
                window.GlobalVars.URL_HASH_NAME = newHash;
                 console.log('hasHash', newHash)
                _activeCurrentPage(newHash);
            }else{
                 console.log('no hasHash', hash)
                hash = defaultHash();
                location.hash = hash;
            }
        };



        const _setDomElements = function(){
            body = $('body');
			headerContainer = $('header');
			mainContainer = $('#main');
			contentSection = mainContainer.find('.content-section');
            footerContainer = $('footer');
            btnGotoTop = $('#goto-top');

            btnToggleMobileGnb = $('#mobile-menu');
            gnbNavItem = $('.gnb .nav-item')
        };

        const _addEvent = function(){
            //$(window.GlobalEvent).on(window.GlobalEvent.CHANGE_ORIENTATION, _onOrientation);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_SCROLL, _onScrollHandler);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_RESIZE, _onResizeHandler)
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_DEVICE_SIZE, _onChangeDeviceSizeHandler)

            // url hashChange
            $(window).on('hashchange',_onChangeHashHandler);

            btnToggleMobileGnb.on({
                click: _onClickMobileGnbToggleBtn
            });

            gnbNavItem.find('.nav-link').on({
                click: _onClickGnbMenuHandler
            });

            btnGotoTop.on({
                click: _onClickGotoTop
            });
        };


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        const _onResizeHandler = function(){
            if(window.Detectizr.device.type == 'mobile') _resizeMobileGnbLayer();
        };

        const _onScrollHandler = function(e, $val){
            oldScrollTop = scrollTop;
            scrollTop = typeof $val === 'object'? $val.top : Math.round($val);
        };

        const _onChangeDeviceSizeHandler = function() {
            if(window.GlobalVars.isSizeMobile) {

            }else{
                if(isOpenedMobileMenu) _onClickMobileGnbToggleBtn();
                $('.gnb').css('height', '');
            }
        };

        let originalMobileHeaderTheme = null;
        const _onClickMobileGnbToggleBtn = function(){
            if(!isOpenedMobileMenu){
                //console.log('Opened Mobile Gnb', currentHeaderThemeCode)
                $('body').addClass(window.GlobalVars.CLASS_NAME_OVERFLOW_HIDDEN);
                headerContainer.addClass('opened-menu');
				 if(currentHeaderThemeCode == window.GlobalVars.THEME.CODE.BLACK) {
                     originalMobileHeaderTheme = currentHeaderThemeCode;
                     _changeThemeHeaderFooter('header', window.GlobalVars.THEME.CODE.WHITE);
                 }
                isOpenedMobileMenu = true;
            }else{
                //console.log('Close Mobile Gnb', currentHeaderThemeCode)
                $('body').removeClass(window.GlobalVars.CLASS_NAME_OVERFLOW_HIDDEN);
                headerContainer.addClass('right-move').one('transitionend', function(){
                    $(this).removeClass('opened-menu right-move');
                    if(originalMobileHeaderTheme == window.GlobalVars.THEME.CODE.BLACK){
                        _changeThemeHeaderFooter('header', window.GlobalVars.THEME.CODE.BLACK);
                        originalMobileHeaderTheme = null;
                    }
                });
                isOpenedMobileMenu = false;
            }
        };

        const _onClickGnbMenuHandler = function(e){
            e.preventDefault();

			if(window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) App.content.work.close_main_gallery_popup();
			let target = $(this).attr('href');
            let currentHashName = target.replace('#', '');

            if(currentHashName == window.GlobalVars.URL_HASH_NAME ) return false;
            location.hash = '/'+ currentHashName;

			if(currentHashName == window.GlobalVars.PAGE_SECTION_ID_NAME.WORK){
			    //console.log('work menu click:: theme color', originalMobileHeaderTheme)
                App.content.company.off_company();
                if(window.GlobalVars.isSizeMobile){
                    if(originalMobileHeaderTheme == window.GlobalVars.THEME.CODE.BLACK) setTimeout(function(){
                        _changeThemeHeaderFooter('header', window.GlobalVars.THEME.CODE.WHITE);
                    },500);
                }else{
                    if(currentHeaderThemeCode == window.GlobalVars.THEME.CODE.BLACK)_changeThemeHeaderFooter('header', window.GlobalVars.THEME.CODE.WHITE);
                }
			}else if(currentHashName == window.GlobalVars.PAGE_SECTION_ID_NAME.COMPANY) {
				//App.content.company.init_onscroll(); //company
			}
            $(window).scrollTop(0);
			if(!$(this).hasClass('btn') && window.GlobalVars.isSizeMobile) _onClickMobileGnbToggleBtn();
        };

        const _activeGnbMenu = function($hashName){
            gnbNavItem.closest('.nav-bar').find('a').removeClass('active');
            gnbNavItem.find('[href="#'+ $hashName +'"]').addClass('active');
        };

		const _onChangeHashHandler = function(){
		    console.log('onChangeHash')
            _checkHash();
		};

		const _onClickGotoTop = function(e){
		    e.preventDefault();
		    $(window).scrollTop(0);
        };
	

		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const _resizeMobileGnbLayer = function(){
            $('.gnb').css('height', window.innerHeight);
        }

        const _changePage = function(){
            location.hash = '/'+ hashName;
        }

        const _activeCurrentPage = function(hashName){
            console.log('_activeCurrentPage', )
			if(window.GlobalVars.isSizeMobile && isOpenedMobileMenu) _onClickMobileGnbToggleBtn();
            hashName = hashName.split('#/')[1];
            contentSection.removeClass('show');
            if((/pg\-.*/g).test(body.attr('class'))) body.removeClass(body.attr('class').match(/pg\-.*/g));
            body.addClass('pg-'+ hashName);
            $('#' +hashName).addClass('show');
            _activeGnbMenu(hashName);

            if(hashName == window.GlobalVars.PAGE_SECTION_ID_NAME.WORK){
                console.log('work!!', hashName, window.GlobalVars.URL_HASH_NAME)
                body.removeClass(window.GlobalVars.CLASS_NAME_OVERFLOW_VISIBLE);
                App.content.work.work_swiper_init();
            }else if(hashName == window.GlobalVars.PAGE_SECTION_ID_NAME.COMPANY){
                console.log('company!!')
                //body.addClass(window.GlobalVars.CLASS_NAME_OVERFLOW_VISIBLE);
                App.content.work.reset();
                App.content.company.init_company();
            }
        };

        const _changeThemeHeaderFooter = function($target, $themeColor){
            //console.log('_changeThemeHeaderFooter theme color::', currentHeaderThemeCode, $themeColor, $target)
			if($target === undefined && $themeColor === undefined ) {
				headerContainer.removeClass(window.GlobalVars.THEME.CLASS_NAME.WHITE).removeClass(window.GlobalVars.THEME.CLASS_NAME.BLACK);
				footerContainer.removeClass(window.GlobalVars.THEME.CLASS_NAME.WHITE).removeClass(window.GlobalVars.THEME.CLASS_NAME.BLACK);
                btnGotoTop.removeClass(window.GlobalVars.THEME.CLASS_NAME.WHITE).removeClass(window.GlobalVars.THEME.CLASS_NAME.BLACK);
                currentHeaderThemeCode = null;
			}else{
				let themeTarget = ($target === undefined)? 'all': $target;
				if($themeColor == window.GlobalVars.THEME.CODE.BLACK) {
                    currentHeaderThemeCode = window.GlobalVars.THEME.CODE.BLACK;
					if(themeTarget == 'header' || themeTarget == 'all' ){
                        headerContainer.removeClass(window.GlobalVars.THEME.CLASS_NAME.WHITE).addClass(window.GlobalVars.THEME.CLASS_NAME.BLACK);
                    }
					if(themeTarget == 'footer' || themeTarget == 'all') footerContainer.removeClass(window.GlobalVars.THEME.CLASS_NAME.WHITE).addClass(window.GlobalVars.THEME.CLASS_NAME.BLACK);
					if(themeTarget == 'goto-top') btnGotoTop.removeClass(window.GlobalVars.THEME.CLASS_NAME.WHITE).addClass(window.GlobalVars.THEME.CLASS_NAME.BLACK);
				}else if($themeColor == window.GlobalVars.THEME.CODE.WHITE){
                    currentHeaderThemeCode = window.GlobalVars.THEME.CODE.WHITE
					if(themeTarget == 'header' || themeTarget == 'all' ){
                        headerContainer.removeClass(window.GlobalVars.THEME.CLASS_NAME.BLACK).addClass(window.GlobalVars.THEME.CLASS_NAME.WHITE);
                    }
					if(themeTarget == 'footer' || themeTarget == 'all') footerContainer.removeClass(window.GlobalVars.THEME.CLASS_NAME.BLACK).addClass(window.GlobalVars.THEME.CLASS_NAME.WHITE);
					if(themeTarget == 'goto-top') btnGotoTop.removeClass(window.GlobalVars.THEME.CLASS_NAME.BLACK).addClass(window.GlobalVars.THEME.CLASS_NAME.WHITE);
				}
			}
        };

        return {
            init: _init,
			theme_head_footer: _changeThemeHeaderFooter,
            goto_page: _onClickGnbMenuHandler,
        }
    })(App);

    App.ui.main = Ui_Frame;
});
