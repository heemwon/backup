$(function(){
    if(document.querySelector("[data-slide='slideWrap']")){
        simpleSlide.init();
    }

    // 주소입력 on/off
    $(".address-select-btn").on("click", function(){
        $(this).parent().toggleClass("active");
    });
    // 주소입력 선택값에 따른 처리
    $(".address-select-con input[name='search-type']").on("change", function(){
        const id = $("input[name='search-type']:checked").attr("id");
        let pHolder = id == "search-addr" ? "지번 또는 도로명 주소 입력" : "부동산 고유번호 입력";
        
        $("input[id='address-search-input']").attr("placeholder", pHolder);

        // 결과 내 재검색 show/hide
        if(id == "search-addr") $(".address-select-con .checkbox-con.research").show();
        else $(".address-select-con .checkbox-con.research").hide();
    });
})

const simpleSlide = {
    slideWrap: null          // 보여지는 영역. 컨텐츠 높이에 따라 height 변경. overflow: hidden;
    , slideCon: null         // 컨텐츠 요소들을 감싸고 있는 컨테이너. margin top 값 변경
    , slideList: null        // 슬라이드 리스트
    , indicatorBtnList: null // step indicator 리스트
    , indicatorBar: null     // step indicator active bar
    , activeIdx: -1
    , isMove: false

    , init: function(){
        const _this = this;

        _this.defaultSetting();
        _this.registEvent();
    }
    , defaultSetting: function(){
        const _this = this;

        _this.slideWrap = document.querySelector("[data-slide='slideWrap']");
        _this.slideCon = _this.slideWrap.querySelector("[data-slide='slideCon']");
        _this.slideList = _this.slideCon.querySelectorAll("[data-slide='slide']");
        _this.indicatorBtnList = document.querySelectorAll("[data-slide='indiCon'] button");
        _this.indicatorBar = document.querySelector("[data-slide='indiCon'] .active-bar");
        _this.activeIdx = _this.activeIdx > -1 ? _this.activeIdx : 0;

        // 최초 wrapper height 설정
        for(let i=0; i<_this.slideList.length; i++){
            const slide = _this.slideList[i];
            if(slide.classList.contains("active")){
                height = slide.offsetHeight;
                _this.activeIdx = i;
            }
        }
        _this.setWrapHeight(_this.activeIdx);
        _this.slideList[_this.activeIdx].classList.add("active");
        _this.indicatorBtnList[_this.activeIdx].classList.add("active");
        
        setTimeout(function(){
            _this.indicatorBar.style.width = _this.indicatorBtnList[_this.activeIdx].offsetWidth + "px";
        }, 200);
    }
    , registEvent: function(){
        const _this = this;

        for(let i=0; i<_this.slideList.length; i++){
            const slide = _this.slideList[i];
            const prevBtn = slide.querySelector("[data-slide='prev']");
            const nextBtn = slide.querySelector("[data-slide='next']");
            const idx = i;

            // 이전, 다음 버튼
            if(prevBtn){
                prevBtn.addEventListener("click", function(){
                    _this.moveTo(idx-1);
                })
            }
            if(nextBtn){
                nextBtn.addEventListener("click", function(){
                    _this.moveTo(idx+1);
                })
            }

            // 상단 indicator 버튼
            if(_this.indicatorBtnList){
                _this.indicatorBtnList[i].addEventListener("click", function(){
                    _this.moveTo(idx);
                })
            }
        }

    }
    , moveTo: function(idx){
        const _this = this;
        const prevIdx = _this.activeIdx;

        if(idx == _this.activeIdx || _this.isMove) return;
        if(idx > _this.activeIdx){
            if(!_this.isValid()){
                // 이후 스텝으로 넘어갈 경우 validation 체크
                return;
            }
        } 

        _this.isMove = true;

        // .slide-con margin-top 조정
        _this.setConMargin(idx);
        // .slide-wrap height 조정
        _this.setWrapHeight(idx);

        // slide에 active class 부여
        _this.slideList[idx].classList.remove("prevent-focus");
        _this.slideList[idx].classList.add("active");
        _this.slideList[_this.activeIdx].classList.remove("active");
        
        // indicator에 active class 부여
        _this.indicatorBtnList[idx].classList.add("active");
        _this.indicatorBtnList[_this.activeIdx].classList.remove("active");
        _this.indicatorBar.style.width = _this.indicatorBtnList[idx].offsetWidth + "px";
        _this.indicatorBar.style.left = _this.indicatorBtnList[idx].offsetLeft + "px";

        // index controll
        _this.activeIdx = idx;

        // transition 완료 후 focus 방지 class 추가, 슬라이드 이동 상태 변경
        setTimeout(function(){
            _this.slideList[prevIdx].classList.add("prevent-focus")
            _this.isMove = false;
        }, 700);

        // 슬라이드 이동 후 scroll
        // $("html").animate({scrollTop: '96'}, 700);
        $("html").scrollTop(96);
    }
    // step에 따른 slideCon margin-top 컨트롤
    , setConMargin: function(idx){
        const _this = this;
        const top = _this.slideCon.offsetTop - _this.slideList[idx].offsetTop;

        _this.slideCon.style.marginTop = top + "px";
    }
    // 내용 길이에 맞게 slideWrap Height 컨트롤
    , setWrapHeight: function(idx){
        const _this = this;
        idx = idx > -1 ? idx : _this.activeIdx;

        _this.slideWrap.style.height = _this.slideList[idx].offsetHeight+1+"px";
    }
    // 입력값 validation
    , isValid: function(){
        return true;
    }
    // 정보작성 중 취소
    , cancelApply: function(){
        const _this = this;

        _this.moveTo(0);
        _this.resetDivision();
    }

    // [intro] 등기 구분 선택
    , onSelectDivision: function(division){
        const _this = this;
        const container = _this.slideList[_this.activeIdx].querySelector(".content-con");
        const activeClass = "selected-division";
        
        // 구분에 따라 필요 class 추가
        container.classList.add(activeClass);
        container.querySelector(".division-con").classList.add(division);
        container.querySelector(".type-list-wrap." + division).classList.add(activeClass);

        // 말풍선 내용 변경 21.08.09 - 삭제처리
        // container.querySelector(".speech-bubble-con p").textContent = "등기유형을 선택하세요";

        // slide 높이 세팅
        _this.setWrapHeight();
        _this.slideList[_this.activeIdx].style.minHeight = container.offsetHeight + "px";
    }
    // [intro] 등기 유형 선택
    , onSelectType: function(el){
        const _this = this;
        const targetClass = "selected-division";
        const activeClass = "selected-type";
        const container = _this.slideList[_this.activeIdx].querySelector(".content-con." + targetClass);
        const typeListWrap = container.querySelector(".type-list-wrap." + targetClass);
        const typeList = typeListWrap.querySelectorAll(".type-list-con > li");

        for(let i=0; i<typeList.length; i++){
            typeList[i].classList.remove("selected");
        }

        container.classList.add(activeClass);
        typeListWrap.classList.add(activeClass);
        el.parentNode.classList.add("selected");

        // slide 높이 세팅
        _this.setWrapHeight();
        _this.slideList[_this.activeIdx].style.minHeight = container.offsetHeight + "px";
    }
    // [intro] 등기구분 재선택
    , resetDivision: function(){
        const _this = this;
        const container = _this.slideList[_this.activeIdx].querySelector(".content-con");

        // 추가된 클래스 제거
        container.className = "content-con"
        container.querySelector(".division-con").className = "division-con";
        if(container.querySelector(".type-list-con > li.selected")){
            container.querySelector(".type-list-con > li.selected").classList.remove("selected");
        }
        container.querySelector(".type-list-wrap.selected-division").classList.remove("selected-type");
        container.querySelector(".type-list-wrap.selected-division").classList.remove("selected-division");

        // 말풍선 내용 변경 21.08.09 - 삭제처리
        // container.querySelector(".speech-bubble-con p").textContent = "등기구분을 선택하세요";

        // slide 높이 세팅
        _this.slideList[_this.activeIdx].style.minHeight = container.offsetHeight + "px";
        _this.setWrapHeight();
    }
}