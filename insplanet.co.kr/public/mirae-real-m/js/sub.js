$(function(){

    // 모바일 팝업 height 100%
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");

    window.addEventListener("resize", function(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", vh + "px");
    });

    /* 네비게이션 열기 */
    $(".area-header .btn-navigation button").on("click", function(){
        $(".navigation-global").addClass("on");
    });

    /* GNB */
    $(".navigation-global .navigation-inner .contain-body .box-navigation > ul > li > button").on("click",function(){
        $(".navigation-global .navigation-inner .contain-body .box-navigation > ul > li").removeClass("on");
        $(this).parent().addClass("on");
    });

    /* 네비게이션 닫기 */
    $(".navigation-global .btn-close button").on("click",function(){
        $(".navigation-global").removeClass("on");
    });

    /* 고객센터 */
    $(".area-sidebar .btn-sideup button").on("click",function(){
        if($(".contain-cslink").hasClass("on") == 0){
            $(".contain-cslink").addClass("on");
        }else{
            $(".contain-cslink").removeClass("on");
        }
    });

    /* Top Anchor */


    /* input clear button 생성 */
    inputClearHandler.init();

    /* selectbox styling */
    if($(".custom-select").length > 0) $(".custom-select").selectric();

    /* input autocomplete */
    var availableTags = [
        "등기"
        , "등기 열람"
        , "등기 열람 발급"
        , "등기 신청"
        , "등기신청사건"
        , "등기신청사건처리현황"
    ];
    if( $("#total-search").length > 0 ){
        $("#total-search").autocomplete({
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
            ,duration: ''
            ,showAnim: ''
            ,bodyTop: null // ** customizing ** 모바일에서 팝업형태로 나타날 때 body 스크롤 방지를 위해
            ,beforeShow: function(input, inst) {
                const dim = "<div class='datepicker-dim-wrap'></div>";
                inst.settings.bodyTop = window.pageYOffset;

                $("body").addClass("disable-scroll");
                $("body").css("top", "-" + inst.settings.bodyTop + "px");
                $("body").append(dim);
            }
            ,showButtonPanel: true
            ,closeText: "닫기"
            ,onClose: function(dateText, inst){
                $(".datepicker-dim-wrap").remove();

                $("body").css("top", "");
                $("body").removeClass("disable-scroll");
                window.scrollTo(0, inst.settings.bodyTop);
                inst.settings.bodyTop = null;
            }
            ,onSelect: function(dateText) {
            }
        })
    }

    /* content wrap padding */
    // if($('.bottom-button-sec').length > 0){
    //     $('.area-inner > .content-wrap').css('padding-bottom', '80px');
    // }

    /* 팝업 default setting */
    if( $(".popup-wrap.active").length > 0 ){
        $(".popup-wrap.active").each(function(idx, item){
            popupManager.defaultSetting("#" + item.id);
        })
    }

    // 고유번호 스캔 툴팁 - 한번 닫으면 열 수 없음
    $(".msg-con.qrcode .close-btn").on("click", function(){
        $(this).closest(".msg-con").removeClass("qrcode");
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


    /* lottie 애니메이션 호출 */
    lottieLoad();
})

$(window).on("resize load",function(){

});

$(window).on("scroll",function(){

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
    }else{

    }

});

/* lottie 애니메이션 */
window.animationList = [];
function lottieLoad(){
    var animations = ["lottie-checked", "lottie-construction", "lottie-error"];
    var animationDataList = [
        {"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":120,"h":120,"nm":"checked","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[100]},{"t":15.0000006109625,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[84,84],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":10.0000004073083,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"패스 다듬어 자르기 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.880744457245,0.880744457245,0.880744457245,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":25.0000010182709,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.368,-0.05],[0.053,0],[0.926,0.932],[0,0]],"o":[[0,0],[-0.9,1.032],[-0.069,0.005],[-1.314,0.001],[0,0],[0,0]],"v":[[73.999,38.501],[50.916,64.877],[47.361,66.572],[47.185,66.577],[43.685,65.122],[30.499,51.937]],"c":false},"ix":2},"nm":"패스 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[100]},{"t":33.0000013441176,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"패스 다듬어 자르기 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"선 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"ciecle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":15.0000006109625,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2,"l":2},"a":{"a":0,"k":[52,52,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[38,38,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,2.667]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[110,110,100]},{"t":25.0000010182709,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[104,104],"ix":2},"p":{"a":0,"k":[52,52],"ix":3},"nm":"타원 패스 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.290196078431,0.364705882353,0.776470648074,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"칠 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}
        , {"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":60.0000024438501,"w":104,"h":104,"nm":"construction","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"mov","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[9.359,17.413],[9.343,45.25],[93.5,45.75],[93.625,17.451]],"c":true}},"o":{"a":0,"k":100},"x":{"a":0,"k":0},"nm":"마스크 1"}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-16.252,17.549],[-28.76,45.362],[-39.826,45.362],[-27.318,17.549]],"c":true}},"nm":"패스 9","hd":false},{"ind":1,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[4.666,17.487],[-7.901,45.359],[-18.965,45.359],[-6.398,17.487]],"c":true}},"nm":"패스 8","hd":false},{"ind":2,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[27.014,17.549],[14.506,45.362],[3.44,45.362],[15.948,17.549]],"c":true}},"nm":"패스 4","hd":false},{"ind":3,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[49.701,17.525],[37.193,45.338],[26.127,45.338],[38.635,17.525]],"c":true}},"nm":"패스 2","hd":false},{"ind":4,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[72.072,17.466],[59.505,45.338],[48.441,45.338],[61.008,17.466]],"c":true}},"nm":"패스 3","hd":false},{"ind":5,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[94.322,17.431],[81.755,45.303],[70.691,45.303],[83.258,17.431]],"c":true}},"nm":"패스 5","hd":false},{"ind":6,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[116.947,17.487],[104.38,45.359],[93.316,45.359],[105.883,17.487]],"c":true}},"nm":"패스 6","hd":false},{"ind":7,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[138.572,17.431],[126.005,45.303],[114.941,45.303],[127.508,17.431]],"c":true}},"nm":"패스 7","hd":false},{"ty":"fl","c":{"a":0,"k":[0.294117647059,0.423529441684,0.921568687289,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[15.413,31.402],"to":[6,0],"ti":[-11.167,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":30,"s":[51.413,31.402],"to":[11.167,0],"ti":[-5.167,0]},{"t":59.0000024031193,"s":[82.413,31.402]}]},"a":{"a":0,"k":[51.413,31.402]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 13","bm":0,"hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"alert","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[81.21,83.384],[81.21,85.101]],"c":false}},"nm":"패스 1","hd":false},{"ind":1,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[81.21,69.652],[81.21,80.81]],"c":false}},"nm":"패스 2","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":11,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":42,"s":[100]},{"t":53.0000021587343,"s":[50]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 1","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[1.451,0],[0,0],[0.722,1.259],[-0.734,1.253],[0,0],[-1.436,0],[-0.726,-1.238],[0,0],[0.722,-1.259]],"o":[[0,0],[-1.451,0],[-0.722,-1.259],[0,0],[0.725,-1.238],[1.436,0],[0,0],[0.733,1.253],[-0.721,1.259]],"v":[[11.777,14.053],[-11.777,14.053],[-15.247,12.042],[-15.228,8.031],[-3.451,-12.076],[0,-14.053],[3.452,-12.076],[15.229,8.031],[15.247,12.042]],"c":true}},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.956862804936,0.760784373564,0.082352941176,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[81.21,76.485]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 3","bm":0,"hd":false},{"ty":"tr","p":{"a":0,"k":[81.21,76.485]},"a":{"a":0,"k":[81.21,76.485]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 12","bm":0,"hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"construction","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-43.154,-14.907],[43.154,-14.907],[43.154,14.907],[-43.154,14.907]],"c":true}},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[51.405,31.409]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 8","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.5,-39.5],[3.5,-39.5],[3.5,39.5],[-3.5,39.5]],"c":true},"x":"var $bm_rt;\n$bm_rt = content('\\uadf8\\ub8f9 9').content('\\ud328\\uc2a4 1').path;"},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[17.21,49.038]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 9","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-3.5,-39.5],[3.5,-39.5],[3.5,39.5],[-3.5,39.5]],"c":true}},"nm":"패스 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"선 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[86.21,49.038]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 10","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-27.614,0],[0,-3.866],[27.614,0],[0,3.866]],"o":[[27.614,0],[0,3.866],[-27.614,0],[0,-3.866]],"v":[[0,-7],[50,0],[0,7],[-50,0]],"c":true}},"nm":"패스 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"칠 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.109,88.538]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"그룹 11","bm":0,"hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}],"markers":[]}
        , {"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":90.0000036657751,"w":104,"h":104,"nm":"error","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"error Outlines","sr":1,"ks":{"o":{"a":0,"k":100},"r":{"a":0,"k":0},"p":{"a":0,"k":[52,52,0]},"a":{"a":0,"k":[52,52,0]},"s":{"a":0,"k":[100,100,100]}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[-0.558,0.559],[-8.035,-8.035],[-0.753,-1.141]],"o":[[0.481,-0.604],[8.035,-8.035],[1.004,1.004],[0,0]],"v":[[-16.646,4.148],[-15.088,2.404],[14.01,2.404],[16.646,5.632]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.1,30.709]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[100]},{"t":20.0000008146167,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 7","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[-0.453,0.453],[-11.721,-11.721],[-0.883,-1.196]],"o":[[0.418,-0.474],[11.721,-11.721],[1.084,1.084],[0,0]],"v":[[-23.352,5.538],[-22.046,4.147],[20.4,4.147],[23.352,7.574]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.525490196078,0.525490196078,0.525490196078,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.384,22.291]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"t":15.0000006109625,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 8","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[-0.14,0.15],[-15.663,-14.606],[-1.207,-1.528]],"o":[[0.137,-0.152],[14.606,-15.663],[1.468,1.369],[0,0]],"v":[[-29.618,7.493],[-29.202,7.04],[25.605,5.126],[29.618,9.48]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":3}},{"n":"g","nm":"gap","v":{"a":0,"k":4}},{"n":"o","nm":"offset","v":{"a":0,"k":0}}],"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.405,14.175]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":10.0000004073083,"s":[0]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 9","bm":0,"hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[52.608,60.227],[52.608,61.944]],"c":false}},"nm":"Path 2","hd":false},{"ind":1,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[52.608,46.495],[52.608,57.653]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":39,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":58,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":69,"s":[50]},{"t":80.0000032584668,"s":[100]}]},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 4","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-1.953,-1.953],[0,0],[1.952,-1.953],[0,0],[1.953,1.953],[0,0],[-1.952,1.952],[0,0]],"o":[[0,0],[1.952,1.952],[0,0],[-1.953,1.953],[0,0],[-1.952,-1.953],[0,0],[1.953,-1.953]],"v":[[3.536,-14.849],[14.85,-3.535],[14.85,3.536],[3.536,14.849],[-3.536,14.849],[-14.85,3.536],[-14.85,-3.535],[-3.536,-14.849]],"c":true}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921568687289,0.403921598547,0.403921598547,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.849,54.003]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 5","bm":0,"hd":false},{"ty":"tr","p":{"a":0,"k":[52.849,54.003]},"a":{"a":0,"k":[52.849,54.003]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 11","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-2.485,0],[0,-2.485],[2.485,0],[0,2.485]],"o":[[2.485,0],[0,2.485],[-2.485,0],[0,-2.485]],"v":[[0,-4.5],[4.5,0],[0,4.5],[-4.5,0]],"c":true}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.609,88.881]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 1","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[12.608,88.881],[91.608,88.881]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.113725497676,0.113725497676,0.113725497676,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 2","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[52.608,71.309],[52.608,88.881]],"c":false}},"nm":"Path 1","hd":false},{"ty":"st","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"w":{"a":0,"k":2},"lc":1,"lj":1,"ml":4,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":3}},{"n":"g","nm":"gap","v":{"a":0,"k":2}},{"n":"o","nm":"offset","v":{"a":0,"k":0}}],"nm":"Stroke 1","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 6","bm":0,"hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ks":{"a":0,"k":{"i":[[-27.614,0],[0,-3.866],[27.614,0],[0,3.866]],"o":[[27.614,0],[0,3.866],[-27.614,0],[0,-3.866]],"v":[[0,-7],[50,0],[0,7],[-50,0]],"c":true}},"nm":"Path 1","hd":false},{"ty":"fl","c":{"a":0,"k":[0.870588295133,0.870588295133,0.870588295133,1]},"o":{"a":0,"k":100},"r":1,"bm":0,"nm":"Fill 1","hd":false},{"ty":"tr","p":{"a":0,"k":[52.109,92.381]},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"r":{"a":0,"k":0},"o":{"a":0,"k":100},"sk":{"a":0,"k":0},"sa":{"a":0,"k":0},"nm":"Transform"}],"nm":"Group 10","bm":0,"hd":false}],"ip":0,"op":89.9100036621094,"st":0,"bm":0}],"markers":[]}
    ];

    for(i = 0; i < animations.length; i++) {
        var anim;
        var elem = document.getElementById(animations[i])
        var animData = {
            container: elem,
            renderer: 'svg',
            loop: animations[i] == "lottie-checked" ? false : true,
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
        <input type="text" name="" id="phone0" class="w116" placeholder="">
    - init() 호출 후
        <span class="clear-btn-con">
            <input type="text" name="" id="phone0" class="w116" placeholder="">
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

    // body scroll 방지
    , bodyTop: null

    , focusableElement: "button, input:not([type='hidden']), select, iframe, textarea, [href]"
    , focusList: null
    , focusIdx: null

    // toast popup
    , isActiveToast: false

    // event 등록, 제거
    , registEvent: function(){
        const _this = this;

        _this.closePopup = this.closePopup.bind(_this);

        // 때에 따라 dim 클릭 시 닫히는 기능이 없는 팝업 존재(ex - 결제완료팝업)
        if(_this.dimList[this.idx].getAttribute("data-prevent-close") === null){
            _this.dimList[this.idx].addEventListener("click", _this.closePopup);
        }

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

    // 객체 default setting
    , defaultSetting: function(id){
        const target = document.querySelector(id);
        const dim = document.querySelector(id+" > .dim-wrap");
        
        this.targetList.push(target);
        this.dimList.push(dim);

        this.idx = this.targetList.length - 1;

        // body scroll 방지
        this.bodyTop = window.pageYOffset;
        document.querySelector("body").classList.add("disable-scroll");
        document.querySelector("body").style.top = "-" + this.bodyTop + "px";

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

    // popup 열기, 닫기
    , openPopup: function(id){
        this.defaultSetting(id);
        this.targetList[this.idx].classList.add("active");
    }
    , closePopup: function(){
        this.removeEvent();

        this.targetList[this.idx].classList.remove("active");
        this.targetList.pop();
        this.dimList.pop();
        this.idx = this.idx > 0 ? this.idx-1 : null;

        if( this.targetList.length == 0 ){
            document.querySelector("body").classList.remove("disable-scroll");
            document.querySelector("body").style.removeProperty("top");
            window.scrollTo(0, this.bodyTop);

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
    }
    , getIndex: function(node){
        let index = 0;
        while ( (node = node.previousElementSibling) ) {
            index++;
        }
        return index;
    }
}

/* dropdown */
const dropdownHandler = {
    activeOptionBox: null
    , init: function(){
        const _this = this;
        const dropdownList = document.querySelectorAll(".dropdown-wrap");

        for(let i=0; i<dropdownList.length; i++){
            const container = dropdownList[i];
            const currentItem = container.querySelector(".current-item");
            const optionCon = container.querySelector(".dropdown-con");

            currentItem.addEventListener("click", function(e){
                _this.showOptionList(e);
            });

            for(let j=0; j<optionCon.children.length; j++){
                const option = optionCon.children[j];
                option.addEventListener("click", function(e){
                    _this.onClickOption(e, currentItem, optionCon);
                });
            }
        }

        if( dropdownList ){
            window.addEventListener("click", function(e) {
                const matches = e.target.matches ? e.target.matches('.current-item') : e.target.msMatchesSelector('.current-item');
                if (!matches) {
                    const targetList = document.querySelectorAll(".dropdown-con");
                    const currentItem = document.querySelectorAll(".current-item");
                    for(let i=0; i<targetList.length; i++){
                        targetList[i].style.display = "none";
                        currentItem[i].classList.remove("active");
                    }
                    _this.activeOptionBox = null;
                }
            });
        }
    }
    , showOptionList: function(e){
        const _this = this;
        const target = e.target.parentNode.querySelector(".dropdown-con");

        if( _this.activeOptionBox ){
            _this.activeOptionBox.style.display = "none";
            e.target.classList.remove("active");

            if(_this.activeOptionBox == target){
                _this.activeOptionBox = null;
                return;
            }
        }
        target.style.display = "block";
        e.target.classList.add("active");
        
        _this.activeOptionBox = target;
    }
    , hideOptionList: function(currentItem, optionCon){
        optionCon.style.display = "none";
        currentItem.classList.remove("active");
    }
    , onClickOption: function(e, currentItem, optionCon){
        const _this = this;
        // 버튼이면 텍스트 변경 및 기능 실행, a태그면 다운로드 및 링크이동
        if( e.target.tagName.toLowerCase() != "a" ){
            e.target.closest(".dropdown-wrap").querySelector(".current-item").innerText = e.target.innerText;
        }
        _this.hideOptionList(currentItem, optionCon);
    }
}

/*
    accordion
    필수 attribute
    - [data-accordion="container"] -> 아코디언 컨테이너
    - [data-accordion="totalTrigger"] -> 전체열기/닫기
    - [data-accordion="trigger"] -> 클릭되는 요소
    - [data-accordion="item"] -> activeClass를 부여할 대상
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
                const trigger = childrens[j].querySelector("[data-accordion=trigger]");
                const innerTriggerList = childrens[j].querySelector("[data-accordion=innerTrigger]") ? childrens[j].querySelectorAll("[data-accordion=innerTrigger]") : null;

                // 내용을 보여지게 하는 event
                trigger.addEventListener("click", function(e){
                    _this.onClickItem(e, container, totalTrigger);
                });

                // 아코디언 컨텐츠 안에서 각각의 내용 열기/닫기 event - 내용쪽에 속한 상세보기 버튼
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
        item.classList.toggle(_this.activeClass);
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
    }

}

/*
    도움말 tooltip
    - 팝업 형태로 보여지는 툴팁은 popupManager로 핸들링

    <div class="tooltip-wrap">
        <button type="button" class="tooltip-btn" data-tooltip="trigger"><img src="../img/m_ico_qmark@3x.png" alt="도움말"></button>
        <div class="msg-con" data-tooltip="container">
            <div class="inner-con">
                <p>
                    width는 고정, 세로 최소 1줄
                    width는 고정, 세로 최소 1줄
                    width는 고정, 세로 최소 1줄
                </p>
                <button type="button" class="close-btn" onclick="tooltipHandler.closeTooltip()">
                    <img src="../img/btn_tooltips_close.svg" alt="도움말 닫기">
                </button>
            </div>
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
        <div class="file-wrap">
            <input type="file" id="file" class="real-file">
            <span class="file-name"></span>
            <label for="file" class="file-btn">파일등록</label>
            <span class="clear-btn"></span>
        </div>
*/
const inputFileHandler = {
    activeClass: "active"
    , init: function(){
        const _this = this;
        const inputFileList = document.querySelectorAll(".file-wrap");

        for(let i=0; i<inputFileList.length; i++){
            const container = inputFileList[i];
            const target = container.querySelector(".real-file");
            const clearBtn = container.querySelector(".clear-btn");

            target.addEventListener("change", function(e){
                _this.onChangeFile(e, container);
            });
            clearBtn.addEventListener("click", function(e){
                _this.clearFile(container);
            });
        }
    }
    , onChangeFile: function(e, container){
        const _this = this;
        const filename = e.currentTarget.value.split('/').pop().split('\\').pop();

        if(filename != ""){
            container.querySelector('.file-name').innerText = filename;
            container.querySelector('.clear-btn').classList.add(_this.activeClass);
        }else{
            _this.clearFile(container);
        }
    }
    , clearFile: function(container){
        const _this = this;

        container.querySelector('.file-name').innerText = "";
        container.querySelector('.real-file').value = "";
        container.querySelector('.clear-btn').classList.remove(_this.activeClass);
    }
}

/* 주요 기능 버튼 position 처리 */
const btnPositionHandler = {
    target: null
    , top: null
    , pos: null

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
            })
        }
    }
    , defaultSetting: function(){
        const _this = this;
        const obj = _this.target.getBoundingClientRect();

        _this.top = obj.top + document.documentElement.scrollTop;
        _this.width = obj.width;
        _this.pos = _this.target.style.position;
    }
    , setPos: function(){
        const _this = this;
        const cHeight = document.documentElement.clientHeight;
        const sTop = document.documentElement.scrollTop;

        if(_this.top > (cHeight+sTop)){
            if(_this.pos == "fixed"){
                return;
            }else{
                _this.target.classList.add("fixed");
                _this.pos = "fixed";
            }
        }else{
            _this.target.classList.remove("fixed");
            _this.pos = "relative";
        }
    }
}


// 간편등기 관련 js
// 부동산 검색 후 항목 선택 시
function onSelectList(item){
    const input = $(item).find("input[type='radio']");
    
    if($("#focus-section").length > 0) $("#focus-section")[0].scrollIntoView();
    if(input.is(":checked")) return;
    
    input.prop("checked", true);
}