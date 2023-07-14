posHelpTop = ''
posHelpBottom = 0;
posForm = ''
$(function(){

    if($('.area-sidebar').length > 0 && $('.main').length < 1){
        $('body').addClass('aside');
    }else{}

    //Location Bar
    if($(".content-wrap").length > 0){
        $(".area-location").show();
    }else{
        $(".area-location").hide();
    }

    //헤더 Login 버튼
    $(".area-header .btn-login").on("mouseleave",function(){
        $(".area-header .btn-login").removeClass("on");
    });
    $(".area-header .btn-login button").on("click",function(){
        $("body").removeClass("navi");
        $(".navigation-global >ul >li").removeClass("on");
        if($(".area-header .btn-login").hasClass("on") == 0){
            $(".area-header .btn-login").addClass("on");
        }else{
            $(".area-header .btn-login").removeClass("on");
        }
    });

    //헤더 language 버튼
    $(".area-header .btn-language").on("mouseleave",function(){
        $(".area-header .btn-language").removeClass("on");
    });
    $(".area-header .btn-language button").on("click",function(){
        if($(".area-header .btn-language").hasClass("on") == 0){
            $(".area-header .btn-language").addClass("on");
        }else{
            $(".area-header .btn-language").removeClass("on");
        }
    });

    //헤더 Zoom 버튼
    $(".area-header .btn-zoom").on("mouseleave",function(){
        $(".area-header .btn-zoom").removeClass("on");
    });
    $(".area-header .btn-zoom button").on("click",function(){
        $(".area-header .btn-language").removeClass("on");
        if($(".area-header .btn-zoom").hasClass("on") == 0){
            $(".area-header .btn-zoom").addClass("on");
        }else{
            $(".area-header .btn-zoom").removeClass("on");
        }
    });

    //화면 Zoom
    $(".btn-zoom-origin").on("click",function(){
        $("html").css({'zoom':'100%'});
    })
    $(".btn-zoom-medium").on("click",function(){
        $("html").css({'zoom':'110%'});
    })
    $(".btn-zoom-big").on("click",function(){
        $("html").css({'zoom':'120%'});
    })

    //Apply Process
    if($(".apply-wrap").length > 0){
        $(".area-progressbar").show();
        // $(".btn-help").show();
    }else{
        $(".area-progressbar").hide();
        // $(".btn-help").hide();
    }

    /* GNB */
    $(".navigation-global >ul >li").on("mouseenter focusin",function(){
        $(".navigation-global >ul >li").removeClass("on");
        $(this).addClass("on").focus();
        $("body").addClass("navi");
        $('body').on('scroll touchmove mousewheel', function(event) {//휠 이벤트 막기
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    });
    $(".navigation-global").on("mouseleave",function(){
        $(".navigation-global >ul >li").removeClass("on");
        $("body").removeClass("navi");
        $('body').off('scroll touchmove mousewheel');//휠 이벤트 풀기
    });
    $(".navigation-global .link-depth3 >button").on("click",function(){
        if($(this).closest("li").hasClass('on') == 0){
            $('.navigation-global .box-depth3 ul li').removeClass("on");
            $(this).closest("li").addClass("on");    
        }else{
            $(this).closest("li").removeClass("on");
        }
    });

    /* Page Location */
    $(".box-depth button").on("click",function(){
        if($(this).closest(".box-depth").hasClass("on") == 0){
            $(".box-depth").removeClass("on");
            $(this).closest(".box-depth").addClass("on");
        }else{
            $(".box-depth").removeClass("on");
        }
    });
    $(".area-location").on("mouseleave",function(){
        $(".box-depth").removeClass("on");
    })

    /* 도움말 버튼 */
    $(".btn-help").on("click",function(){
        if($(".area-content").hasClass("help") == 0){
            $(".area-content").addClass("help");
        }else{
            $(".area-content").removeClass("help");
        }
    });
    $(".contain-help .btn-close").on("click",function(){
        $(".area-content").removeClass("help");
    });

    //Help Tab
    $(".contain-help .tab-anchor button").on("click",function(){
        helpIndex = $(this).index() + 1;
        $(".contain-help .tab-anchor button").removeClass("on");
        $(this).addClass("on");
        $(".contain-help .box-body").removeClass("on");
        $(".contain-help .box-body.tab-help" + helpIndex).addClass("on");
    });

    //하단 법원사이트 버튼
    $(".area-banner-bottom .contain-familysite button").on("click",function(){
        if($(this).parent().hasClass("on") == 0){
            $(this).parent().addClass("on");
        }else{
            $(this).parent().removeClass("on");
        }
    });

    //긴급공지 닫기
    $(".area-notice-emergency .btn-close").on("click",function(){
        $(".area-notice-emergency").removeClass("on");
    });

    //고객센터 사이드바
    $('.link-quicklink').on('click',function(){
        $('.box-quicklink').addClass('on');
    });
    $('.box-quicklink .btn-close').on('click',function(){
        $('.box-quicklink').removeClass('on');
    });

    //고객센터
    $('.btn-cscenter').on('click',function(){
        if($('.btn-cscenter').hasClass('on') == 0){
            $('.btn-cscenter').addClass('on');
        }else{
            $('.btn-cscenter').removeClass('on');
        }
    });

    if($('body').hasClass('main')){
        $('.btn-cscenter').addClass('on');
    }

    //Top 버튼
    $('.btn-anchertop').on('click',function(){
        $('html, body').animate({scrollTop:'0'},500)
    });

    /* input clear button 생성 */
    inputClearHandler.init();

    /* selectbox styling */
    if($(".custom-select").length > 0) $(".custom-select").selectric();

    /* 전체검색 - input autocomplete */
    var availableTags = [
        "등기"
        , "등기 열람"
        , "등기 열람 발급"
        , "등기 신청"
        , "등기신청사건"
        , "등기신청사건처리현황"
    ];
    if( $("#total-search-input").length > 0 ){
        $("#total-search-input").autocomplete({
            source : availableTags,         // 자동 완성 대상
            select : function(event, ui) {
                // 아이템 선택 event
                // console.log(ui.item);
            },
            focus : function(event, ui) {
                // 포커스 event
                return false;
            },
            minLength: 1,     // 최소 글자수
            autoFocus: false, // 첫번째 항목 자동 포커스 기본값 false
            classes: {        // 위젯 요소에 추가 할 클래스
                "ui-autocomplete": "total-search-autocomplete"
            },
            delay: 300,       // 글자 입력 후 autocomplete 창 뜰 때 까지의 딜레이 시간(ms)
            disabled: false,  // 자동완성 기능 끄기
            close : function(event){
                // 자동완성창 닫을 때 event
                // console.log(event);
            }
        }).autocomplete("instance")._renderItem = function( ul, item ) {
            // 입력한 단어에 highlight 처리를 위한 customizing
            var re = new RegExp( "(" + this.term + ")", "gi" ),
                cls = "highlight-text",
                template = "<span class='" + cls + "'>$1</span>",
                label = item.label.replace( re, template ),
                $li = $( "<li/>" ).appendTo( ul );
            $( "<a/>" ).attr( "href", "#" )
                       .html( label )
                       .appendTo( $li );

            return $li;
        };
    }

    /* datepicker */
    if($(".datepicker").length > 0){
        $(".datepicker").datepicker({
            dateFormat: 'yy-mm-dd' //Input Display Format 변경
            ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
            ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
            // ,buttonImage: "../img/icn_form_calendar.svg" //버튼 이미지 경로
            // ,buttonText: "Calendar" //버튼 텍스트 - img alt,title
            ,yearSuffix: "." //달력의 년도 부분 뒤에 붙는 텍스트
            ,monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'] //달력의 월 부분 Tooltip 텍스트
            ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
            // ,changeYear: true //콤보박스에서 년 선택 가능
            // ,changeMonth: true //콤보박스에서 월 선택 가능
            // ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
            // ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
            // ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
            // ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
            // ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
            // ,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            // ,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
            ,onSelect: function(dateText) {
            }
            ,beforeShow: function(input, inst) {
                var rect = input.getBoundingClientRect();
                var gap = window.innerHeight - (rect.height + rect.top);
                var posMy = gap > 360 ? "left top" : "left bottom";
                var posAt = gap > 360 ? "left bottom" : "left top";
                setTimeout(function() {
                    inst.dpDiv.position({
                        my: posMy,
                        at: posAt,
                        collision: 'none',
                        of: input
                    });
                }, 1);
            }
        })
    }

    /* 팝업 default setting */
    if( $(".popup-wrap.active").length > 0 ){
        $(".popup-wrap.active").each(function(idx, item){
            popupManager.defaultSetting("#" + item.id);
        })
    }

    /* 트리 */
    $('.tree-con .title-btn-con .title').on('click',function(){
        if($(this).closest('li').hasClass('open') == 0){
            $(this).closest('li').addClass('open');
        }else{
            $(this).closest('li').removeClass('open');
        }
    });

    /* 탭메뉴 */
    tabNavigator.init();

    /* 드롭다운 */
    dropdownHandler.init();

    /* 아코디언 */
    accordionHandler.init();

    /* 도움말 */
    tooltipHandler.init();

    /* filter 접기/펼치기 */
    filterFoldingHandler.init();

    /* input file */
    inputFileHandler.init();

    /* 주요 기능 버튼 position */
    setTimeout(function(){
        btnPositionHandler.init();
    }, 700);

    /* 테이블 내부 기능버튼 */
    multiBtnHandler.init();


    /* lottie 애니메이션 호출 */
    lottieLoad();
})

$(window).on("resize load",function(){

    sideBar()//우측 사이드 바 미들정렬 함수

    if($(window).innerWidth() < 1344){//화면 최소넓이일때 클래스 추가
        $(".area-content .navigation-apply").addClass("leftfix");
    }else{
        $(".area-content .navigation-apply").removeClass("leftfix");
    }
    
    $(".btn-sidebar").on("click",function(){
        $(".btn-sidebar").removeClass("on");
        $(".area-sidebar").css({"right":"0"});
    });

    if($(".area-banner-bottom").length > 0){
        $(".area-banner-bottom .contain-banner").not(".slick-initialized").slick({//하단 관련사이트 롤링
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: $('.contain-banner-control .btn-prev'),
            nextArrow: $('.contain-banner-control .btn-next'),
        });
        $('.contain-banner-control .btn-action').on('click',function(){//하단 관련사이트 롤링 플레이 스탑
            if($('.contain-banner-control .btn-action').hasClass("stop") == 0){
                $('.area-banner-bottom .contain-banner').slick('slickPlay');
                $('.contain-banner-control .btn-action.stop').addClass("stop");
            }else{
                $('.area-banner-bottom .contain-banner').slick('slickPause');
                $('.contain-banner-control .btn-action.stop').removeClass("stop");
            }
        });
    }else{}

    if($(".navigation-apply").length > 0){
        if($(".navigation-apply").length > 0){//실행 네비게이션 바 유무 확인
            $(".area-content").addClass("apply");
        }else{
            $(".area-content").removeClass("apply");
        }
        if($(".navigation-apply").length > 0 && $('.mode-tablet').length < 1){//실행 네비바 위치
            posForm = []
            for(i=0;i<$(".form-sec").length;i++){//위치값 배열 할당
                posForm[i] = $(".form-sec").get(i).offsetTop + 60;
            }
            if($(window).scrollTop() == 0){
                currentApply()
            }
        }else{
            posForm = []
            for(i=0;i<$(".form-sec").length;i++){//위치값 배열 할당
                posForm[i] = $(".form-sec").get(i).offsetTop - 40;
            }
            if($(window).scrollTop() == 0){
                currentApply()
            }
        }
    }else{}

    $(".area-content .navigation-apply > ul > li ul li a").on("click",function(e){//실행 네비게이션 클릭 액션
        e.preventDefault()
        if($('.mode-tablet').length > 0){
            posCurrnet = posForm[$(this).parent().index()] + 10
        }else{
            posCurrnet = posForm[$(this).parent().index()]
        }
        $("html,body").stop().animate({
            scrollTop: posCurrnet
        });
    });

    $(".btn-menuall button").on("click",function(){//사이트맵 열기
        $(".area-sitemap").addClass("on");
        $('body').on('scroll touchmove mousewheel', function(event) {//휠 이벤트 막기
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    });

    $(".btn-close-sitemap button").on("click",function(){//사이트맵 닫기
        $(".area-sitemap").removeClass("on");
        $('body').off('scroll touchmove mousewheel');//휠 이벤트 풀기
    });

    //사이트맵 스크롤 위치값 지정
    posSiteMap = []
    for(i=0;i<$(".box-sitemap").length;i++){//위치값 배열 할당
        posSiteMap[i] = $(".box-sitemap").get(i).offsetTop - 70;
    }
    currentSiteMap()

    $(".contain-sitemap-index ul li a").on("click",function(e){//사이트맵 클릭 액션
        e.preventDefault()
        posCurrnetSiteMap = posSiteMap[$(this).parent().index()];
        $(".contain-sitemap-body").animate({
            scrollTop: posCurrnetSiteMap + 10
        });
    });

    $(".contain-sitemap-body").on("scroll",function(){//사이트맵 내용 스크롤
        currentSiteMap()
    });

    $(".btn-close-notice").on("click",function(){//메인 공지사항 닫기
        if($("body").hasClass("notice") == 0){
            $("body").addClass("notice");
        }else{
            $("body").removeClass("notice");
        }
    });

    /* 코치마크 2284> x <1903*/
    if($(".area-coachmark").length > 0){
        if($(window).width() > 1344){
            bc1 = $(window).width() / 2 - 338;
        }else{
            bc1 = 334;
        }
        $(".box-coachmark2").css({
            "width": bc1
        });
        $(".box-coachmark3").css({
            "left": bc1
        });
    }
    $(".btn-close-coach").on("click",function(){
        $(".area-coachmark").removeClass("on");
        $("body").removeClass("popup");
        if($("[data-fixed-btn]").length > 0) {
            btnPositionHandler.setPos();
        }
    });
    if($('.mode-tablet').length < 1){
        applyWrapSpace()
    }
    
});

$(window).on("scroll",function(e){

    //사이드 네비 바 화면 높이에 따른 길이
    if($('.mode-tablet').length < 1){
        if($(window).scrollTop() > $(document).height() - $(window).height() - 315){
            $('.area-content .navigation-apply > ul').addClass('posbottom').css({'bottom':($(window).height() + $(window).scrollTop() + 315) - $(document).height() })
        }else{
            $('.area-content .navigation-apply > ul').removeClass('posbottom').css({'bottom':'0'})
        }
    }else{
        $('.area-content .navigation-apply > ul').removeClass('posbottom').css({'bottom':'60px'})
    }

    if($('.mode-tablet').length < 1){
        if($(window).scrollTop() > 96){//사이드 네비 바 유동 위치
            $('.area-content .navigation-apply > ul').css({'top':'149px'})
        }else{
            $('.area-content .navigation-apply > ul').css({'top': 266 - $(window).scrollTop()})
        }    
    }else{
        $('.area-content .navigation-apply > ul').css({'top':'145px'})
    }
    

    if($(".area-location").length > 0){
        if($(window).scrollTop() > 96){//로케이션 바 고정
            $(".area-location").addClass("on");
        }else{
            $(".area-location").removeClass("on");
        }
    }
    if($(".area-progressbar").length > 0){
        if($(window).scrollTop() > 96){//프로그래스 바 고정
            $(".area-progressbar").addClass("on");
        }else{
            $(".area-progressbar").removeClass("on");
            $(".contain-help .contain-inner").removeClass("on");
        }
        if($(".area-progressbar").length > 0){//프로그래스 바 길이
            currntScroll = $(window).scrollTop() / ($(document).height() - $(window).innerHeight()) * 100;
            $(".area-progressbar .progressbar").css({
                "width" : currntScroll + "%"
            });
        }else{}
    }
    if($(".area-error").length > 0){
        if($(window).scrollTop() > 96){//에러 바 고정
            $(".area-error").addClass("on");
        }else{
            $(".area-error").removeClass("on");
        }
    }
    sideBar()
    if($(".navigation-apply").length > 0){
        if($(".navigation-apply").length > 0){//실행 네비바 위치
            currentApply()
        }else{}
    }
});

function currentSiteMap(){//사이트맵 스크롤 위치별 버튼활성
    for(i=$(".box-sitemap").length;i > -1;i--){
        if($(".contain-sitemap-body").scrollTop() <= posSiteMap[(i)] && i > 0){//실행 네비게이션 스크롤 액션
            $(".contain-sitemap-index ul li").removeClass();
            $(".contain-sitemap-index ul li:nth-child(" + i +")").addClass("on");
        }else{}
    }
    if($(".contain-sitemap-body").scrollTop() >= posSiteMap[$(".box-sitemap").length - 1]){//마지막 항목 처리
        $(".contain-sitemap-index ul li").removeClass();
        $(".contain-sitemap-index ul li:nth-child(" + $(".box-sitemap").length +")").addClass("on");
    }
}

function currentApply(){//신청 네비게이션 스크롤 위치별 버튼활성
    for(i=$(".form-sec").length;i > -1;i--){
        if($(window).scrollTop() < posForm[(i)] && i > 0){//실행 네비게이션 스크롤 액션
            $(".area-content .navigation-apply > ul > li ul li a").removeClass();
            $(".area-content .navigation-apply > ul > li ul li:nth-child(" + i +")").prevAll().find("a").addClass("saved");
            $(".area-content .navigation-apply > ul > li ul li:nth-child(" + i +") a").addClass("on");
        }else{}
    }
    if($(window).scrollTop() >= posForm[$(".form-sec").length - 1]){//마지막 항목 처리
        $(".area-content .navigation-apply > ul > li ul li a").removeClass();
        $(".area-content .navigation-apply > ul > li ul li:nth-child(" + $(".form-sec").length +")").prevAll().find("a").addClass("saved");
        $(".area-content .navigation-apply > ul > li ul li:nth-child(" + $(".form-sec").length +") a").addClass("on");
    }
}

function applyWrapSpace(){//신청 네비게이션 마지막 항목이 위치를잡을 수 있게 하단 공간 항목이 생길때마다 실행

    lastHeight = $(window).height() - $(".form-sec").eq($('.form-sec').length - 1).height() - 286;
    if($('#tampTag').length > 0){
        $('#tempTag').remove()
    }
    if(lastHeight > 0 && $('.navigation-apply').length > 0){
        $('<div id="tempTag" style="height:' + lastHeight + 'px"></div>').appendTo($('.apply-wrap'));
    }
}

function sideBar() {//사이드바 위,아래 유동적 마진
    if($(window).scrollTop() < 96){//스크롤 시 상단마진
        if($(".area-progressbar").length > 0){
            posHelpTop = 206 - $(window).scrollTop()
        }else{
            posHelpTop = 151 - $(window).scrollTop()
        }
    }else{
        if($(".area-progressbar").length > 0){
            posHelpTop = 110
        }else{
            posHelpTop = 55
        }
    }
    //posHelpHeight = $(window).scrollTop() - posHelpTop;
    posHelpHeight = $(window).height() - posHelpTop;
    if($(window).scrollTop() - ($(document).height() - ($(window).innerHeight() + 300)) > 0){//스크롤 시 하단마진
        posHelpBottom = $(window).scrollTop() - ($(document).height() - ($(window).innerHeight() + 300));
    }else{
        posHelpBottom = 0
    }

    if($("body.main").length == 0){
        $(".area-sidebar .area-inner").css({//사이드 바 상단마진 적용(메인 및 게이트용)
            //"marginTop": posHelpTop,
            //"marginBottom": posHelpBottom
        });
    }else{
        $(".area-sidebar .area-inner").css({//사이드 바 상단마진 적용
            //"marginBottom": posHelpBottom
        });
    }
}

/* lottie 애니메이션 */
window.animationList = [];
function lottieLoad(){
    var animations = ["lottie-checked", "lottie-construction", "lottie-error", "lottie-scroll", "lottie-failed", "lottie-information"];
    var animationDataList = [
        {"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":120,"h":120,"nm":"checked","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[100]},{"t":15.0000006109625,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[84,84],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":10.0000004073083,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"패스 다듬어 자르기 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.880744457245,0.880744457245,0.880744457245,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":25.0000010182709,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.368,-0.05],[0.053,0],[0.926,0.932],[0,0]],"o":[[0,0],[-0.9,1.032],[-0.069,0.005],[-1.314,0.001],[0,0],[0,0]],"v":[[73.999,38.501],[50.916,64.877],[47.361,66.572],[47.185,66.577],[43.685,65.122],[30.499,51.937]],"c":false},"ix":2},"nm":"패스 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[100]},{"t":33.0000013441176,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"패스 다듬어 자르기 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"ciecle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":15.0000006109625,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[38,38,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,2.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[110,110,100]},{"t":25.0000010182709,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[104,104],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.290196078431,0.364705882353,0.776470648074,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"칠 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}
        , {"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":104,"h":104,"nm":"construction","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"mov","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[9.359,17.413],[9.343,45.25],[93.5,45.75],[93.625,17.451]],"c":true}},"o":{"a":0,"k":100},"x":{"a":0,"k":0},"nm":"마스크 1"}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-16.252,17.549],[-28.76,45.362],[-39.826,45.362],[-27.318,17.549]],"c":true}},"nm":"패스 9","hd":false},{"ind":1,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[4.666,17.487],[-7.901,45.359],[-18.965,45.359],[-6.398,17.487]],"c":true}},"nm":"패스 8","hd":false},{"ind":2,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[27.014,17.549],[14.506,45.362],[3.44,45.362],[15.948,17.549]],"c":true}},"nm":"패스 4","hd":false},{"ind":3,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[49.701,17.525],[37.193,45.338],[26.127,45.338],[38.635,17.525]],"c":true}},"nm":"패스 2","hd":false},{"ind":4,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[72.072,17.466],[59.505,45.338],[48.441,45.338],[61.008,17.466]],"c":true}},"nm":"패스 3","hd":false},{"ind":5,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[94.322,17.431],[81.755,45.303],[70.691,45.303],[83.258,17.431]],"c":true}},"nm":"패스 5","hd":false},{"ind":6,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[116.947,17.487],[104.38,45.359],[93.316,45.359],[105.883,17.487]],"c":true}},"nm":"패스 6","hd":false},{"ind":7,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[138.572,17.431],[126.005,45.303],[114.941,45.303],[127.508,17.431]],"c":true}},"nm":"패스 7","hd":false},{"ty":"fl","c":{"a":0,"k":[0.294117647059,0.423529441684,0.921568687289,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[15.413,31.402],"to":[6,0],"ti":[-11.167,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[51.413,31.402],"to":[11.167,0],"ti":[-5.167,0]},{"t":59.0000024031193,"s":[82.413,31.402]}]},"a":{"a":0,"k":[51.413,31.402]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 13","bm":0,"hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"alert","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[81.21,83.384],[81.21,85.101]],"c":false}},"nm":"패스 1","hd":false},{"ind":1,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[81.21,69.652],[81.21,80.81]],"c":false}},"nm":"패스 2","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[100]},{"t":53.0000021587343,"s":[50]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 1","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[1.451,0],[0,0],[0.722,1.259],[-0.734,1.253],[0,0],[-1.436,0],[-0.726,-1.238],[0,0],[0.722,-1.259]],"o":[[0,0],[-1.451,0],[-0.722,-1.259],[0,0],[0.725,-1.238],[1.436,0],[0,0],[0.733,1.253],[-0.721,1.259]],"v":[[11.777,14.053],[-11.777,14.053],[-15.247,12.042],[-15.228,8.031],[-3.451,-12.076],[0,-14.053],[3.452,-12.076],[15.229,8.031],[15.247,12.042]],"c":true}},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.956862804936,0.760784373564,0.082352941176,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[81.21,76.485]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 3","bm":0,"hd":false},{"ty":"tr","p":{"a":0,"k":[81.21,76.485]},"a":{"a":0,"k":[81.21,76.485]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 12","bm":0,"hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"construction","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-43.154,-14.907],[43.154,-14.907],[43.154,14.907],[-43.154,14.907]],"c":true}},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[51.405,31.409]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 8","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.5,-39.5],[3.5,-39.5],[3.5,39.5],[-3.5,39.5]],"c":true},"x":"var $bm_rt;\n$bm_rt = content('\\uadf8\\ub8f9 9').content('\\ud328\\uc2a4 1').path;"},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[17.21,49.038]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 9","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.5,-39.5],[3.5,-39.5],[3.5,39.5],[-3.5,39.5]],"c":true}},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[86.21,49.038]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 10","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-27.614,0],[0,-3.866],[27.614,0],[0,3.866]],"o":[[27.614,0],[0,3.866],[-27.614,0],[0,-3.866]],"v":[[0,-7],[50,0],[0,7],[-50,0]],"c":true}},"nm":"패스 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.109,88.538]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 11","bm":0,"hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}
        , {"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":90.0000036657751,"w":104,"h":104,"nm":"error","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"error Outlines","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[-0.558,0.559],[-8.035,-8.035],[-0.753,-1.141]],"o":[[0.481,-0.604],[8.035,-8.035],[1.004,1.004],[0,0]],"v":[[-16.646,4.148],[-15.088,2.404],[14.01,2.404],[16.646,5.632]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.1,30.709]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[100]},{"t":20.0000008146167,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 7","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[-0.453,0.453],[-11.721,-11.721],[-0.883,-1.196]],"o":[[0.418,-0.474],[11.721,-11.721],[1.084,1.084],[0,0]],"v":[[-23.352,5.538],[-22.046,4.147],[20.4,4.147],[23.352,7.574]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.525490196078,0.525490196078,0.525490196078,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.384,22.291]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"t":15.0000006109625,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 8","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[-0.14,0.15],[-15.663,-14.606],[-1.207,-1.528]],"o":[[0.137,-0.152],[14.606,-15.663],[1.468,1.369],[0,0]],"v":[[-29.618,7.493],[-29.202,7.04],[25.605,5.126],[29.618,9.48]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":3}},{"n":"g","nm":"gap","v":{"a":0,"k":4}},{"n":"o","nm":"offset","v":{"a":0,"k":0}}],"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.405,14.175]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":10.0000004073083,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 9","bm":0,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[52.608,60.227],[52.608,61.944]],"c":false}},"nm":"Path 2","hd":false},{"ind":1,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[52.608,46.495],[52.608,57.653]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":39,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[50]},{"t":80.0000032584668,"s":[100]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 4","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-1.953,-1.953],[0,0],[1.952,-1.953],[0,0],[1.953,1.953],[0,0],[-1.952,1.952],[0,0]],"o":[[0,0],[1.952,1.952],[0,0],[-1.953,1.953],[0,0],[-1.952,-1.953],[0,0],[1.953,-1.953]],"v":[[3.536,-14.849],[14.85,-3.535],[14.85,3.536],[3.536,14.849],[-3.536,14.849],[-14.85,3.536],[-14.85,-3.535],[-3.536,-14.849]],"c":true}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921568687289,0.403921598547,0.403921598547,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.849,54.003]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 5","bm":0,"hd":false},{"ty":"tr","p":{"a":0,"k":[52.849,54.003]},"a":{"a":0,"k":[52.849,54.003]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 11","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-2.485,0],[0,-2.485],[2.485,0],[0,2.485]],"o":[[2.485,0],[0,2.485],[-2.485,0],[0,-2.485]],"v":[[0,-4.5],[4.5,0],[0,4.5],[-4.5,0]],"c":true}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.609,88.881]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 1","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[12.608,88.881],[91.608,88.881]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 2","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[52.608,71.309],[52.608,88.881]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":3}},{"n":"g","nm":"gap","v":{"a":0,"k":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0}}],"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 6","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-27.614,0],[0,-3.866],[27.614,0],[0,3.866]],"o":[[27.614,0],[0,3.866],[-27.614,0],[0,-3.866]],"v":[[0,-7],[50,0],[0,7],[-50,0]],"c":true}},"nm":"Path 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.109,92.381]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 10","bm":0,"hd":false}],"ip":0,"op":89.9100036621094,"st":0,"bm":0}],"markers":[]}
        , {"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":90.0000036657751,"w":54,"h":362,"nm":"coachmark","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"coachmark 2","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":5,"s":[27,181,0],"to":[0,2.333,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.333,"y":0.333},"t":18,"s":[27,195,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":23,"s":[27,195,0],"to":[0,0,0],"ti":[0,2.102,0]},{"t":36.0000014663101,"s":[27,181,0]}]},"a":{"a":0,"k":[27,181,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[1.994,3.014]},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"nm":"Rectangle Path 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[26.997,170.444]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Rectangle 1","bm":0,"hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,0],"to":[0,-27.25],"ti":[0,-2.333]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[0,-163.5],"to":[0,2.333],"ti":[0,-27.25]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[0,14],"to":[0,27.25],"ti":[0,29.583]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":45,"s":[0,0],"to":[0,-29.583],"ti":[0,-2.333]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":60,"s":[0,-163.5],"to":[0,2.333],"ti":[0,-29.583]},{"t":75.0000030548126,"s":[0,14]}]},"a":{"a":0,"k":[0,0]},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":15,"s":[100,200]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":30,"s":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":45,"s":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":60,"s":[100,200]},{"t":75.0000030548126,"s":[100,100]}]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":45,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":68,"s":[100]},{"t":74.0000030140818,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 1","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-5.247,0],[0,0],[0,-5.247],[0,0],[5.247,0],[0,5.247],[0,0]],"o":[[0,0],[5.247,0],[0,0],[0,5.247],[-5.247,0],[0,0],[0,-5.247]],"v":[[0,-14.5],[0,-14.5],[9.5,-5],[9.5,5],[0,14.5],[-9.5,5],[-9.5,-5]],"c":true}},"nm":"패스 1","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":62,"s":[0]},{"t":75.0000030548126,"s":[100]}]},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":15.0000006109625,"s":[100]}]},"o":{"a":0,"k":0},"m":1,"nm":"Trim Paths 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.452634803922,0.452634803922,0.452634803922,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":1},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"tr","p":{"a":0,"k":[27,175.996]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":10.0000004073083,"s":[100]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 6","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-5.247,0],[0,0],[0,-5.247],[0,0],[5.247,0],[0,5.247],[0,0]],"o":[[0,0],[5.247,0],[0,0],[0,5.247],[-5.247,0],[0,0],[0,-5.247]],"v":[[0,-14.5],[0,-14.5],[9.5,-5],[9.5,5],[0,14.5],[-9.5,5],[-9.5,-5]],"c":true}},"nm":"패스 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[27,175.996]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[100]},{"t":90.0000036657751,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 7","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-14.912,0],[0,0],[0,-14.912],[14.912,0],[0,14.912]],"o":[[0,0],[14.912,0],[0,14.912],[-14.912,0],[0,-14.912]],"v":[[0,-27],[0,-27],[27,0],[0,27],[-27,0]],"c":true}},"nm":"패스 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.917647118662,0.301960784314,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[27,177]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 4","bm":0,"hd":false}],"ip":0,"op":90.0000036657751,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"bg","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[25.953,180.006,0]},"a":{"a":0,"k":[27,181,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[21.898,142.586]},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"nm":"Rectangle Path 1","hd":false},{"ty":"gf","o":{"a":0,"k":100},"r":1,"bm":0,"g":{"p":5,"k":{"a":0,"k":[0,1,0.918,0.302,0.06,1,0.918,0.302,0.487,1,0.918,0.302,0.938,1,0.918,0.302,0.997,1,0.918,0.302,0,0,0.244,0.205,0.488,0.41,0.744,0.205,1,0]}},"s":{"a":0,"k":[0.103,-71.223]},"e":{"a":0,"k":[0.134,71.328]},"t":1,"nm":"Gradient Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[1.738,2.145]},"a":{"a":0,"k":[-10.658,-70.838]},"s":{"a":0,"k":[245.828,253.766]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Rectangle 1","bm":0,"hd":false}],"ip":0,"op":90.0000036657751,"st":0,"bm":0}],"markers":[]}
        , {"v":"5.8.1","fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":120,"h":120,"nm":"failed","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[100]},{"t":15.0000006109625,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[84,84],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":10.0000004073083,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"패스 다듬어 자르기 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.880744457245,0.880744457245,0.880744457245,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[0]},{"t":30.0000012219251,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60.043,57.375,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[42.422,88.865],[85.922,45.365]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[81.391,81.391],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[41.751,45.865],[84.501,88.615]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[81.391,81.391],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"ciecle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":15.0000006109625,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[38,38,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,2.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[110,110,100]},{"t":25.0000010182709,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[104,104],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.89411765337,0.203921571374,0.290196090937,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"칠 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}
        , {"v":"5.8.1","fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":120,"h":120,"nm":"result","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[100]},{"t":15.0000006109625,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[84,84],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":10.0000004073083,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"패스 다듬어 자르기 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.880744457245,0.880744457245,0.880744457245,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"check 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33,"s":[0]},{"t":36.0000014663101,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[61.406,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50.438,67.75],[50.438,71.375]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":25.0000010182709,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[61.094,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50.75,26.375],[50.75,52]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,7.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[0]},{"t":29.0000011811942,"s":[100]}],"ix":1},"e":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"패스 다듬어 자르기 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"ciecle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":15.0000006109625,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[38,38,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,2.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[110,110,100]},{"t":25.0000010182709,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[104,104],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.301960796118,0.329411774874,0.423529416323,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"칠 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}
    ];

    var noLoopList = ["lottie-checked","lottie-failed","lottie-information"];
    for(i = 0; i < animations.length; i++) {
        var anim;
        var elem = document.getElementById(animations[i])
        var animData = {
            container: elem,
            renderer: 'svg',
            //loop: animations[i] == ('lottie-failed' || 'lottie-checked' || 'lottie-information') ? false || false || false : true,
            loop: noLoopList.indexOf(animations[i]) > -1 ? false : true,
            autoplay: true,
            animationData: animationDataList[i]
        };
        if(elem){
            anim = lottie.loadAnimation(animData);
            window.animationList.push(anim);
        }
    }
}

/*
    input clear button
    - hasClearBtnList에 정의된 type만 clear-btn 생성
    - hasClearBtnList에 포함된 type 중에서 clear-btn을 생성하지 않을 요소는 disable-clear-btn 클래스 부여
    - input 을 감싸는 태그와 clear-btn 태그가 생성됨
    - init() 호출 전
        <label for="">
            <input type="text" name="" id="phone0" class="w116" placeholder="">
        </label>
    - init() 호출 후
        <span class="clear-btn-con">
            <label for="">
                <input type="text" name="" id="phone0" class="w116" placeholder="">
            </label>
            <span class="clear-btn"></span>
        </span>
*/
const inputClearHandler = {
    isSetClear: false
    , inputList: null
    , hasClearBtnList: ["text", "password", "number"]
    , excludeClassName: "disable-clear-btn"
    , init: function(){
        const _this = this;

        _this.isSetClear = true;
        _this.inputList = document.querySelectorAll("input");

        for(let i=0; i<_this.inputList.length; i++){
            const item = _this.inputList[i];
            const type = item.getAttribute("type");

            if( _this.hasClearBtnList.indexOf( type ) > -1
                && !item.classList.contains(_this.excludeClassName)
                // && !item.readOnly && !item.disabled
            ){
                // datepicker 별도 처리
                if( item.classList.contains("datepicker") ){
                    // datepicker에는 clear버튼 생성하지 않음.
                    continue;
                }else{
                    // span태그로 감싸고 그 안에 .clear-btn 생성
                    const clearContainer = _this.createClearContainer(item);
                    const input = clearContainer.querySelector("input");
                    const btn = clearContainer.querySelector(".clear-btn");

                    btn.addEventListener("mousedown", function(e){
                        const input = this.parentNode.querySelector("input");
                        input.value = "";
                        input.focus();
                        btn.style.display = "none";
                        e.preventDefault();
                    });

                    input.addEventListener("keyup", function(){
                        if(input.value != undefined && input.value != ""){
                            _this.showClearBtn(btn);
                        }else{
                            _this.hideClearBtn(btn);
                        }
                    })

                    input.addEventListener("focus", function(){
                        if(input.value != undefined && input.value != ""){
                            _this.showClearBtn(btn);
                        }
                    });

                    input.addEventListener("blur", function(e){
                        _this.hideClearBtn(btn);
                    });
                }
            }
        }
    }
    , createClearContainer: function(item){
        let _this = this;
        let span = document.createElement("span");

        span.setAttribute("class", "clear-btn-con");
        span.innerHTML = item.outerHTML + _this.createClearBtn().outerHTML;
        item.parentNode.insertBefore(span, item);
        item.parentNode.removeChild(item);

        return span;
    }
    , createClearBtn: function(){
        const span = document.createElement("span");
        span.setAttribute("class", "clear-btn");
        return span;
    }
    , showClearBtn: function(btn){
        btn.style.display = "inline-block";
    }
    , hideClearBtn: function(btn){
        btn.style.display = "none";
    }
}

/* popup, total search */
const popupManager = {
    targetList: []
    , dimList: []
    , idx: null

    , focusableElement: "button, input:not([type='hidden']), select, iframe, textarea, [href], [tabindex='0']"
    , focusList: null
    , focusIdx: null

    // toast popup
    , isActiveToast: false

    // event 등록, 제거
    , registEvent: function(){
        const _this = this;

        _this.closePopup = this.closePopup.bind(_this);
        
        // 때에 따라 dim 클릭 시 닫히는 기능이 없는 팝업 존재(ex - 결제완료팝업)
        // if(_this.dimList[this.idx].getAttribute("data-prevent-close") === null){
        //     _this.dimList[this.idx].addEventListener("click", _this.closePopup);
        // }

        _this.moveFocus = this.moveFocus.bind(_this);
        document.addEventListener("keydown", _this.moveFocus);
    }
    , removeEvent: function(){
        const _this = this;

        // 때에 따라 dim 클릭 시 닫히는 기능이 없는 팝업 존재(ex - 결제완료팝업)
        if(_this.dimList[_this.idx].getAttribute("data-prevent-close") === null){
            _this.dimList[_this.idx].removeEventListener("click", _this.closePopup);
        }
        document.removeEventListener("keydown", _this.moveFocus);
    }

    // default setting
    , defaultSetting: function(id){
        const target = document.querySelector(id);
        if(target){
            const dim = document.querySelector(id+" > .dim-wrap");
    
            this.targetList.push(target);
            this.dimList.push(dim);
    
            this.idx = this.targetList.length - 1;
    
            // body scroll 방지
            document.querySelector("body").style.overflowY = "hidden";
    
            this.setFocusList();
            this.registEvent();

            // lottie 애니메이션
            if(window.animationList.length > 0){
                for(i=0; i < window.animationList.length; i++){
                    // window.animationList[i].play();
                    window.animationList[i].playSegments([0, 60], true);
                }
            }
        }
    }

    // popup 열기, 닫기
    , openPopup: function(id){
        this.defaultSetting(id);
        this.targetList[this.idx].classList.add("active");
        if(this.targetList.length > 1){
            this.targetList[this.idx].classList.add("upper");
        }
    }
    , closePopup: function(){
        this.removeEvent();

        this.targetList[this.idx].classList.remove("active");
        this.targetList.pop();
        //this.dimList.pop();
        this.idx = this.idx > 0 ? this.idx-1 : null;

        if( this.targetList.length == 0 ){
            document.querySelector("body").style.overflowY = "auto";

            this.focusList = null;
            this.focusIdx = null;
        }else{
            this.setFocusList();
        }
    }

    // toast popup 열기, 닫기
    , openToastPopup: function(id){
        const _this = this;
        const target = document.querySelector(id);

        if(_this.isActiveToast) return;

        target.classList.add("active");
        _this.isActiveToast = true;

        setTimeout(function(){
            target.classList.remove("active");
            _this.isActiveToast = false;
        }, 3000);
    }

    // focus 핸들링
    , setFocusList: function(){
        this.focusList = this.targetList[this.idx].querySelectorAll(this.focusableElement);
        this.focusIdx = 0;

        if(this.focusList.length > 0){
            this.focusList[0].focus();
        }
    }
    , moveFocus: function(e){
        const _this = this;
        const code = e.keyCode || e.which;

        if( code == 9 ){
            e.preventDefault();
            let idx;
            if( e.shiftKey ){
                idx = _this.focusIdx <= 0 ? _this.focusList.length - 1 : _this.focusIdx - 1;
            }else{
                idx = _this.focusIdx == _this.focusList.length - 1 ? 0 : _this.focusIdx + 1;
            }
            _this.focusIdx = idx;
            _this.moveFocus(idx);

            this.focusList[_this.focusIdx].focus();
        }
    }

    // window 팝업 열기
    // 단순히 윈도우 팝업 열기 기능만 하고 popupManager 객체에 있는 다른 method의 영향을 받지 않음
    , openWindowPopup: function(e, w, h){
        const width = w ? w : 1300;
        const height = h ? h : 720;

        window.open(e.href, "e.title", 'width='+width+', height='+height+', top=0, left=0, toolbar=0, status=0, menubar=0, scrollbars=1, resizable=0');
    }
}

/*
    탭메뉴
    - tabmenu 선택에 따라 해당하는 child 컨테이너를 보여주고 싶은 경우 tabmenu에 id 필수
    - tabchild 컨테이너에 data-tab-bind 속성에 tabmenu id를 부여
    - tabmenu와 tabchild가 붙어있는 구조의 경우 tabmenu요소에 has-child 클래스 부여
    - ex)
        <ul class="tabmenu-con" data-tab="container" id="result-tab">
            <li class="tabmenu-item">
                <a href="#none">검색분류1 <span class="ff-roboto">(310)</span></a>
            </li>
            ...
        </ul>
        <ul class="tabchild-con" data-tab-bind="result-tab">
            <li class="tabchild-item">
                <a href="#none">탭 컨텐츠 1 <span class="ff-roboto">(310)</span></a>
            </li>
            ...
        </ul>
*/
const tabNavigator = {
    activeClass: "active"
    , init: function(){
        const _this = this;
        const menuContainerList = document.querySelectorAll('[data-tab="container"]');

        for(let i=0; i<menuContainerList.length; i++){
            const container = menuContainerList[i];

            for(let j=0; j<container.children.length; j++){
                const tabmenu = container.children[j];
                tabmenu.addEventListener("click", function(){
                    _this.onClickMenu(container, this);
                });
            }
        }
    }
    , onClickMenu: function(container, el){
        const _this = this;

        const menuList = container.children;
        const idx = _this.getIndex(el);
        const bindContainer = container.id != "" ? document.querySelector("[data-tab-bind="+ container.id +"]") : false;

        const check = new RegExp("(\\s|^)" + _this.activeClass + "(\\s|$)");

        for(let i=0; i<menuList.length; i++){
            const menuItem = menuList[i];

            menuItem.className = menuItem.className.replace(check, " ").trim();

            if( bindContainer ){
                const childItem = bindContainer.children[i];
                childItem.className = childItem.className.replace(check, " ").trim();
            }
        }

        menuList[idx].className += " " + _this.activeClass;
        if( bindContainer ){
            bindContainer.children[idx].className += " " + _this.activeClass;
        }

        // 컨텐츠 높이에 영향을 주는 행위 이후 하단 fixed 버튼 포지션 초기화
        if($("[data-fixed-btn]").length > 0) {
            btnPositionHandler.setPos();
        }

        // 컨텐츠 높이에 영향을 주는 행위 이후 간편등기 컨테이너 height 초기화
        if($('[data-slide="slideWrap"]').length > 0) {
            simpleSlide.setWrapHeight(simpleSlide.activeIdx);
        }
    }
    , getIndex: function (node){
        let index = 0;
        while ( (node = node.previousElementSibling) ) {
            index++;
        }
        return index;
    }
}

/* dropdown */
const dropdownHandler = {
    init: function(){
        const _this = this;
        const dropdownList = document.querySelectorAll(".dropdown-wrap");

        for(let i=0; i<dropdownList.length; i++){
            const container = dropdownList[i];
            const currentItem = container.querySelector(".current-item");
            const optionCon = container.querySelector(".dropdown-con");

            currentItem.addEventListener("mousedown", function(e){
                e.preventDefault(); // 크롬, ie 클릭 시 자동으로 focus이벤트 발생 방지
            });
            currentItem.addEventListener("click", function(e){
                _this.hideDropdownList();
                container.classList.add("active");
                e.preventDefault();
                e.stopImmediatePropagation();
            });
            currentItem.addEventListener("focus", function(e){
                _this.hideDropdownList();
                container.classList.add("active");
            });
            currentItem.addEventListener("keydown", function(e){
                const code = e.keyCode || e.which;
                if(code == 9 && e.shiftKey){
                    container.classList.remove("active");
                }
            });

            for(let j=0; j<optionCon.children.length; j++){
                const option = optionCon.children[j].children[0];
                option.addEventListener("click", function(e){
                    container.querySelector(".current-item").innerText = e.target.innerText;
                });

                // 마지막 옵션에서 focus가 빠져나올 때 옵션 컨테이너 숨김
                if(j == optionCon.children.length-1) {
                    option.addEventListener("keydown", function(e){
                        const code = e.keyCode || e.which;
                        if(code == 9){
                            if(e.shiftKey) return;
                            _this.hideDropdownList();
                        }
                    });
                }
            }
        }

        if( dropdownList ){
            window.addEventListener("click", function(e) {
                const matches = e.target.matches ? e.target.matches('.current-item') : e.target.msMatchesSelector('.current-item');
                if (!matches) {
                    _this.hideDropdownList();
                }
            });
        }
    }
    , hideDropdownList: function(){
        const dropdownList = document.querySelectorAll(".dropdown-wrap");
        for(let i=0; i<dropdownList.length; i++){
            dropdownList[i].classList.remove("active");
        }
    }
}

/*
    accordion attribute
    [필수]
    - [data-accordion="container"] -> 아코디언 컨테이너
    - [data-accordion="item"] -> activeClass를 부여할 대상
    - [data-accordion="trigger"] -> 클릭되는 요소
    [선택]
    - [data-accordion="totalTrigger"] -> 전체열기/닫기
    - [data-accordion="innerContainer"] -> 내용 내부 container
    - [data-accordion="innerTrigger"] -> 내용 내부 container 열기/닫기
*/
const accordionHandler = {
    activeClass: "active"
    , closeClass: "close"
    , init: function(){
        const _this = this;
        const accordionList = document.querySelectorAll("[data-accordion=container]");

        for(let i=0; i<accordionList.length; i++){
            const container = accordionList[i];
            const childrens = container.querySelectorAll("[data-accordion=item]");
            const totalTrigger = container.querySelector("[data-accordion=totalTrigger]") ? container.querySelector("[data-accordion=totalTrigger]") : null;

            for(let j=0; j<childrens.length; j++){
                const item = childrens[j];
                const trigger = item.querySelector("[data-accordion=trigger]");
                const innerTriggerList = childrens[j].querySelector("[data-accordion=innerTrigger]") ? childrens[j].querySelectorAll("[data-accordion=innerTrigger]") : null;

                // accordion On/Off event - li, 상세보기 버튼
                trigger.addEventListener("mousedown", function(e){
                    e.preventDefault(); // 크롬, ie 클릭 시 자동으로 focus이벤트 발생 방지
                });
                trigger.addEventListener("click", function(e){
                    _this.onClickItem(e, container, totalTrigger);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                });

                // title 영역에 탭으로 접근 시 accordion 열림
                trigger.addEventListener("focus", function(e){
                    if(trigger.classList.contains("title-con") && !item.classList.contains("active")){
                        _this.onClickItem(e, container, totalTrigger);
                    }
                    e.preventDefault();
                    e.stopImmediatePropagation();
                });

                // 내용 안에서 각각의 section 열기/닫기 event - 내용쪽에 속한 상세보기 버튼
                if( innerTriggerList ){
                    for(let k=0; k<innerTriggerList.length; k++){
                        const innerTrigger = innerTriggerList[k];
                        innerTrigger.addEventListener("click", function(e){
                            _this.onClickInnerTrigger(e);
                        });
                    }
                }
            }

            // 전체 열기/닫기 event
            if( totalTrigger ){
                totalTrigger.addEventListener("click", function(e){
                    _this.onClickTotalTrigger(e);
                });
            }
        }
    }
    , onClickItem: function(e, container, hasTotalTrigger){
        const _this = this;
        let item = e.currentTarget;
        while(true){
            item = item.parentNode;
            if(item.getAttribute("data-accordion") == "item"){
                break;
            }
        }
        item.classList.toggle(_this.activeClass);

        if( hasTotalTrigger ){
            let openedCnt = 0;
            let items = container.querySelectorAll("[data-accordion=item]");

            for(let i=0; i<items.length; i++){
                if(items[i].classList.contains(_this.activeClass)) openedCnt += 1;
            }

            if( items.length == openedCnt ) container.classList.add("is-total-opened");
            else container.classList.remove("is-total-opened");
        }

        // 컨텐츠 높이에 영향을 주는 행위 이후 하단 fixed 버튼 포지션 초기화
        if($("[data-fixed-btn]").length > 0) {
            btnPositionHandler.setPos();
        }
        
        // 컨텐츠 높이에 영향을 주는 행위 이후 간편등기 컨테이너 height 초기화
        if($('[data-slide="slideWrap"]').length > 0) {
            simpleSlide.setWrapHeight(simpleSlide.activeIdx);
        }
    }
    , onClickInnerTrigger: function(e){
        const _this = this;
        let item = e.currentTarget;
        while(true){
            item = item.parentNode;
            if(item.getAttribute("data-accordion") == "innerContainer"){
                break;
            }
        }
        item.classList.toggle(_this.closeClass);

        // 컨텐츠 높이에 영향을 주는 행위 이후 하단 fixed 버튼 포지션 초기화
        if($("[data-fixed-btn]").length > 0) {
            btnPositionHandler.setPos();
        }
        
        // 컨텐츠 높이에 영향을 주는 행위 이후 간편등기 컨테이너 height 초기화
        if($('[data-slide="slideWrap"]').length > 0) {
            simpleSlide.setWrapHeight(simpleSlide.activeIdx);
        }
    }
    , onClickTotalTrigger: function(e){
        const _this = this;
        let container, items, openedCnt = 0, item = e.currentTarget;
        while(true){
            item = item.parentNode;
            if(item.getAttribute("data-accordion") == "container"){
                container = item;
                break;
            }
        }

        items = container.querySelectorAll("[data-accordion=item]");

        for(let i=0; i<items.length; i++){
            if(items[i].classList.contains(_this.activeClass)) openedCnt += 1;
        }

        if(items.length == openedCnt){
            container.classList.remove("is-total-opened");
            for(let i=0; i<items.length; i++){
                if(items[i].classList.contains(_this.activeClass)){
                    items[i].classList.remove(_this.activeClass);
                }
            }
        }else{
            container.classList.add("is-total-opened");
            for(let i=0; i<items.length; i++){
                if(!items[i].classList.contains(_this.activeClass)){
                    items[i].classList.add(_this.activeClass);
                }
            }
        }

        // 컨텐츠 높이에 영향을 주는 행위 이후 하단 fixed 버튼 포지션 초기화
        if($("[data-fixed-btn]").length > 0) {
            btnPositionHandler.setPos();
        }
        
        // 컨텐츠 높이에 영향을 주는 행위 이후 간편등기 컨테이너 height 초기화
        if($('[data-slide="slideWrap"]').length > 0) {
            simpleSlide.setWrapHeight(simpleSlide.activeIdx);
        }
    }

}

/*
    도움말 tooltip

    [단순 텍스트]
    <div class="tooltip-wrap">
        <span class="tooltip-btn" tabindex="0"><img src="../../img/ico_qmark@2x.png" alt="Question mark"></span>
        <div class="msg-con">
            <p>텍스트</p>
        </div>
    </div>

    [팝업형]
    <div class="tooltip-wrap">
        <span class="tooltip-btn" data-tooltip="trigger" tabindex="0"><img src="../../img/ico_qmark@2x.png" alt="Question mark"></span>
        <div class="tooltip-cont-con" data-tooltip="container">
            <div class="tooltip-head">
                <p class="title">타이틀</p>
                <button type="button" class="close-btn" onclick="tooltipHandler.closeTooltip()">
                    <img src="../../img/btn_tooltips_close.svg" alt="닫기">
                </button>
            </div>
            <div class="tooltip-body">내용</div>
        </div>
    </div>
*/
const tooltipHandler = {
    activeBox: null
    , activeClass: "active"
    , init: function(){
        const _this = this;
        const btnList = document.querySelectorAll('[data-tooltip="trigger"]');

        for(let i=0; i<btnList.length; i++){
            const btn = btnList[i];
            btn.addEventListener("click", function(e){
                e.preventDefault();
                _this.onClickBtn(e);
            });

            btn.addEventListener("keyup", function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    _this.onClickBtn(e);
                }
            });
        }

        if( btnList.length > 0 ){
            window.addEventListener("click", function(e) {
                if(_this.activeBox && !_this.activeBox.contains(e.target)) {
                    _this.closeTooltip();
                }
            });
        }
    }
    , onClickBtn: function(e){
        const _this = this;
        const target = e.currentTarget.parentNode.querySelector('[data-tooltip="container"]');

        if(_this.activeBox){
            _this.activeBox.classList.remove(_this.activeClass);
            if(_this.activeBox == target){
                _this.activeBox = null;
                return;
            }
            _this.activeBox = null;
        }

        target.classList.add(_this.activeClass);
        // _this.setBoxPosition(target);
        _this.activeBox = target;

        e.stopPropagation();
    }
    , closeTooltip: function(){
        const _this = this;

        _this.activeBox.classList.remove(_this.activeClass);
        _this.activeBox = null;
    }
    , setBoxPosition: function(box){
        const posInfo = box.getBoundingClientRect();
        const bodyW = document.body.clientWidth;

        if(posInfo.right > bodyW){
            box.style.left = -(posInfo.right - bodyW)+"px";
        }
    }
}

/*
    filter Folding
    - data-filter-folding=container: 열렸다 접혔다 해야할 대상
    - data-filter-folding=trigger: 버튼
    - 기본형 필터는 위 속성 제거하고 .filter-wrap에 default 클래스 부여해야함.
*/
const filterFoldingHandler = {
    activeClass: "active"
    , init: function(){
        const _this = this;
        const filterList = document.querySelectorAll("[data-filter-folding=container]");

        for(let i=0; i<filterList.length; i++){
            const container = filterList[i];
            const trigger = container.querySelector("[data-filter-folding=trigger]");

            trigger.addEventListener("click", function(e){
                _this.onClick(e);
            });
        }
    }
    , onClick: function(e){
        const _this = this;
        let item = e.currentTarget;

        while(true){
            item = item.parentNode;
            if(item.getAttribute("data-filter-folding") == "container"){
                break;
            }
        }
        item.classList.toggle(_this.activeClass);
    }
}

/*
    input file handler
    - HTML 구조
        <div class="file-wrap" data-file="container">
            <input type="file" id="file" class="real-file" data-file="file">
            <span class="file-name" data-file="name"></span>
            <label for="file" class="file-btn">파일등록</label>
            <button type="button" class="delete-btn" data-file="delete-btn">삭제</button>
        </div>
*/
const inputFileHandler = {
    activeClass: "active"
    , init: function(){
        const _this = this;
        const inputFileList = document.querySelectorAll('[data-file="container"]');

        for(let i=0; i<inputFileList.length; i++){
            const container = inputFileList[i];
            const target = container.querySelector('[data-file="file"]');
            const deleteBtn = container.querySelector('[data-file="delete-btn"]');

            target.addEventListener("change", function(e){
                _this.onChangeFile(e, container);
            });

            if(deleteBtn){
                deleteBtn.addEventListener("click", function(e){
                    _this.clearFile(container);
                });
            }
        }
    }
    , onChangeFile: function(e, container){
        const _this = this;
        const filename = e.currentTarget.value.split('/').pop().split('\\').pop();

        if(filename != ""){
            container.classList.add(_this.activeClass);
            if(container.querySelector('[data-file="name"]')){
                container.querySelector('[data-file="name"]').innerText = filename;
            }
        }else{
            _this.clearFile(container);
        }
    }
    , clearFile: function(container){
        const _this = this;

        container.querySelector('[data-file="file"]').value = "";
        container.classList.remove(_this.activeClass);

        if(container.querySelector('[data-file="name"]')){
            container.querySelector('[data-file="name"]').innerText = "";
        }
    }
}

/* 주요 기능 버튼 position 처리 */
const btnPositionHandler = {
    target: null
    , top: null
    , pos: null
    , offsetHeight: null

    , init: function(){
        const _this = this;
        _this.target = document.querySelector("[data-fixed-btn]");

        if( _this.target ){
            // 초기 세팅
            _this.defaultSetting();
            // 포지션 세팅
            _this.setPos();

	        // 스크롤이벤트 등록
            window.addEventListener("scroll", function(){
                _this.setPos();
            });
            // 리사이즈 이벤트 등록
            window.addEventListener("resize", function(){
                _this.setPos();
            });
        }
    }
    , defaultSetting: function(){
        const _this = this;
        const obj = _this.target.getBoundingClientRect();

        _this.top = obj.top + document.documentElement.scrollTop;
        _this.width = obj.width;
        _this.pos = _this.target.style.position;
        _this.offsetHeight = document.documentElement.offsetHeight;
    }
    , setPos: function(){
        const _this = this;
        const cHeight = document.documentElement.clientHeight;
        const oHeight = document.documentElement.offsetHeight;
        const sTop = document.documentElement.scrollTop;
        const left = _this.target.parentNode.getBoundingClientRect().left;

        if(_this.offsetHeight != oHeight){
            let gap = Math.abs(_this.offsetHeight - oHeight);
            _this.top = _this.offsetHeight > oHeight ? _this.top - gap : _this.top + gap
            _this.offsetHeight = oHeight;
        }

        if(_this.top+90 > (cHeight+sTop) && $('.mode-tablet').length < 1){
            if(_this.pos == "fixed"){
                _this.target.style.left = left + "px";
                return;
            }else{
                // 레이아웃에 따른 width 분기
                const w = document.querySelector(".navigation-apply") ? 1000 : _this.target.parentNode.clientWidth;
                _this.target.style.position = "fixed";
                _this.target.style.bottom = 30+"px";
                _this.target.style.left = left + "px";
                _this.target.style.width = w + "px";

                _this.pos = "fixed";
            }
        }else{
            _this.target.style.position = "relative";
            _this.target.style.bottom = 0;
            _this.target.style.left = 0;
            _this.pos = "relative";
        }
    }
}

/* 테이블 내부 기능버튼 */
const multiBtnHandler = {
    init: function(){
        const _this = this;
        const multiBtnConList = document.querySelectorAll(".btn-multi-con");
        const multiBtnList = document.querySelectorAll(".btn-multi");

        for(let i=0; i<multiBtnConList.length; i++){
            const btnCon = multiBtnConList[i];

            btnCon.addEventListener("mouseenter", function(){
                _this.onMouseEnter(btnCon);
            });
            btnCon.addEventListener("mouseleave", function(){
                this.classList.remove("hover")
            });

            // 버튼 컨테이너 크기 세팅, 나머지 버튼 숨김처리
            // 버튼요소 중 가장 큰 요소의 width를 지정해주기 위해 interval을 둠
            setTimeout(function(){
                _this.defaultSetting(btnCon);
            }, 200);
        }

        for(let i=0; i<multiBtnList.length; i++){
            const btn = multiBtnList[i];

            btn.addEventListener("click", function(){
                _this.onClickBtn(btn);
            });
            btn.addEventListener("focus", function(){
                _this.onMouseEnter(btn.parentNode);
            });
            btn.addEventListener("blur", function(){
                _this.onMouseLeave(btn.parentNode);
            });
        }
    }
    , onMouseEnter: function(btnCon){
        const _this = this;
        const btnList = btnCon.querySelectorAll(".btn-multi");
        const activeIdx = _this.getActiveIndex(btnList);

        btnCon.classList.add("hover");
        btnCon.style.width = btnCon.getAttribute("data-max-width") + "px";
        btnCon.style.top = activeIdx * btnList[0].offsetHeight * -1 + "px";
        btnCon.style.left = 0;
    }
    , onMouseLeave: function(btnCon){
        btnCon.style.width = "auto";
        btnCon.style.top = 0;
        btnCon.classList.remove("hover");
    }
    , getActiveIndex: function(btnList){
        for(let i=0; i<btnList.length; i++){
            if(btnList[i].classList.contains("active")){
                return i;
            }
        }
    }
    , getMaxWidth: function(btnList){
        let w = 0;
        for(let i=0; i<btnList.length; i++){
            if(btnList[i].offsetWidth > w){
                w = btnList[i].offsetWidth;
            }
        }
        return w+1;
    }
    , onClickBtn: function(btn){
        const _this = this;
        const btnList = btn.parentNode.querySelectorAll(".btn-multi");

        for(let i=0; i<btnList.length; i++){
            btnList[i].classList.remove("active");

            if(!btnList[i].classList.contains("hide")){
                btnList[i].classList.add("hide");
            }
        }

        if(btn.classList.contains("hide")){
            btn.classList.remove("hide");
        }
        btn.classList.add("active");
        btn.blur();
    }
    , defaultSetting: function(btnCon){
        const _this = this;
        const btnList = btnCon.querySelectorAll(".btn-multi");
        let activeCnt = 0;

        // button 컨테이너 hover 시 크기 지정
        btnCon.setAttribute("data-max-width", this.getMaxWidth(btnCon.querySelectorAll(".btn-multi")));

        for(let i=0; i<btnList.length; i++){
            if(!btnList[i].classList.contains("active")){
                btnList[i].classList.add("hide");
            }else{
                activeCnt += 1;
            }
        }

        if(activeCnt == 0){
            btnList[0].classList.remove("hide");
            btnList[0].classList.add("active");
        }
    }
}