/*=========================================================== [ Contents ] =======================================================================*/
define(['app', 'TweenMax', 'TweenLite', 'TimelineMax', 'ScrollMagic', 'ScrollMagicPlugin', 'ScrollMagicDebug', 'TweenScrollTo'], function (App, TW, TL, TLM, ScrollMagic, PL, DB, ScrollTo) {
    const Company = (function (ns) {
        let scrollTop;
        let isCurrentPageInit = false;
        let sec2, secContentPanel, motionItems,
            isMovingSection = false,
            sectionScrollController = null;
        let btnGotoTop;

        const _init = function () {
            _setDomElements();
            _MakeStripText();
            _onChangeDeviceSizeHandler();
        };

        const _setDomElements = function () {
            sec2 = $("#company");
            secContentPanel = sec2.find(".sec-content");
            motionItems = sec2.find(".motion");
            btnGotoTop = $('#goto-top');
        };

        const _addEvent = function () {
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_RESIZE, _onResize);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_SCROLL, _onScroll);
            $(window.GlobalEvent).on(window.GlobalEvent.CHANGE_DEVICE_SIZE, _onChangeDeviceSizeHandler);
            $('.sec-2 .sec-content').on({
                mousewheel: _onMouseWheel,
                touchstart: _onTouchStart,
                touchmove: _onTouchMove,
            })
        }

        const _removeEvent = function () {
            $(window.GlobalEvent).off(window.GlobalEvent.CHANGE_SCROLL);
            $(window.GlobalEvent).off(window.GlobalEvent.CHANGE_DEVICE_SIZE);
            $('.sec-2 .sec-content').off('mousewheel').off('touchstart').off('touchmove');
        };

        const _onScroll = function (e, $val) {
            scrollTop = typeof $val === 'object'? $val.top : $val;
            _onScrollContentSection();
        };

        const _onResize = function(e, $val){

        };

        const _resizeInnerSecContainer = function(){
            // if(window.Detectizr.device.type != 'desktop') {
            //     console.log('_resizeInnerSecContainer')
            //     let sec = $('#company .sec-content');
            //     sec.css({
            //         height: window.innerHeight
            //     })
            //     sec.find('.inner-section').css({
            //         height: window.innerHeight
            //     });
            // }
        }

        const _onChangeDeviceSizeHandler = function () {
            if (window.GlobalVars.isSizeMobile) {

            } else {

            }
        };

        const _onScrollContentSection = function () {
            if (window.GlobalVars.URL_HASH_NAME != 'company') return false;
            console.log('company onScroll Section')
            if (scrollTop == 0) {
                _resetCompany();
            }
        };

        const _resetCompany = function(){
            _resetTextMotions();
            secContentPanel.find('.inner-section').removeAttr('style');
            btnGotoTop.removeClass('show');
            $('footer').removeClass('show');
            App.ui.main.theme_head_footer('header');
            isMovingSection = false;
        };

        const _initCompany = function () {
            console.log('_init Motion of Company')
            if(window.GlobalVars.IS_OPENED_MAIN_GALLERY_POPUP) App.content.work.close_main_gallery_popup();
            _addEvent();
            $(window).scrollTop(0);
            const video = document.querySelectorAll('#company video');
			for(let i=0, leng = video.length; i < leng; i++){
				video[i].play();
			}
            _initScrollSection();
        }

        // scrollMagic initialize
        const _initScrollSection = function () {
            sectionScrollController = new ScrollMagic.Controller();
            // change behavior of controller to animate scroll instead of jump
            sectionScrollController.scrollTo(function (newpos, sectionArr) {
                let section = sectionArr[0];
                let secIndex = sectionArr[1];
                let dir = sectionArr[2];
                //console.log('sectionScrollController previous Inf::', newpos, ' secIndex ::' + secIndex, ' moveDir::' + dir, ' scrollTop::' +scrollTop)

                TweenMax.to(window, 0.5, {
                    scrollTo: {y: newpos},
                    onComplete: function(){
                        //console.log('TweenMax callback::=>', newpos, 'scrollTop::' + scrollTop)
                        secContentPanel.removeClass('current').eq(dir == 'prev'? secIndex-1 : secIndex +1).addClass('current');
                        if(secIndex == 5){

                        }
                        if(secIndex == 6){

                        }
                    }
                });

                if (dir == 'prev') {
                    console.log('scrollDir End Prev')

                    setTimeout(function(){
                        _setElementFocus(section, scrollTop + window.innerHeight);
                        if(section.hasClass('full-bleed-card')){
                            if (section.find('.title span').hasClass("animate")) {
                                section.find('.title span').removeClass("animate");
                            }
                        }
                    }, 250);

                    if (secIndex == 0 || secIndex == 1 || secIndex == 2 || secIndex == 5 || secIndex == 6) {
                        TweenMax.to(section.find('.inner-section'), 0.5, {
                            top: '100%',
                            onComplete: function () {
                                //console.log('prev:: callback section 0, 1, 5, 6 ==>', secIndex)
                                if(secIndex == 1 || secIndex == 6){
                                    App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.WHITE);
                                    if(secIndex == 1) btnGotoTop.removeClass('show');
                                    else if(secIndex == 6) App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.WHITE);
                                }

                                if(secIndex == 2) {
                                    App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.BLACK);
                                    App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.BLACK);
                                }
                                isMovingSection = false;
                            }
                        });
                    } else if (secIndex == 3 || secIndex == 4) {
                        TweenMax.to(section.find('.inner-section'), 0.5, {
                            autoAlpha: 0,
                            onComplete: function () {
                                //console.log('prev:: full-bleed callback section-prev, current 2,3,4 ==>')
                            }
                        })
                        TweenMax.to(section.prev().find('.inner-section-current'), 0.5, {
                            autoAlpha: 1,
                            onComplete: function(){
                                //console.log('prev:: full-bleed callback section, prev 2,3,4 ==>', secIndex)
                                isMovingSection = false;
                            }
                        });
                    }

                    if(secIndex == 6) {
                        $('footer').removeClass('show');

                    }
                    $('.sec-cont-6').removeClass('last-panel');
                } else if (dir == 'next') {
                    console.log('scrollDir End Next')

                    // full-bleed-card
                    if (secIndex == 1 || secIndex == 2 || secIndex == 3) {
                        var sec = sec2.find(".full-bleed-card").eq(secIndex - 1);
                        if (!sec.find("span").hasClass("animate")) {
                            _splittedTextReveal(sec);
                        }
                    }
                    // 섹션내 모션
                    setTimeout(function(){
                        _setElementFocus(section, scrollTop + window.innerHeight);
                    }, 200);

                    if (secIndex == 0 || secIndex == 1 || secIndex == 4 || secIndex == 5 || secIndex == 6) {
                        TweenMax.to(section.find('.inner-section'), 0.5, {
                            top: 0,
                            onComplete: function () {
                                //console.log('next:: callback normal section', secIndex)
                                if(secIndex == 0 || secIndex == 5){
                                    if(secIndex == 0) btnGotoTop.addClass('show');
                                    App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.BLACK);
                                    App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.BLACK);
                                }
                                if(secIndex == 1) {
                                    App.ui.main.theme_head_footer('header', window.GlobalVars.THEME.CODE.WHITE);
                                    App.ui.main.theme_head_footer('goto-top', window.GlobalVars.THEME.CODE.WHITE);
                                }
                                if(secIndex == 4) {
                                    $('.sec-cont-6').addClass('last-panel');
                                }
                                if(secIndex == 5) {
                                    $('footer').addClass('show');
                                }
                                isMovingSection = false;
                            }
                        });
                    } else if (secIndex == 2 || secIndex == 3) {
                        TweenMax.to(section.find('.inner-section'), 0.5, {
                            autoAlpha: 1,
                            onComplete: function () {
                                isMovingSection = false;
                            }
                        });
                    }

                    if (secIndex == 1) {
                        $('.sec-cont-3, .sec-cont-4').find('.inner-section').css({top: 0})
                    }
                }
            });
        };

        let debounce = null;
        const _onMouseWheel = function (e, delta) {
            e.preventDefault();
            e.stopPropagation();
            //console.log('mouseWheel', e.timeStamp, delta)

            clearTimeout(debounce);
            debounce = setTimeout(() => {
                //console.log( 'debounce', delta, new Date().getTime());

                // if(Detectizr.os.name == 'windows'){
                //     delta = delta*-1;
                // }

                if (delta > 0 && $(this).index() > 0) {
                    _movePreviousSection(e, this);
                } else if(delta < 0 && $(this).index() < secContentPanel.length -1) {
                    _moveNextSection(e, this);
                }
            }, 300);
        };

        let touchStartInfo = null;
        let swipeDir = null;

        const _onTouchStart = function (e) {
            touchStartInfo = window.Site.utils.initTouch(e);
        };

        const _onTouchMove = function (e) {
            e.preventDefault();
            e.stopPropagation();
            let swipeDirection = window.Site.utils.touchMoveDirection(e, touchStartInfo);
            //console.log('ontouchmove!', isMovingSection, swipeDirection, touchStartInfo)

            if ( swipeDirection !== undefined) {
                if (swipeDirection == 'top') {
                    //swipeDir = 'prev'
                    _moveNextSection(e, this);
                } else if (swipeDirection == 'bottom') {
                    //swipeDir = 'next'
                    _movePreviousSection(e, this);
                }

            }else{
                return false;
            }
        };

        const _onTouchEnd = function(e){
            console.log('touchEnd', swipeDir)
            if (swipeDir == 'prev') {
                _moveNextSection(e, this);
            } else if (swipeDir == 'next') {
                _movePreviousSection(e, this);
            }
        }

        // Section Move
        const _movePreviousSection = function (e, section) {
            //console.log('_movePreviousSection')
            if ($(section).index() > 0 && !isMovingSection){
                sectionScrollController.scrollTo('#' + $(section).prev()[0].id, [$(section), $(section).index(), 'prev'])
                isMovingSection = true;
            }
        };
        const _moveNextSection = function (e, section) {
            //console.log('_moveNextSection')
            if ($(section).index() < $('.sec-2 .sec-content').length - 1  && !isMovingSection) {
                sectionScrollController.scrollTo('#' + $(section).next()[0].id, [$(section).next(), $(section).index(), 'next']);
                isMovingSection = true;
            }
        };

        const _offCompany = function () {
            console.log('off Motion of Company', sec2)
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
            motions.each(function(){
                let elem = $(this);
                if (!elem.hasClass("animate")) {
                    elem.addClass("animate");
                }else if (elem.hasClass("animate")) {
                    elem.removeClass("animate");
                }
            });
        }

        const _resetTextMotions = function () {
            if (sec2.find('.motion').hasClass('animate')) {
                sec2.find('.motion').removeClass('animate').find('span').removeClass('animate');
            };
        }

        return {
            init: _init,
            init_company: _initCompany,
            off_company: _offCompany,
            init_onscroll: _onScrollContentSection,
        }
    })(App);

    App.content.company = Company;
});
