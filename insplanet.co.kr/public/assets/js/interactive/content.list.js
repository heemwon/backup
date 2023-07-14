
define(['app', 'TweenMax', 'TweenLite'], function (App, TW, TL) {

    const ContentList = (function (ns) {
        let mainContainer;
        let arrProjectListData = null;
        let mainProjectList, mainGalleryDetailPopup;
        let scrollTop, scrollBottom;
        //let isCompletedImagesLoad = false;

        const _init = function () {
            _setDomElements();

            _addEvent();
            $.getJSON(window.GlobalVars.JSON_URL_PORTFOLIO, function(data){
                _setMainPojectList(data.portfolio_data);
            });
        };

        const _setDomElements = function () {
            mainContainer = $('#main');
            // list
            mainProjectList = $('.list-project');
            mainProjectList2 = $('.list-project ul li');
            mainGalleryDetailPopup = $('#popup-gallery-detail');
        };

        const _setMainPojectList = function(portfolio_data){
            let tempProjectItem = '';
            arrProjectListData = portfolio_data
            arrProjectListData.forEach(function (data) {
                tempProjectItem += ''+
                    '                <li>' +
                    '                    <span class="service">' + data.category + '</span>' +
                    '                    <span class="date">' + data.detail.desc.date + '</span>' +
                    '                    ' + data.title2 + '' +
                    '                </li>' ;
            });
            mainProjectList.find('ul').html(tempProjectItem);
            mainProjectList.find('ul li').on('click',function(){
                _fetchDataProjectPopup($(this).index())
                _completedFetchDataGalleryPopup()
            });
        }

        const _completedFetchDataGalleryPopup = function () {
            setTimeout(function () {
                mainGalleryDetailPopup.find('.btn-close').addClass('show');
            }, 500)

            mainGalleryDetailPopup.one('scroll touchmove mousewheel', function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });

            mainGalleryDetailPopup.addClass("fade-in show").one('transitionend', function () {
                $(this).removeClass('fade-in');
                setTimeout(function () {
                    $('body').addClass(window.GlobalVars.CLASS_NAME_OVERFLOW_VISIBLE);
                    $('footer').show();
                    mainGalleryDetailPopup.off('scroll touchmove mousewheel').addClass('static');
                    window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP = true;
                    _onScrollContentSection();
                }, 300);
            });

            mainContainer.addClass('fade-out').one('transitionend', function () {
                mainContainer.removeClass('fade-out').addClass('hide');
            });

            $('body').addClass('opened-gallery-popup');
        }

        const _onScrollhandler = function (e, $val) {
            scrollTop = typeof $val === 'object' ? $val.top : $val;
            _onScrollContentSection();
        };

        const _onResizeHandler = function (e) {
            if (window.Detectizr.device.type != 'desktop') _setSlideContainerHeight();
        };

        const _onScrollContentSection = function () {
            if (!window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) return false;
            setTimeout(function () {
                scrollBottom = Math.ceil($(window).height() + (scrollTop === undefined ? 0 : scrollTop));
                mainGalleryDetailPopup.find('.motion').each(function () {
                    //console.log('elTop', scrollBottom, Math.ceil($(this).offset().top), Math.ceil($(window).width()/$(window).height()))
                    if (scrollBottom >= Math.ceil($(this).offset().top)) {
                        if (!$(this).hasClass('animate')) $(this).addClass('animate');
                    } else {
                        if ($(this).hasClass('animate')) $(this).removeClass('animate');
                    }
                });
            }, 0)
        };

        const _onChangeDeviceSizeHandler = function () {
            //_setMainGalleryList(arrPortfolioGalleryListData);
            if (window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) _CloseMainGalleryPopup();
        };

        //프로젝트 상세 팝업
        function _fetchDataProjectPopup(idx, type) {
            let detailData = arrProjectListData[idx];
            // console.log('_fetchDataGalleryPopup', detailData, idx)
            let descSection = mainGalleryDetailPopup.find('.dtail-sec-1');
            descSection.find('.title').html(detailData.title);
            descSection.find('.service').html(detailData.detail.desc.service);
            descSection.find('.date').html(detailData.detail.desc.date);
            descSection.find('.desc').html(detailData.detail.desc.about);
            let deviceList = detailData.detail.desc.device.map(function (item) {
                switch (item) {
                    case 0 :
                        //return '<li><span class="icon icon-device android"><i class="blind">Android</i></span></li>';
                        return '<li><span class="icon icon-device pc"><i class="blind">PC</i></span></li>';
                        break;
                    case 1 :
                        //return '<li><span class="icon icon-device apple"><i class="blind">Apple</i></span></li>';
                        return '<li><span class="icon icon-device mobile"><i class="blind">Mobile</i></span></li>';
                        break;
                    default :
                        //return '<li><span class="icon icon-device desktop"><i class="blind">Desktop</i></span></li>';
                        return '<li><span class="icon icon-device consulting"><i class="blind">consulting</i></span></li>';
                }
            });
            descSection.find('.device-list').html(deviceList);

            // 이미지 컨텐츠
            let imageSection = mainGalleryDetailPopup.find('.dtail-sec-2');
            let tempImgItems = '';
            let detailBodyImg = window.GlobalVars.isSizeMobile ? detailData.detail.body_img.mobile : detailData.detail.body_img.pc;
            if (detailBodyImg.length > 0) {
                if (imageSection.hasClass('hide')) imageSection.removeClass('hide');
                detailBodyImg.forEach(function (imgSrc) {
                    tempImgItems += '<div class="img motion">' +
                        '                   <img src="' + imgSrc + '" alt="">' +
                        '               </div>';
                });
                imageSection.find('.img-holder').html(tempImgItems);
            } else {
                imageSection.addClass('hide');
            }
        }

        const _CloseMainGalleryPopup = function () {
            $('footer').hide();
            mainContainer.addClass('show')
            mainGalleryDetailPopup.find('.btn-close').removeClass('show');
            setTimeout(function () {
                mainContainer.addClass('fade-in').removeClass('hide').one('transitionend', function () {
                    $(this).removeClass('fade-in show hide');
                });
            }, 15);

            mainGalleryDetailPopup.addClass('fade-out').removeClass('show').one('transitionend', function () {
                //스타일 제거
                $(this).removeClass("fade-out static show");

                window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP = false;
                $(window).scrollTop(0);
                isMoveMouseWheelGalleryList = false;
                $('body').removeClass('opened-gallery-popup');
                if (mainGalleryDetailPopup.find('.dtail-sec-2').hasClass('hide')) mainGalleryDetailPopup.find('.dtail-sec-2').removeClass('hide');
                else mainGalleryDetailPopup.find('.dtail-sec-2').find('.img-holder').empty();
            });
        };

        const _onClickCloseMainGalleryPopup = function (e) {
            if (e) e.preventDefault();
            _CloseMainGalleryPopup();
            $('body').removeClass(window.GlobalVars.CLASS_NAME_OVERFLOW_VISIBLE);
        };

        const _addEvent = function(){
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_RESIZE, _onResizeHandler);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_SCROLL, _onScrollhandler);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_DEVICE_SIZE, _onChangeDeviceSizeHandler);
            mainGalleryDetailPopup.find(".btn-back-list").on('click', _onClickCloseMainGalleryPopup);
        };

        return {
            init: _init,
            //is_completedImgLoad: isCompletedImagesLoad,
            close_main_gallery_popup: _CloseMainGalleryPopup,
            init_onscroll: _onScrollContentSection,
        }
    })(App);

    App.content.list = ContentList;
});
