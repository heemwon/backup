/////////////////////////////////////////////////////////////////////////////////////
// section #1
define(['app', 'TweenMax', 'TweenLite', 'ScrollMagic', 'ScrollMagicPlugin', 'ScrollMagicDebug'], function (App, TW, TL, ScrollMagic) {

    const ContentWork = (function (ns) {
        let mainContainer;

        let arrPortfolioGalleryListData = null;
        let mainGalleryList, mainGalleryDetailPopup, mainGalleryDetailKeySection;
        let instanceSwiper, mainSwiper=null;
        let activeMainGalleryIndex = 0;
        let scrollTop, scrollBottom;

        let isStandbyNextPage = false;

        const _init = function (swiper) {
            instanceSwiper = swiper;
            _setDomElements();
            (async function getJson(){
                let url = window.GlobalVars.JSON_URL_PORTFOLIO;
                let response = await fetch(url);
                let commits = await response.json(); // 응답 본문을 읽고 JSON 형태로 파싱함
                console.log('init', commits)
                _setMainGalleryList(commits.portfolio_data);
            })();

            //$(window.GlobalEvent).on(window.GlobalEvent.CHANGE_ORIENTATION, _onOrientationHandler);
        };

        const _setDomElements = function(){
            mainContainer = $('#main');

            // work
            mainGalleryList =$('#gallery-list-swiper');
            mainGalleryDetailPopup = $('#popup-gallery-detail');
            mainGalleryDetailKeySection = mainGalleryDetailPopup.find('.dtail-sec-kv');
        };

        const _setSlideContainerHeight = function(){
            setTimeout(function(){
                if(window.Detectizr.device.type == 'mobile'){
                    if($('html').hasClass('portrait')) {
                        mainGalleryList.css('height', window.innerHeight);
                    }else if($('html').hasClass('landscape')) {
                        mainGalleryList.css('height', window.innerWidth);
                    }
                }else if(window.Detectizr.device.type == 'tablet'){
                    mainGalleryList.css('height', window.innerHeight);
                }
            }, 150);
        };

        const _onScrollhandler = function(e, $val){
            scrollTop = typeof $val === 'object'? $val.top : $val;
            _onScrollContentSection();
        };

        const _onResizeHandler = function(e){
            if(window.Detectizr.device.type != 'desktop') _setSlideContainerHeight();
        };

        const _onChangeDeviceSizeHandler = function(){
            //_setMainGalleryList(arrPortfolioGalleryListData);
            if(window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) _CloseMainGalleryPopup();
        };

        const _onScrollContentSection = function() {
            if(!window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) return false;
            setTimeout(function(){
                scrollBottom = Math.ceil($(window).height() + (scrollTop === undefined? 0 : scrollTop));
                mainGalleryDetailPopup.find('.motion').each(function(){
                    //console.log('elTop', scrollBottom, Math.ceil($(this).offset().top), Math.ceil($(window).width()/$(window).height()))
                    if(scrollBottom >= Math.ceil($(this).offset().top)) {
                        if(!$(this).hasClass('animate')) $(this).addClass('animate');
                    }else{
                        if($(this).hasClass('animate')) $(this).removeClass('animate');
                    }
                });

                //더보기 섹션
                let btnNextContent = mainGalleryDetailPopup.find('.next-page-title');
                if(scrollBottom <= Math.ceil(mainGalleryDetailPopup.height())) {
                    if(btnNextContent.hasClass('is-active')) {
                        isStandbyNextPage = false;
                        btnNextContent.removeClass('is-active');
                    }
                }else{
                    // 풋터 영역에 가까워지면...
                    if(!btnNextContent.hasClass('is-active')){
                        isStandbyNextPage = true;
                        btnNextContent.addClass('is-active');
                        $(window).scrollTop(scrollBottom + 50);
                    }
                }
            },0)
        };

        const _setMainGalleryList = function(portfolio_data){
            arrPortfolioGalleryListData = portfolio_data;
            let tempPortfolioItem='';

            arrPortfolioGalleryListData.forEach(function(data){
                let thumbImg = window.GlobalVars.isSizeMobile? data.thumb_src.mobile : data.thumb_src.pc;
                tempPortfolioItem += '<li class="list-item swiper-slide">' +
                    '                     <div class="list-link">' +
                    '                        <figure class="img-holder image-cover">' +
                    '                           <div class="img"><img class="js-img-change" src="'+ thumbImg +'" alt=""></div>' +
                    '                           <figcaption>' +
                    '                             <div class="txt-holder">' +
                    '                               <strong class="cap"><span>'+ data.category +'</span></strong>' +
                    '                               <span class="title"><span>'+ data.title +'</span></span>' +
                    '                             </div>' +
                    '                           </figcaption>' +
                    '                        </figure>' +
                    '                     </div>' +
                    '                  </li>';
            });
            mainGalleryList.find('.gallery-list').html(tempPortfolioItem);
        };


        const _makeMainSwiper = function(){
            let touchStartInfo = null;
            try{
                let options ={
                    initialSlide: 0,
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on:{
                        init: function(){
                            if(window.Detectizr.device.type != 'desktop') _setSlideContainerHeight();
                            // mainGalleryList.find('.swiper-button-prev .txt').html(arrPortfolioGalleryListData[arrPortfolioGalleryListData.length - 1].title);
                            // mainGalleryList.find('.swiper-button-next .txt').html(arrPortfolioGalleryListData[1].title)
                        },
                        slideChange: function(e){
                            // if(this.realIndex == 0){
                            //     mainGalleryList.find('.swiper-button-prev .txt').html(arrPortfolioGalleryListData[arrPortfolioGalleryListData.length - 1].title);
                            //     mainGalleryList.find('.swiper-button-next .txt').html(arrPortfolioGalleryListData[this.realIndex + 1].title);
                            // } else if(this.realIndex > 0 && this.realIndex < arrPortfolioGalleryListData.length - 1){
                            //     mainGalleryList.find('.swiper-button-prev .txt').html(arrPortfolioGalleryListData[this.realIndex - 1].title);
                            //     mainGalleryList.find('.swiper-button-next .txt').html(arrPortfolioGalleryListData[this.realIndex + 1].title);
                            // } else {
                            //     mainGalleryList.find('.swiper-button-prev .txt').html(arrPortfolioGalleryListData[this.realIndex - 1].title);
                            //     mainGalleryList.find('.swiper-button-next .txt').html(arrPortfolioGalleryListData[0].title);
                            // }
                        },
                        slideChangeTransitionEnd: function(){
                            mainGalleryList.find('.gallery-list .swiper-slide').removeClass('active-panel');
                            mainGalleryList.find('.gallery-list .swiper-slide-active').addClass('active-panel');
                        },
                        touchStart: function(e){
                            touchStartInfo = window.Site.utils.initTouch(e);
                        },
                        touchMove: function(e){
                            e.preventDefault();
                            //e.stopPropagation();
                            let hDistance = Math.round(window.innerHeight*0.04);
                            let initialX = touchStartInfo.touchX;
                            let initialY = touchStartInfo.touchY;
                            let currentX = e.touches ? e.touches[0].clientX : e.clientX;
                            let currentY = e.touches ? e.touches[0].clientY : e.clientY;
                            let diffX = (initialX - currentX)*3,
                                diffY = (initialY - currentY)*3;
                            //console.log('swipeDirection', initialY, currentY, diffX, diffY, hDistance)
                            if(Math.abs(diffY) > hDistance && Math.abs(diffY) > Math.abs(diffX) && diffY > 0) {
                                activeMainGalleryIndex = this.realIndex;
                                _fetchDataGalleryPopup(this.realIndex);
                            }
                        },
                    }
                };
                setTimeout(function(){
                    mainSwiper = new instanceSwiper ('#gallery-list-swiper', options);
                    mainSwiper.autoplay.stop();
                    _swiperAutoPlayStart();
                },60)
            }catch(err){
                //setTimeout(function(){
                    _makeMainSwiper();
                //},60);
            }
        };
        const _swiperAutoPlayStart = function(){
            console.log('_swiperAutoPlayStart:mainSwiper', mainSwiper)
            if(mainSwiper === null) return false;
            mainSwiper.autoplay.start();
            _addEvent();
        };

        const _swiperAutoPlayStop = function(idx){
            if(mainSwiper === null) return false;
            if(mainSwiper.autoplay.running) {
                mainSwiper.slideTo(activeMainGalleryIndex == 0 ? 1 : activeMainGalleryIndex + 1); //메뉴 이동: 0, 팝업 오픈: 현재 활성화되어 있는 인덱스
                mainSwiper.autoplay.stop();
            }
        };

        const _destroySwiper = function(){
            console.log('_destroySwiper')
            mainSwiper.destroy();
        };

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Event
        const _addEvent = function(){
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_RESIZE, _onResizeHandler);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_SCROLL, _onScrollhandler);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_DEVICE_SIZE, _onChangeDeviceSizeHandler);
            mainGalleryList.find('.list-link').on('mousewheel', _onMouseWheelGalleryListHandler );
            mainGalleryDetailPopup.find(".btn-back-list").on('click',_onClickCloseMainGalleryPopup);
        };

        const _addEventGallery = function(){
            // mainGalleryDetailPopup.find(".btn-area-dir .btn").on({
            //     click: _changeGalleryDetailContent
            // });
        };

        const _removeEvent = function(){
            $(window.GlobalEvent).off(window.GlobalEvent.CHANGE_RESIZE);
            $(window.GlobalEvent).off(window.GlobalEvent.CHANGE_SCROLL);
            $(window.GlobalEvent).off(window.GlobalEvent.CHANGE_DEVICE_SIZE);
            mainGalleryList.find('.list-link').off('mousewheel');
            mainGalleryDetailPopup.find(".btn-back-list").off('click');
        };

        const debounce = function (f, interval = 30) {
            let now = null;

            return (...param) => {
                if (now) clearTimeout(now);

                now = setTimeout(() => {
                    f(...param);
                }, interval);
            }
        }

        const throttling = (f, interval = 300) => {
            let isPending = false;

            return (...param) => {
                if (!isPending) {
                    isPending = !!setTimeout(
                        () => {
                            f(...param);
                            isPending = false;
                        }, interval);
                }
            }
        }

        // page out!
        _resetWork = function(){
            if(mainSwiper == null) return false;
            _destroySwiper();
            _removeEvent();
        }

        const _onClickTest = function(e){
            e.preventDefault();
            let currentIndex = activeMainGalleryIndex = $(this).parent().data('swiper-slide-index');
            _fetchDataGalleryPopup(currentIndex);
        };

        let isMoveMouseWheel = false;
        const _onMouseWheelGalleryListHandler = function(e) {
            e.preventDefault();
            let currentIndex = activeMainGalleryIndex = $(this).parent().data('swiper-slide-index');
            let delta = e.originalEvent.deltaY || -e.originalEvent.detail;
            //console.log('work', e.type, delta, e.originalEvent.detail, window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP)
            if(delta > 0 && !isMoveMouseWheel) {
                _fetchDataGalleryPopup(currentIndex);
                $(this).off('_onMouseWheelGalleryListHandler');
                isMoveMouseWheel = true;
            }
        }

        // 메인 갤러리 상세 팝업
        function _fetchDataGalleryPopup(idx){
            let detailData = arrPortfolioGalleryListData[idx];
            console.log('_fetchDataGalleryPopup', detailData)
            let descSection = mainGalleryDetailPopup.find('.dtail-sec-1');
            descSection.find('.title').html(detailData.title);
            descSection.find('.service').html(detailData.detail.desc.service);
            descSection.find('.date').html(detailData.detail.desc.date);
            descSection.find('.desc').html(detailData.detail.desc.about);
            let deviceList = detailData.detail.desc.device.map(function(item){
                switch(item){
                    case 0 : return '<li><span class="icon icon-device android"><i class="blind">Android</i></span></li>'; break;
                    case 1 : return '<li><span class="icon icon-device apple"><i class="blind">Apple</i></span></li>'; break;
                    default : return '<li><span class="icon icon-device desktop"><i class="blind">Desktop</i></span></li>';
                }
            });
            descSection.find('.device-list').html(deviceList);

            // 이미지 컨텐츠
            let imageSection = mainGalleryDetailPopup.find('.dtail-sec-2');
            let tempImgItems='';
            let detailBodyImg = window.GlobalVars.isSizeMobile? detailData.detail.body_img.mobile : detailData.detail.body_img.pc;
            if(detailBodyImg.length > 0 ){
                if(imageSection.hasClass('hide')) imageSection.removeClass('hide');
                detailBodyImg.forEach(function(imgSrc){
                    tempImgItems +='<div class="img motion">' +
                        '                   <img src="'+ imgSrc +'" alt="">'+
                        '               </div>';
                });
                imageSection.find('.img-holder').html(tempImgItems);
            }else{
                imageSection.addClass('hide');
            }

            // 목록으로 가기 버튼 아래 다음 페이지 안내 섹션
            if(idx < arrPortfolioGalleryListData.length - 1) mainGalleryDetailPopup.find('.next-page-title button').html(arrPortfolioGalleryListData[idx + 1].title)

            if(!window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) _completedFetchDataGalleryPopup();
        }

        const _checkStatusDetailPopupPrevNextBtns = function(){
            if(activeMainGalleryIndex == 0){
                mainGalleryDetailPopup.find(".btn-area-dir .prev").addClass('disabled');
            }else if(activeMainGalleryIndex == arrPortfolioGalleryListData.length-1 ){
                mainGalleryDetailPopup.find(".btn-area-dir .next").addClass('disabled');
            }else{
                mainGalleryDetailPopup.find(".btn-area-dir .btn").removeClass('disabled');
            }
        };

        const _setGalleryPopupTheme = function(themeColor){
            console.log('theme color::', themeColor)
            window.GlobalVars.MAIN_GALLERY_POPUP_THEME_COLOR = themeColor;
            if(themeColor == window.GlobalVars.THEME.CODE.BLACK) {
                mainGalleryDetailKeySection.removeClass(window.GlobalVars.THEME.CLASS_NAME.WHITE).addClass(window.GlobalVars.THEME.CLASS_NAME.BLACK);
            }else if(themeColor == window.GlobalVars.THEME.CODE.WHITE){
                mainGalleryDetailKeySection.removeClass(window.GlobalVars.THEME.CLASS_NAME.BLACK).addClass(window.GlobalVars.THEME.CLASS_NAME.WHITE);
            }

            App.ui.main.theme_head_footer('header', themeColor);
        };

        const _completedFetchDataGalleryPopup = function(){
           // console.log('_completedFetchDataGalleryPopup')
            _swiperAutoPlayStop();
            setTimeout(function(){
                mainGalleryDetailPopup.find('.btn-close').addClass('show');
            },500)

            // mainGalleryDetailPopup.one('scroll touchmove mousewheel', function(e){
            //     e.preventDefault();
            //     e.stopPropagation();
            //     return false;
            // });

            mainGalleryDetailPopup.addClass("fade-in show").one('transitionend', function(){
                $(this).removeClass('fade-in');
                setTimeout(function(){
                    $('body').addClass(window.GlobalVars.CLASS_NAME_OVERFLOW_VISIBLE);
                    $('footer').show();
                    mainGalleryDetailPopup.off('scroll touchmove mousewheel').addClass('static');
                    window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP = true;
                    _onScrollContentSection();
                },300);
            });

            mainContainer.addClass('fade-out').one('transitionend', function(){
                mainContainer.removeClass('fade-out').addClass('hide');
            });

            $('body').addClass('opened-gallery-popup');

            // 다음 페이지 이동
            mainGalleryDetailPopup.find('.next-page-title button').on('click', _changeGalleryDetailContent);
            //휠로 다음페이지 이동
            $('body').on('wheel.popup', throttling(onWheelScroll, 1200))
        }

        //상세화면에서 마우스 휠 또는 터치무브로 다음 내용으로 전환하기
        let prevScrollBtm, currentScrollBtm;
        const onWheelScroll = function(e) {
            let delta = e.originalEvent.deltaY || -e.originalEvent.detail;
            prevScrollBtm = currentScrollBtm;
            currentScrollBtm = scrollBottom;
            if(scrollTop > 0 && prevScrollBtm ===  currentScrollBtm && isStandbyNextPage && delta > 0) {
                console.log("onWheelScroll", delta);
                _changeGalleryDetailContent()
            }
        };


        const _onClickCloseMainGalleryPopup = function(e){
            if(e) e.preventDefault();
            _CloseMainGalleryPopup();
            $('body').removeClass(window.GlobalVars.CLASS_NAME_OVERFLOW_VISIBLE);
            _swiperAutoPlayStart();
        };

        const _CloseMainGalleryPopup = function(){
            $('footer').hide();
            mainContainer.addClass('show')
            mainGalleryDetailPopup.find('.btn-close').removeClass('show');
            setTimeout(function(){
                mainContainer.addClass('fade-in').removeClass('hide').one('transitionend', function(){
                    $(this).removeClass('fade-in show');
                });
            },15);

            mainGalleryDetailPopup.addClass('fade-out').removeClass('show').one('transitionend', function(){
                //스타일 제거
                $(this).removeClass("fade-out static");

                window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP = false;
                $(window).scrollTop(0);
                isMoveMouseWheel = false;
                $('body').removeClass('opened-gallery-popup');
                if(mainGalleryDetailPopup.find('.dtail-sec-2').hasClass('hide')) mainGalleryDetailPopup.find('.dtail-sec-2').removeClass('hide');
                else mainGalleryDetailPopup.find('.dtail-sec-2').find('.img-holder').empty();
            });

            // 상세페이지, 마우스 휠 이벤트 제거
            $('body').off('wheel.popup');
        };

        // 팝업이 열린상태에서 페이지 이동
        const _changeGalleryDetailContent = function(e){
            if(activeMainGalleryIndex < arrPortfolioGalleryListData.length-1){
                mainGalleryDetailPopup.find('.pop-overlay').addClass('show').addClass('fade-in');
                mainGalleryDetailPopup.find('.pop-overlay').one('transitionend', function(){
                   $(window).scrollTop(0);
                    _fetchDataGalleryPopup(++activeMainGalleryIndex);

                    mainGalleryDetailPopup.find('.pop-overlay').removeClass('fade-in').one('transitionend', function(){
                        mainGalleryDetailPopup.find('.pop-overlay').removeClass('show');
                    })
                })
            }else{
                _CloseMainGalleryPopup();
            }
        };



        return {
            init: _init,
            reset: _resetWork,
            work_swiper_init: _makeMainSwiper,
            swiper_play: _swiperAutoPlayStart,
            swiper_stop: _destroySwiper,
            close_main_gallery_popup : _CloseMainGalleryPopup,
            init_onscroll: _onScrollContentSection,
        }
    })(App);

    App.content.work = ContentWork;
});
