/*=========================================================== [ Contents ] =======================================================================*/
define(['app', 'TweenMax', 'TweenLite', 'TimelineMax', 'ScrollMagic', 'ScrollMagicPlugin', 'ScrollMagicDebug', 'TweenScrollTo'], function (App, TW, TL, TLM, ScrollMagic, PL, DB, ScrollTo) {
    const Company = (function (ns) {
        let scrollTop;
        let isCurrentPageInit = false;
        let sec2, secContentPanel, motionItems,
            isMovingSection = false,
            sectionScrollController = null;
        let touchStartAxisInfo, touchSwipeDirection = null;
        let btnGotoTop;

        let arrSwiperListImgs = [];
        let mainContainer;
        let mainProjectList2, mainGalleryDetailPopup;
        let instanceSwiper, mainSwiper = null;
        let activeMainGalleryIndex = 0;

        const _init = function (swiper) {

            _setDomElements();
            _MakeStripText();
            $.getJSON(window.GlobalVars.JSON_URL_PORTFOLIO, function(data){
                _setMainPojectList2(data.portfolio_data);
            });
        };

        const _setDomElements = function () {
            mainContainer = $('#main');
            sec2 = $("#company");
            secContentPanel = sec2.find(".sec-content");
            motionItems = sec2.find(".motion");
            btnGotoTop = $('#goto-top');

            mainProjectList2 = $('#gallery-list-swiper2');
            mainGalleryDetailPopup = $('#popup-gallery-detail');
            mainGalleryDetailKeySection = mainGalleryDetailPopup.find('.dtail-sec-kv');
        };

        const _addEvent = function () {
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_RESIZE, _onResize);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_SCROLL, _onScroll);
            $('.sec-2 .sec-content').on({
                mousewheel: _onMouseWheel,
                touchstart: _onTouchStart,
                touchmove: _onTouchMove,
                touchend: _onTouchEnd,
            })
        }

        const _removeEvent = function () {
            $(window.GlobalEvent).off(window.GlobalEvent.CHANGE_SCROLL);
            $(window.GlobalEvent).off(window.GlobalEvent.CHANGE_DEVICE_SIZE);
            $('.sec-2 .sec-content').off('mousewheel').off('touchstart').off('touchmove');
        };

        const _onScroll = function (e, $val) {
            scrollTop = typeof $val === 'object' ? $val.top : $val;
            _onScrollContentSection();
        };

        const _onResize = function (e, $val) {

        };

        const _onScrollContentSection = function () {
            if (window.GlobalVars.URL_HASH_NAME != 'company') return false;
            //console.log('company onScroll Section')
            if (scrollTop === 0) {
                _resetCompany();
            }
        };

        const _resetCompany = function () {
            _resetTextMotions();
            secContentPanel.find('.inner-section').removeAttr('style');
            btnGotoTop.removeClass('show');
            $('footer').removeClass('show');
            App.ui.main.theme_head_footer('header');
            isMovingSection = false;
        };

        const _initCompany = function () {
            // console.log('_init Motion of Company')
            if (window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) App.content.work.close_main_gallery_popup();
            _addEvent();
            $(window).scrollTop(0);
            const video = document.querySelectorAll('#company video');
            for (let i = 0, leng = video.length; i < leng; i++) {
                video[i].play();
            }
            _initScrollMagicSection();
        }

        // scrollMagic initialize
        const _initScrollMagicSection = function () {
            sectionScrollController = new ScrollMagic.Controller();
            // change behavior of controller to animate scroll instead of jump
            sectionScrollController.scrollTo(function (newpos, sectionArr) {
                let section = sectionArr[0];
                let secIndex = sectionArr[1];
                let dir = sectionArr[2];
                //console.log('sectionScrollController previous Inf::', newpos, ' secIndex ::' + secIndex, ' moveDir::' + dir, ' scrollTop::' +scrollTop)

                TweenMax.to(window, 0.5, {
                    scrollTo: {y: newpos},
                    onComplete: function () {
                        // console.log('TweenMax callback ::=>', newpos, 'scrollTop::' + scrollTop)
                        secContentPanel.removeClass('current').eq(dir == 'prev' ? secIndex - 1 : secIndex + 1).addClass('current');
                    }
                });

                if (dir == 'prev') {
                    // console.log('scrollDir End Prev', secIndex)

                    setTimeout(function () {
                        //console.log('scrollDir End Prev ==> setTimeout')
                        _setElementFocus(section, scrollTop + window.innerHeight);
                        if (section.hasClass('full-bleed-card')) {
                            if (section.find('.title span').hasClass("animate")) {
                                section.find('.title span').removeClass("animate");
                            }
                        }
                    }, 250);

                    //if (secIndex == 0 || secIndex == 1 || secIndex == 2 || secIndex == 5 || secIndex == 6) {
                        TweenMax.to(section.find('.inner-section'), 0.5, {
                            top: '100%',
                            onComplete: function () {
                                //console.log('prev:: callback section 0, 1, 5, 6 ==>', secIndex)
                                if (secIndex == 1) {
                                    App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.WHITE);
                                    if (secIndex == 1) btnGotoTop.removeClass('show');
                                    else if (secIndex == 5) App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.WHITE);
                                }

                                if (secIndex == 2 || secIndex == 3 || secIndex == 4 || secIndex == 5 ) {
                                    App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.BLACK);
                                    App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.BLACK);
                                }
                                isMovingSection = false;
                            }
                        });
                    // } else if (secIndex == 3 || secIndex == 4) {
                    //     TweenMax.to(section.find('.inner-section'), 0.5, {
                    //         autoAlpha: 0,
                    //         onComplete: function () {
                    //             //console.log('prev:: full-bleed callback section-prev, current 2,3,4 ==>')
                    //         }
                    //     })
                    //     TweenMax.to(section.prev().find('.inner-section-current'), 0.5, {
                    //         autoAlpha: 1,
                    //         onComplete: function () {
                    //             //console.log('prev:: full-bleed callback section, prev 2,3,4 ==>', secIndex)
                    //             isMovingSection = false;
                    //         }
                    //     });
                    // }

                    if (secIndex == 4) {
                        $('footer').removeClass('show');
                    }

                    $('.sec-cont-6').removeClass('last-panel');

                } else if (dir == 'next') {
                    // console.log('scrollDir End Next', secIndex)

                    // full-bleed-card
                    if (secIndex == 1 || secIndex == 2 || secIndex == 3) {
                        var sec = sec2.find(".full-bleed-card").eq(secIndex - 1);
                        if (!sec.find("span").hasClass("animate")) {
                            _splittedTextReveal(sec);
                        }
                    }
                    // 섹션내 모션
                    setTimeout(function () {
                        _setElementFocus(section, scrollTop + window.innerHeight);
                    }, 200);

                    //if (secIndex == 0 || secIndex == 1 || secIndex == 4 || secIndex == 5 || secIndex == 6) {
                        TweenMax.to(section.find('.inner-section'), 0.5, {
                            top: 0,
                            onComplete: function () {
                                //console.log('next:: callback normal section', secIndex)
                                if (secIndex == 0 || secIndex == 1|| secIndex == 2|| secIndex == 3|| secIndex == 4) {
                                    if (secIndex == 0) btnGotoTop.addClass('show');
                                    App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.BLACK);
                                    App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.BLACK);
                                }
                                // if (secIndex == 1) {
                                //     App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.WHITE);
                                //     App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.WHITE);
                                // }
                                if (secIndex == 2) {
                                    $('.sec-cont-6').addClass('last-panel');
                                }
                                if (secIndex == 3) {
                                    $('footer').addClass('show');
                                }
                                isMovingSection = false;
                            }
                        });
                        if (secIndex == 1) {
                            intervalList = 2;
                            setInterval(function(){
                                $('.contain-list-project >ul >li').removeClass('on');
                                $('.contain-list-project >ul >li:nth-child('+ intervalList +')').addClass('on');
                                if(intervalList < 5){
                                    intervalList = intervalList + 1;
                                }else{
                                    intervalList = 1;
                                }
                            }, 4000);
                        }
                    // } else if (secIndex == 2 || secIndex == 3) {
                    //     TweenMax.to(section.find('.inner-section'), 0.5, {
                    //         autoAlpha: 1,
                    //         onComplete: function () {
                    //             isMovingSection = false;
                    //         }
                    //     });
                    // }

                    if (secIndex == 1) {
                        //$('.sec-cont-3, .sec-cont-4').find('.inner-section').css({top: 0})
                    }
                }

                // 휠 이벤트 등록
                if(window.Detectizr.device.type == 'desktop'){
                    setTimeout(function () {
                        $('.sec-2 .sec-content').on({
                            mousewheel: _onMouseWheel,
                        })
                    }, 1500)
                }
            });
        };

        const _onMouseWheel = window.Site.utils.debounce(
            function (e) {
                let delta = e.originalEvent.deltaY * -1;
                //let delta = e.originalEvent.deltaY || -e.originalEvent.detail;
                console.log('before-delta', delta, e.originalEvent)
                //delta = delta < 40 ? Math.ceil(delta/4) : delta;
                let target = e.currentTarget
                console.log('delta after', delta, $(target).index())
                if (delta > 0 && $(target).index() > 0) {
                    console.log('up-----')
                    _movePreviousSection(e, e.currentTarget);
                    if ($(target).index() > 0) $('.sec-2 .sec-content').off('mousewheel');
                } else if (delta < 0 && $(target).index() === 0 || delta < 0 && $(target).index() > 0 && $(target).index() < secContentPanel.length - 1) {
                    console.log('down-----')
                    _moveNextSection(e, e.currentTarget);
                    if ($(target).index() < secContentPanel.length - 1) $('.sec-2 .sec-content').off('mousewheel');
                }
            }, 30
        );

        const _onTouchStart = function (e) {
            touchStartAxisInfo = window.Site.utils.initTouch(e);
        };

        const _onTouchMove = function (e) {
            e.preventDefault();
            e.stopPropagation();
            touchSwipeDirection = window.Site.utils.touchMoveDirection(e, touchStartAxisInfo);
            // console.log('ontouchmove ::==>', touchSwipeDirection, touchStartAxisInfo)

            if (touchSwipeDirection === undefined) return false;
        };

        const _onTouchEnd = function (e) {
            if (touchSwipeDirection == 'top') {
                _moveNextSection(e, this);
            } else if (touchSwipeDirection == 'bottom') {
                _movePreviousSection(e, this);
            }
            touchSwipeDirection = null;
        }

        // Section Move
        const _movePreviousSection = function (e, section) {
            if ($(section).index() > 0 && !isMovingSection) {
                sectionScrollController.scrollTo('#' + $(section).prev()[0].id, [$(section), $(section).index(), 'prev'])
                isMovingSection = true;
            }
        };
        const _moveNextSection = function (e, section) {
            if ($(section).index() < $('.sec-2 .sec-content').length - 1 && !isMovingSection) {
                sectionScrollController.scrollTo('#' + $(section).next()[0].id, [$(section).next(), $(section).index(), 'next']);
                isMovingSection = true;
            }
        };

        const _offCompany = function () {
            if (sectionScrollController !== null) {
                sectionScrollController.destroy(true);
                sectionScrollController = null;
                sec2.find('video').removeClass('start');
                sec2.find('video').each(function () {
                    this.pause();
                });
                //if(window.Detectizr.device.type == 'mobile') sec2.find('.inner-sec').removeAttr('style');
                _resetCompany();
                _removeEvent();
            }
        };

        // full-bleed-card Strip Text
        const _MakeStripText = function () {
            // strip text
            sec2.find(".strip").each(function () {
                var $t = $(this),
                    rows = $.trim($t.html()).split("<br>");

                $t.html("");

                $.each(rows, function (i, val) {
                    $('<span class="row"></span>').appendTo($t);

                    var letters = $.trim(val).split("");

                    $.each(letters, function (j, v) {
                        v = v == " " ? "&nbsp;" : v;
                        $("<span>" + $.trim(v) + "</span>").appendTo($(".row:last", $t));
                    });
                });
            });
        };

        const _slideUpText = function (sec) {
            if (!sec.find(".desc").hasClass("animate")) {
                for (let i = 0; i < sec.find(".strip span").length; i++) {
                    (function (ind) {
                        setTimeout(function () {
                            sec.find('.strip span:not(".row")').eq(ind).addClass("animate");
                        }, ind * 30);
                    })(i);
                }
            }
        };

        const _splittedTextReveal = function (container) {
            _slideUpText(container)
        }

        const _setElementFocus = function (sec) {
            let motions = sec.find('.motion');
            motions.each(function () {
                let elem = $(this);
                if (!elem.hasClass("animate")) {
                    elem.addClass("animate");
                } else if (elem.hasClass("animate")) {
                    elem.removeClass("animate");
                }
            });
        }

        const _resetTextMotions = function () {
            if (sec2.find('.motion').hasClass('animate')) {
                sec2.find('.motion').removeClass('animate').find('span').removeClass('animate');
            }
        }

        const _slideLeftText = function (sec) {
            if (!sec.find(".desc").hasClass("animate")) {
                for (let i = 0; i < sec.find(".strip span").length; i++) {
                    (function (ind) {
                        setTimeout(function () {
                            sec.find('.strip span:not(".row")').eq(ind).addClass("animate");
                        }, ind * 30);
                    })(i);
                }
            }
        };

        const _setMainPojectList2 = function(portfolio_data){
            let tempProjectItem = '';
            arrProjectListData = portfolio_data
            // //let detailData = arrProjectListData[idx];
            // arrProjectListData.forEach(function (data) {
            //     tempProjectItem += ''+
            //         '                <li class="swiper-slide">' +
            //         '                    <ul class="device-list"></ul>' +
            //         '                    ' + data.title2 + '' +
            //         '                    <span class="service">' + data.category + '</span>' +
            //         '                </li>' ;
            // });

            //descSection.find('.device-list').html(deviceList);
            //mainProjectList2.find('.swiper-wrapper').html(tempProjectItem);
            mainProjectList2.find('.swiper-slide').on('click',function(){
                if($(this).attr('data-index') == 5){
                    location.replace('/index.html#/list')
                }else{
                    _fetchDataProjectPopup($(this).attr('data-index'))
                    _completedFetchDataGalleryPopup()
                }
            });
        }

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

        const _setSlideContainerHeight = function () {
            setTimeout(function () {
                if (window.Detectizr.device.type == 'mobile') {
                    if ($('html').hasClass('portrait')) {
                        mainGalleryList.css('height', window.innerHeight);
                    } else if ($('html').hasClass('landscape')) {
                        mainGalleryList.css('height', window.innerWidth);
                    }
                } else if (window.Detectizr.device.type == 'tablet') {
                    mainGalleryList.css('height', window.innerHeight);
                }
            }, 150);
        };

        const swiper = new Swiper('#gallery-list-swiper2',{
            slidesPerView: 1,
            spaceBetween: 15,
        })

        $('#goto-top').on('click',function(e){
            e.preventDefault();
            location.reload();
        });

        return {
            init: _init,
            init_company: _initCompany,
            off_company: _offCompany,
            init_onscroll: _onScrollContentSection,

        }
    })(App);

    App.content.company = Company;
});
