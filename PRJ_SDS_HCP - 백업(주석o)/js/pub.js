/* OS Class */
const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;
const isApple = navigator.userAgent.toLowerCase().indexOf('iphone') > -1 || navigator.userAgent.toLowerCase().indexOf('ipad') > -1;

if (isAndroid || isApple) {
  document.body.classList.add(isAndroid ? 'Android' : isApple && 'iOS');
}

// 기기 확인
let deviceState;

const deviceCheck = () => {
  if (window.innerWidth <= 768) {
    return 'mobile';
  } else if (window.innerWidth >= 769 && window.innerWidth <= 1200) {
    return 'tablet';
  } else {
    return 'pc';
  }
};

deviceState = deviceCheck();
document.body.classList.add(deviceState);

window.addEventListener('resize', () => {
  const curDeviceState = deviceCheck();
  if (curDeviceState !== deviceState) {
    deviceState = curDeviceState;
    document.body.classList.remove('pc', 'tablet', 'mobile');
    document.body.classList.add(deviceState);
  }
});

// 100vh problem with iOS Safari
const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', appHeight);
appHeight();

// UTIL functions
// 문자열의 바이트 길이
const getByteLength = (s, b, i, c) => {
  // UTF-8 인코딩 방식에서 한글은 3바이트
  // 2048(2^11)로 나누었을때 몫이 있으면 2048보다 큰 유니코드이므로 3바이트
  // 그보다 작은데 128(2^7)로 나누었을때 몫이 있으면 128보다 큰 유니코드이므로 2바이트
  // 나머지 경우에는 1바이트
  for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
  return b;
};

// Modal
// TODO : 모달 팝업
const ModalPopup = function (options) {
  // const _$this = this;
  // IE 대응 forEach 변환
  if (window.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;

  // 팝업 옵션 값 (defalut 설정)
  const popupOptions = {
    wrapperClassName: 'wrap-layer-popup', // 팝업 wrapper class name
    dimmed: true, // 팝업 딤드 유무
    dimmedClassName: 'popup-dimmed', // 팝업 dimmed class name
    dimmedPrevClassName: 'prev-popup', // 팝업 위 팝업이 뜰 경우 이전 팝업에 추가 되는 class name
    dimmedClickClose: true, // 팝업 딤드 클릭 시 팝업 닫기 기능
    scrollLock: true, // 팝업 오픈 시 body 영역 스크롤 lock 기능
    scrollLockClassName: 'scroll-lock', // body scroll lock class name
    openClassName: 'popup-open', // 팝업 활성화 시 추가 되는 class name
    titleClassName: 'wrap-layer-popup-title', // 팝업 활성화 시 포커스 될 타이틀 class name
    closeBtnClassName: 'btn-layer-close', // 팝업 닫기 버튼 class name (팝업 마크업 마지막에 들어가는 닫기 버튼)
    startPopup: false, // 팝업 시작시
  };

  // 사용자 설정 팝업 옵션 값으로 변경
  Object.keys(options).forEach((option) => {
    popupOptions[option] = options[option];
  });

  // 팝업에 사용되는 전역 변수
  const _popupVariable = {};

  _popupVariable.focusElement = [];
  _popupVariable.cookieCheckValue = [];
  _popupVariable.popupDepth = 0;
  _popupVariable.cookieData;
  _popupVariable.layerPopups;
  _popupVariable.btnLayerPopup;
  _popupVariable.btnLayerClose;
  _popupVariable.autoPopups;
  _popupVariable.keyEscapeEvent;
  _popupVariable.KeyboardEventElement;
  _popupVariable.layerPopups = document.querySelectorAll(`.${popupOptions.wrapperClassName}`);
  _popupVariable.btnLayerPopup = document.querySelectorAll('[aria-haspopup="dialog"]');
  _popupVariable.btnLayerClose = document.querySelectorAll('[data-popup-close]');
  _popupVariable.btnLayerCloseConfirm = document.querySelectorAll('[data-close-confirm]');

  // 키보드 ESC 키 동작 시 keyEvent.keyEscape 변수 값 변경 (변수 변경 감지 중 - 변수 값에 따라 popupCommon.escKeyClose 이벤트 호출)
  const keyEvent = {
    get keyEscape() {
      return this._state;
    },
    set keyEscape(state) {
      this._state = state;
      if (state) popupCommon.escKeyClose(_popupVariable.KeyboardEventElement, _popupVariable.keyEscapeEvent);
      // console.log(state, _popupVariable.KeyboardEventElement, _popupVariable.keyEscapeEvent);
    },
  };
  keyEvent;

  const popupCommon = (function () {
    // option Event
    const optionEvent = {
      // 팝업 dimmed 생성
      createdDimmed: () => {
        const popupDimmed = document.querySelectorAll(`.${popupOptions.dimmedClassName}`);
        if (popupDimmed.length === 0) {
          const createDiv = document.createElement('div');
          createDiv.classList.add(popupOptions.dimmedClassName);
          document.querySelector('body').appendChild(createDiv);
        }
      },
      // popupDimmedClickAction 실행시 실행되는 이벤트 (dimmed 삭제, 모든 팝업 닫기, 스크롤 락 해지, 포커스 이동, 포커스 data reset 이벤트 포함)
      popupDimmedCloseEvent: (event) => {
        if (event.target.classList.contains(`${popupOptions.wrapperClassName}`)) {
          event.preventDefault();
          optionEvent.dimmedeDelete(); // 팝업 dimmed 삭제 이벤트 호출
          optionEvent.scrollLockRemove(); // 스크롤 락 해지 이벤트 호출
          // 팝업 전체 닫기 이벤트 호출 기본
          // (저장 된 _popupVariable.focusElement 값이 있는 경우)
          if (_popupVariable.focusElement.length > 0) clickEvent.popupCloseAll();
          // (저장된 _popupVariable.focusElement 값이 없을 경우 - 화면 시작 시 오픈 되는 팝업 등 케이스)
          else {
            for (let i = 0; _popupVariable.layerPopups.length > i; i++)
              _popupVariable.layerPopups[i].classList.remove(popupOptions.openClassName);
            document.body.setAttribute('tabindex', '0');
            document.body.focus();
          }
          clickEvent.popupDataReset(); // 팝업 포커스 data reset
          event.srcElement.removeEventListener('click', optionEvent.popupDimmedCloseEvent);
        }
      },
      // 팝업 dimmed click Action
      popupDimmedClickAction: (element) => {
        // 팝업 dimmed 삭제시 실행되는 이벤트 popupDimmedCloseEvent 호출
        element.addEventListener('click', optionEvent.popupDimmedCloseEvent);
      },
      // 상위 팝업 닫기 시 이전 팝업 opacity style 삭제
      prevPopupStyleDelete: (target, trigger) => {
        const getPopupValue = target.getAttribute('data-popup-close') || target.getAttribute('data-popup');
        const targetPopupDepth = Number(
          document.querySelector(`.${popupOptions.wrapperClassName}[data-popup='${getPopupValue}']`).getAttribute('data-popup-depth'),
        );
        if (trigger === 'escKey')
          document
            .querySelector(`.${popupOptions.wrapperClassName}[data-popup-depth='${targetPopupDepth}']`)
            .classList.remove(popupOptions.dimmedPrevClassName);
        else
          document
            .querySelector(`.${popupOptions.wrapperClassName}[data-popup-depth='${targetPopupDepth - 1}']`)
            .classList.remove(popupOptions.dimmedPrevClassName);
      },
      // 팝업 dimmed 삭제
      dimmedeDelete: () => {
        const popupDimmedTarget = document.querySelector(`.${popupOptions.dimmedClassName}`);
        for (let i = 0; _popupVariable.layerPopups.length > i; i++) {
          _popupVariable.layerPopups[i].classList.remove(popupOptions.dimmedPrevClassName);
          _popupVariable.layerPopups[i].removeAttribute('data-popup-depth');
        }
        popupDimmedTarget.style.opacity = 0;
        popupDimmedTarget.addEventListener('transitionend', function () {
          // popupDimmedTarget.remove();
          popupDimmedTarget.parentNode.removeChild(popupDimmedTarget);
        });
        keyEvent.keyEscape = false;
      },
      // 팝업 open 시 body scroll Lock
      scrollLock: () => {
        document.body.classList.add(popupOptions.scrollLockClassName);
        scrollLock.disablePageScroll();
      },
      // 팝업 close 시 body scroll Lock 해지
      scrollLockRemove: () => {
        document.body.classList.remove(popupOptions.scrollLockClassName);
        scrollLock.enablePageScroll();
      },
    };

    // click Event
    const clickEvent = {
      // 클릭으로 팝업 열기
      popupOpen: (e) => {
        e.preventDefault();
        if (popupOptions.dimmed) optionEvent.createdDimmed(); // 팝업 dimmed 생성 (dimmed 옵션 true 일 경우 동작, default : true)

        _popupVariable.layerPopups.forEach((layerPopup) => {
          if (layerPopup.getAttribute('data-popup') === e.currentTarget.getAttribute('data-popup')) {
            _popupVariable.popupDepth += 1; // 팝업 depth 저장
            _popupVariable.focusElement.splice(_popupVariable.popupDepth - 1, 0, e.currentTarget); // 팝업 포커스 Element 저장
            clickEvent.openCommonEvent(layerPopup); // 팝업 오픈 공통 이벤트 호출
          }
        });

        // 팝업 위 팝업이 뜰 경우 이전 팝업 opacity (dimmed 옵션 true 일 경우 동작, default : true)
        if (popupOptions.dimmed && _popupVariable.popupDepth > 1) {
          document.querySelector(`[data-popup-depth='${_popupVariable.popupDepth - 1}']`).classList.add(popupOptions.dimmedPrevClassName);
        }
      },
      // 팝업 오픈 공통 이벤트
      openCommonEvent: (popupElement) => {
        popupElement.classList.add(popupOptions.openClassName); // 팝업 활성화 class 추가
        popupElement.setAttribute('data-popup-depth', _popupVariable.popupDepth); // 활성화 된 팝업 depth 값 추가

        // 팝업 dimmed 클릭 시 팝업 닫기 이벤트 호출 (dimmed 옵션 && dimmedClickClose 옵션 둘 다 true 일 경우 동작, default : true)
        const popupDimmed = document.querySelectorAll(`.${popupOptions.dimmedClassName}`);
        if (popupDimmed) {
          popupDimmed.forEach((popupDimmed) => {
            popupDimmed.addEventListener('animationend', function () {
              if (popupOptions.dimmed && popupOptions.dimmedClickClose) optionEvent.popupDimmedClickAction(popupElement);
            });
          });
        }
        // if (popupOptions.dimmed && popupOptions.dimmedClickClose) optionEvent.popupDimmedClickAction(popupElement);

        // 스크롤 락 이벤트 실행 (scrollLock 옵션 true 일 경우 동작, default : true)
        if (popupOptions.scrollLock) optionEvent.scrollLock();

        // 팝업 open 시 팝업 타이틀로 포커스 이동
        const popupTitle = popupElement.querySelector(`.${popupOptions.titleClassName}`);
        popupTitle.focus();
        // 팝업 타이틀에서 shift+tab 또는 <- 화살표 키 키보드 동작 시 이벤트 동작 중지 (팝업 밖으로 포커스 이동 방지)
        popupTitle.addEventListener('keydown', function (e) {
          if ((e.key === 'Tab' && e.shiftKey) || e.key === 'ArrowLeft') {
            e.preventDefault();
            popupElement.querySelector(`.${popupOptions.closeBtnClassName}`).focus();
          }
        });
        _popupVariable.KeyboardEventElement = popupElement;
      },
      // 클릭으로 팝업 닫기
      popupClose: (e) => {
        _popupVariable.layerPopups.forEach((layerPopup) => {
          // 팝업 전체 닫기
          if (e.currentTarget.getAttribute('data-popup-close-all') === 'true') {
            clickEvent.popupCloseAll();
            // 해당 팝업만 닫기
          } else if (layerPopup.getAttribute('data-popup') === e.currentTarget.getAttribute('data-popup-close')) {
            // 오늘 하루 or 일주일 열지 않기 값 저장
            const notOpenCheck = layerPopup.querySelector('[data-check-open]');
            if (notOpenCheck !== null && notOpenCheck.checked) {
              if (notOpenCheck.getAttribute('data-check-open') === 'today')
                closeOption.setCookie(layerPopup.getAttribute('data-popup'), 'Y', 1);
              else if (notOpenCheck.getAttribute('data-check-open') === 'week')
                closeOption.setCookie(layerPopup.getAttribute('data-popup'), 'Y', 7);
              else closeOption.setCookie(layerPopup.getAttribute('data-popup'), 'Y', Number(notOpenCheck.getAttribute('data-check-open')));
            }
            clickEvent.singleCloseCommonEvent(layerPopup, 'close'); // 단일 팝업 닫기 공통 이벤트 호출
          }
        });
        clickEvent.openedPopupCheck(e, 'button'); // openedPopupCheck (현재 열려 있는 팝업 확인) 이벤트 호출
      },
      // confirm 팝업 버튼 이벤트
      popupCloseConfirm: (e) => {
        window[e.target.getAttribute('data-callback')]();
        _popupVariable.layerPopups.forEach((layerPopup) => {
          clickEvent.singleCloseCommonEvent(layerPopup, 'close');
        });
        clickEvent.openedPopupCheck(e, 'button');
      },
      // 단일 팝업 닫기 공통 이벤트
      singleCloseCommonEvent: (popupElement, trigger) => {
        popupElement.classList.remove(popupOptions.openClassName); // 팝업 활성화 class 삭제

        // 클릭으로 팝업 활성화 했을 경우 포커스 이동 (저장된 _popupVariable.focusElement 값이 있을 경우)
        if (_popupVariable.focusElement.length > 0) {
          _popupVariable.focusElement[_popupVariable.popupDepth - 1].focus();
          _popupVariable.focusElement.splice(_popupVariable.popupDepth - 1, 1);
          _popupVariable.popupDepth -= 1;
          _popupVariable.KeyboardEventElement = document.querySelector(
            `.${popupOptions.wrapperClassName}[data-popup-depth='${_popupVariable.popupDepth}']`,
          );
        }

        // 화면 시작 시 오픈 되는 팝업 등 케이스 (저장된 _popupVariable.focusElement 값이 없을 경우)
        if (popupElement.getAttribute('data-popup-auto') === 'true') {
          const $thisPopupDepth = popupElement.getAttribute('data-popup-depth');
          if ($thisPopupDepth > 1) {
            const prevPopupElement = document.querySelector(`[data-popup-depth='${$thisPopupDepth - 1}']`);
            prevPopupElement.querySelector(`.${popupOptions.titleClassName}`).focus();
            _popupVariable.KeyboardEventElement = document.querySelector(
              `.${popupOptions.wrapperClassName}[data-popup-depth='${$thisPopupDepth - 1}']`,
            );
          } else {
            document.body.setAttribute('tabindex', '0');
            document.body.focus();
          }
        }
      },
      // 현재 열려 있는 팝업 체크
      openedPopupCheck: (e, trigger) => {
        // 열린 팝업이 없을 때
        const openPopups = document.querySelectorAll(`.${popupOptions.openClassName}`);
        if (openPopups.length === 0) {
          // 팝업 dimmed 삭제 이벤트 호출 (dimmed 옵션 true 일 경우 동작, default : true)
          if (popupOptions.dimmed) optionEvent.dimmedeDelete();
          // 스크롤 락 해지 이벤트 호출 (scrollLock 옵션 true 일 경우 동작, default : true)
          if (popupOptions.scrollLock) optionEvent.scrollLockRemove();
          clickEvent.popupDataReset(); // 팝업 포커스 관련 data reset
          // 열린 팝업이 있을 때
        } else if (openPopups.length > 0) {
          // 팝업 opacity style 삭제 이벤트 호출 (dimmed 옵션 true 일 경우 동작, default : true)
          if (popupOptions.dimmed) {
            if (trigger === 'escKey') optionEvent.prevPopupStyleDelete(_popupVariable.KeyboardEventElement, 'escKey');
            else optionEvent.prevPopupStyleDelete(e.currentTarget, 'button');
          }
        }
      },
      // ESC 키로 팝업 닫기
      escKeyClose: (element, e) => {
        const openPopups = document.querySelectorAll(`.${popupOptions.openClassName}`);
        if (openPopups.length > 0) {
          clickEvent.singleCloseCommonEvent(element, 'escKey');
          clickEvent.openedPopupCheck(e, 'escKey');
        }
      },
      // 팝업 close 버튼에서  tab 키 또는 화살표 -> 키 키보드 동작 시 팝업 타이틀로 포커스 이동 (팝업 밖으로 포커스 이동 방지)
      closeBtnKeydown: (e) => {
        if ((e.key === 'Tab' && !e.shiftKey) || e.key === 'ArrowRight') {
          _popupVariable.layerPopups.forEach((layerPopup) => {
            if (layerPopup.getAttribute('data-popup') === e.target.getAttribute('data-popup-close')) {
              e.preventDefault();
              layerPopup.querySelector(`.${popupOptions.titleClassName}`).focus();
            }
          });
        }
      },
      // 팝업 포커스 관련 data reset
      popupDataReset: () => {
        _popupVariable.focusElement = [];
        _popupVariable.popupDepth = 0;
      },
      // 모든 팝업 닫기
      popupCloseAll: () => {
        for (let i = 0; _popupVariable.layerPopups.length > i; i++)
          _popupVariable.layerPopups[i].classList.remove(popupOptions.openClassName);
        _popupVariable.focusElement[0].focus();
      },
    };

    // click Action
    const clickAction = {
      addClick: (e) => {
        // 팝업 호출 버튼
        _popupVariable.btnLayerPopup.forEach((btnLayerPopupOpen) => {
          btnLayerPopupOpen.addEventListener('click', clickEvent.popupOpen);
          btnLayerPopupOpen.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') clickEvent.popupOpen(e);
          });
        });
        // 팝업 닫기 버튼
        _popupVariable.btnLayerClose.forEach((btnLayerPopupClose) => {
          btnLayerPopupClose.addEventListener('click', clickEvent.popupClose);
          // 팝업 마크업 기준 젤 하단에 들어가는 닫기 버튼 일 경우에만 키보드 포커스 제어
          if (btnLayerPopupClose.classList.contains(`${popupOptions.closeBtnClassName}`)) {
            btnLayerPopupClose.addEventListener('keydown', clickEvent.closeBtnKeydown);
          }
        });
        // 팝업 confirm 버튼
        _popupVariable.btnLayerCloseConfirm.forEach((btnLayerCloseConfirm) => {
          btnLayerCloseConfirm.addEventListener('click', clickEvent.popupCloseConfirm);
        });
        // ESC 키로 팝업 닫기
        // 팝업 내 열린 상태에서 키보드 ESC 키 이벤트 실행
        window.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' || e.key === 'Esc') {
            _popupVariable.keyEscapeEvent = e;
            keyEvent.keyEscape = true;
          }
        });
      },
    };

    // popupCloseOption
    const closeOption = {
      // 쿠키 설정
      setCookie: (name, value, expiredays) => {
        // console.log('setCookie');
        const todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
      },
    };

    // 화면 시작 시 오픈 되는 팝업
    const startPopup = {
      init: () => {
        _popupVariable.autoPopups = document.querySelectorAll('[data-popup-auto="true"]'); // 화면 시작 시 자동으로 뜨는 팝업
        _popupVariable.autoPopups.forEach((autoPopup) => {
          // 쿠키 저장 된 값으로 오늘 하루 or 일주일 열지 않는 팝업 제외 후 시작 팝업 공통 이벤트 호출
          if (_popupVariable.cookieCheckValue.length > 0) {
            for (let i = 0; _popupVariable.cookieCheckValue.length > i; i++) {
              if (_popupVariable.autoPopups.length > 0 && autoPopup.getAttribute('data-popup') !== _popupVariable.cookieCheckValue[i])
                startPopup.openStartPopup(autoPopup);
            }
          } else startPopup.openStartPopup(autoPopup);
        });
      },
      // 시작 팝업 공통 이벤트
      openStartPopup: (autoPopup) => {
        if (popupOptions.dimmed) optionEvent.createdDimmed(); // 팝업 dimmed 생성 (dimmed 옵션 true 일 경우 동작, default : true)
        _popupVariable.popupDepth += 1; // 팝업 depth 저장
        clickEvent.openCommonEvent(autoPopup); // 팝업 오픈 공통 이벤트 호출
        // 팝업 위 팝업이 뜰 경우 이전 팝업 opacity (dimmed 옵션 true 일 경우 동작, default : true)
        if (popupOptions.dimmed && _popupVariable.popupDepth > 1)
          _popupVariable.autoPopups[_popupVariable.popupDepth - 2].classList.add(popupOptions.dimmedPrevClassName);
      },
      // 쿠키 값 확인
      getCookie: () => {
        _popupVariable.cookieData = document.cookie;
        // console.log(_popupVariable.cookieData);
        if (_popupVariable.cookieData !== '') {
          const cookieArray = _popupVariable.cookieData.split('; ');
          cookieArray.forEach((cookie) => {
            const cookieName = cookie.split('=');
            if (cookieName[1] === 'Y') _popupVariable.cookieCheckValue.push(cookieName[0]);
          });
        }
      },
    };

    return {
      init: () => {
        clickAction.addClick();
        if (popupOptions.startPopup) {
          startPopup.getCookie();
          // popupCommon.startOption();
        }
      },
      setCookie: (name, value, expiredays) => {
        closeOption.setCookie(name, value, expiredays);
      },
      getCookie: () => {
        startPopup.getCookie();
      },
      startOption: () => {
        startPopup.init();
      },
      escKeyClose: (element, e) => {
        clickEvent.escKeyClose(element, e);
      },
    };
  })();

  popupCommon.init();
};

const modalPopup = new ModalPopup({
  dimmed: true, // 팝업 딤드 유무
  dimmedClickClose: true, // 팝업 딤드 클릭 시 팝업 닫기 기능
  scrollLock: true, // 팝업 오픈 시 body 영역 스크롤 lock 기능
  startPopup: true,
});

// 공통 toggle 버튼 (누르면 해당 태그에 active 클래스를 toggle 함)
const toggleButtons = document.querySelectorAll('[data-toggle]');
if (toggleButtons) {
  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('active');
    });
  });
}

// header 인터렉션
const header = document.querySelector('header');
if (header) {
  // 서브메뉴 class 제거
  const subMenuClose = () => {
    header.querySelectorAll('.sub-menu').forEach((el) => {
      el.classList.remove('active');
      el.previousElementSibling.classList.remove('active');
    });
  };

  // 메뉴 open
  const menuOpen = (target) => {
    const nav = header.querySelector('nav');
    const subMenu = target.nextElementSibling;
    const headerHeight = 52;

    subMenuClose();
    nav.classList.add('open');
    target.classList.add('active');
    subMenu.classList.add('active');
    if (header.querySelector('.page-active')) {
      header.classList.add('page-on');
    }
    let navHeight = headerHeight + subMenu.offsetHeight;
    navHeight = navHeight > window.innerHeight ? window.innerHeight : navHeight;
    nav.style.height = `${navHeight}px`;
  };

  // 메뉴 close
  const menuClose = () => {
    const nav = header.querySelector('nav');

    header.classList.remove('page-on');
    subMenuClose();
    nav.classList.remove('open');
    nav.style.height = 0;
  };

  // 모바일 메뉴 open
  const mnbOpen = () => {
    const mnb = header.querySelector('.mnb');
    mnb.classList.add('active');
    document.body.classList.add('no-scroll');
    scrollLock.disablePageScroll();
  };

  // 모바일 메뉴 close
  const mnbClose = () => {
    const mnb = header.querySelector('.mnb');
    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
      mnb.classList.remove('active');
      scrollLock.enablePageScroll();
    }
  };

  // 모바일 msub-menu 스크롤시 msub-menu-top box-shadow 추가 이벤트
  const mSubMenuAddScrolling = (target) => {
    if (target.scrollTop > 0) {
      target.previousElementSibling.classList.add('scrolling');
    } else {
      target.previousElementSibling.classList.remove('scrolling');
    }
  };

  // pc 서브메뉴 상품 탭 클릭시 scroll action
  const subMenuTabAction = () => {
    const tabLinks = header.querySelectorAll('.sub-menu.product .list-type2 a');
    const tabContents = header.querySelectorAll('.sub-menu.product .product-panel');

    tabLinks.forEach((tabLink, idx) => {
      tabLink.addEventListener('click', () => {
        header.querySelector('.sub-menu.product .right-menu').scroll({
          top: tabContents[idx].offsetTop,
          behavior: 'smooth',
        });
      });
    });
  };

  // pc 서브메뉴 상품 scroll action
  const subMenuScrollAction = (scrollY) => {
    const tabLinks = header.querySelectorAll('.sub-menu.product .list-type2 a');
    const tabContents = header.querySelectorAll('.sub-menu.product .product-panel');
    const y = Math.ceil(scrollY);

    tabContents.forEach((tabContent, idx) => {
      const tabContentTop = tabContent.offsetTop;
      const tabContentHeight = tabContentTop + tabContent.offsetHeight;

      if (y <= tabContentHeight && y >= tabContentTop) {
        tabLinks.forEach((tabLink) => {
          tabLink.classList.remove('active');
        });
        tabLinks[idx].classList.add('active');
      }
    });
  };

  // mobile page menu scroll action
  const mPageMenuScroll = () => {
    const pageMenuWrap = document.querySelector('.page-menu-inner');
    const controller = new ScrollMagic.Controller({
      container: 'header .page-menu-inner',
      vertical: false,
    });
    let scrollContentWidth = pageMenuWrap.querySelector('ul').clientWidth - 1;
    const getContentWidth = () => {
      return scrollContentWidth;
    };
    window.addEventListener('resize', () => {
      scrollContentWidth = pageMenuWrap.querySelector('ul').clientWidth - 1;
    });

    const removeGradiant = new ScrollMagic.Scene({
      triggerElement: '.page-menu-inner ul',
      duration: getContentWidth,
      triggerHook: 1,
    })
      .on('end', function (e) {
        if (e.type === 'end') {
          pageMenuWrap.classList.add('no');
        }
      })
      // pc resize 때문에 progress로 변경
      .on('progress', function (e) {
        if (e.progress > 0) {
          pageMenuWrap.classList.remove('no');
        }
      })
      // .on('update', function (e) {
      //   console.log(e.target.controller().info('scrollDirection'));
      //   if (e.target.controller().info('scrollDirection') === 'REVERSE') {
      //     pageMenuWrap.classList.remove('no');
      //   }
      // })
      .addTo(controller);
    if (pageMenuWrap.previousElementSibling) {
      const resizeDropdown = new ScrollMagic.Scene({
        triggerElement: '.page-dropdown + .page-menu-inner ul',
        duration: getContentWidth,
        offset: 1,
        triggerHook: 0,
      })
        .on('start', function (e) {
          if (e.type === 'start') {
            pageMenuWrap.previousElementSibling.classList.remove('small');
          }
        })
        .on('update', function (e) {
          if (e.target.controller().info('scrollDirection') === 'FORWARD') {
            pageMenuWrap.previousElementSibling.classList.add('small');
          }
        })
        .addTo(controller);
    }
  };

  subMenuTabAction();
  if (header.classList.contains('subpage')) {
    mPageMenuScroll();
  }
  header.querySelector('.sub-menu.product .right-menu').addEventListener('scroll', (el) => {
    subMenuScrollAction(el.currentTarget.scrollTop);
  });

  // 메뉴 close 이벤트 생성
  header.querySelectorAll('.main-menu .btn-ico.close').forEach((el) => {
    el.addEventListener('click', () => {
      menuClose();
    });
  });

  // 메뉴 mouseleave 이벤트 생성
  header.addEventListener('mouseleave', () => {
    menuClose();
  });

  // 메뉴 open 이벤트 생성
  header.querySelectorAll('.main-menu > li > a').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      menuOpen(el);
    });
  });

  // mobile 메뉴 open 이벤트 생성
  header.querySelector('.btn-ico.ham').addEventListener('click', () => {
    mnbOpen();
  });

  // mobile 메뉴 close 이벤트 생성
  header.querySelector('.mnb .btn-ico.close').addEventListener('click', () => {
    mnbClose();
  });

  // 모바일 서브메뉴 스크롤시 scrolling 클래스 추가
  header.querySelectorAll('.msub-menu').forEach((mSubMenu) => {
    mSubMenu.querySelector('.msub-menu-cont').addEventListener('scroll', (scrollMenu) => {
      mSubMenuAddScrolling(scrollMenu.currentTarget);
    });
  });

  // 모바일 서브메뉴 open, close
  header.querySelectorAll('.mmain-menu > li > a').forEach((mainMenu) => {
    mainMenu.addEventListener('click', () => {
      mainMenu.nextElementSibling.classList.add('open');
      header.querySelector('.mnb-inner').scrollTop = 0;
      header.querySelector('.mnb-inner').style.overflowY = 'hidden';
    });
    mainMenu.nextElementSibling.querySelector('.btn-text.arrow').addEventListener('click', () => {
      mainMenu.nextElementSibling.classList.remove('open');
      header.querySelector('.mnb-inner').style.overflowY = 'auto';
    });
  });

  window.addEventListener('resize', () => {
    const consolePopup = document.querySelector('.wrap-layer-popup.console');
    const consoleClose = document.querySelector('.wrap-layer-popup.console .btn-close-popup');
    if (document.body.classList.contains('pc')) {
      mnbClose();
    } else {
      menuClose();
      if (consolePopup && consolePopup.classList.contains('popup-open')) {
        console.log('실행됨');
        consoleClose.click();
      }
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolling');
    } else {
      header.classList.remove('scrolling');
    }
  });
}

// tab 인터렉션
const visualTab = document.querySelector('.hero-sub .visual-tab');
if (visualTab) {
  const getScrollHeight = () => {
    const height = {
      nav: 0,
      header: 0,
      pageMenu: 0,
    };

    height.nav = 52;
    height.header = -100;
    height.pageMenu = -header.querySelector('.page-menu').clientHeight;
    // if (document.body.classList.contains('pc')) {
    //   height.nav = 52;
    //   height.header = -100;
    //   height.pageMenu = -header.querySelector('.page-menu').clientHeight;
    // } else {
    //   height.nav = 44;
    //   height.header = 0;
    //   height.pageMenu = -header.clientHeight;
    // }
    return height;
  };

  const scrollVisualTab = () => {
    const controller = new ScrollMagic.Controller();
    let scrollHeight = getScrollHeight();

    const scrollHide = new ScrollMagic.Scene({
      triggerElement: '.hero-sub .visual-tab',
      triggerHook: 0,
      duration: scrollHeight.nav,
      offset: scrollHeight.header,
    })
      .on('progress', function (e) {
        const moveValue = e.progress.toFixed(3) * 100 * (52 / 100);
        document.querySelector('header.subpage').style.top = `-${moveValue}px`;
      })
      .addTo(controller);

    const scrollFix = new ScrollMagic.Scene({
      triggerElement: '.hero-sub .visual-tab',
      triggerHook: 0,
      offset: scrollHeight.pageMenu,
    })
      .setPin('.hero-sub .visual-tab', { spacerClass: 'hey' })
      .setClassToggle('.wrap', 'sub-scrolling')
      .addTo(controller);

    window.addEventListener('resize', () => {
      scrollHeight = getScrollHeight();
      scrollHide.duration(scrollHeight.nav);
      scrollHide.offset(scrollHeight.header);

      // scrollFix.removePin(true);
      // scrollFix.setPin('.hero-sub .visual-tab');
      scrollFix.offset(scrollHeight.pageMenu);
    });
  };

  const getfixHeight = () => {
    const height = header.querySelector('.page-menu').clientHeight + document.querySelector('.hero-sub .visual-tab').clientHeight;

    // if (document.body.classList.contains('pc')) {
    //   height = header.querySelector('.page-menu').clientHeight + document.querySelector('.hero-sub .visual-tab').clientHeight;
    // } else {
    //   height = header.querySelector('nav').clientHeight + 1 + document.querySelector('.hero-sub .visual-tab').clientHeight;
    // }
    return height;
  };

  const visualTabAction = () => {
    const tabLinks = visualTab.querySelectorAll('[data-scroll-anchor]');
    const tabContents = document.querySelectorAll('[data-scroll-section]');
    let fixHeight = getfixHeight();

    window.addEventListener('resize', () => {
      fixHeight = getfixHeight();
    });

    tabLinks.forEach((tabLink, idx) => {
      tabLink.addEventListener('click', () => {
        window.scroll({
          top: tabContents[idx].offsetTop + 1 - fixHeight,
          behavior: 'smooth',
        });
      });
    });
  };

  const visualTabScroll = () => {
    const tabLinks = visualTab.querySelectorAll('[data-scroll-anchor]');
    const tabContents = document.querySelectorAll('[data-scroll-section]');
    let fixHeight = getfixHeight();

    window.addEventListener('resize', () => {
      fixHeight = getfixHeight();
    });

    tabContents.forEach((tabContent, idx) => {
      const tabContentTop = tabContent.offsetTop - fixHeight;
      // const tabContentHeight = tabContentTop + tabContent.offsetHeight;
      // window.scrollY - 1 <= tabContentHeight

      if (window.scrollY >= tabContentTop) {
        tabLinks.forEach((tabLink) => {
          tabLink.classList.remove('active');
        });
        tabLinks[idx].classList.add('active');
      }
    });
    if (window.scrollY < tabContents[0].offsetTop - fixHeight) {
      tabLinks.forEach((tabLink) => {
        tabLink.classList.remove('active');
      });
    }
  };

  const progressBar = () => {
    const controller1 = new ScrollMagic.Controller();
    let windowHeight = document.querySelector('html').scrollHeight;
    const getFunction = () => {
      return windowHeight;
    };
    window.addEventListener('resize', () => {
      windowHeight = document.querySelector('html').scrollHeight;
    });
    const progress = new ScrollMagic.Scene({
      triggerElement: '.wrap',
      duration: getFunction,
      triggerHook: 1,
    })
      // .addIndicators()
      .addTo(controller1)
      .on('progress', function (e) {
        visualTab.querySelector('.progress-bar').style.width = `${e.progress.toFixed(3) * 100}%`;
      });
  };

  window.addEventListener('scroll', () => {
    visualTabScroll();
  });

  scrollVisualTab();
  visualTabAction();
  progressBar();
  // setTimeout(() => {
  //   progressBar();
  // }, 300);
}

// 전체상품목록
const productAllList = document.querySelector('.product-all-list .side-menu');
if (productAllList) {
  const getScrollHeight = () => {
    const height = {
      nav: 0,
      header: 0,
      pageMenu: 0,
      duration: 0,
    };

    const duration =
      deviceState === 'mobile'
        ? document.querySelector('.product-all-list .side-menu-layout .right-content').clientHeight
        : document.querySelector('.product-all-list .side-menu-layout .right-content').clientHeight -
          document.querySelector('footer').clientHeight;

    height.nav = 52;
    height.header = document.querySelector('header').clientHeight;
    height.pageMenu = -header.querySelector('.page-menu').clientHeight;
    height.sideMenu = document.querySelector('.side-menu').clientHeight;
    height.duration = duration;

    return height;
  };

  const scrollTab = () => {
    const controller = new ScrollMagic.Controller();
    let scrollHeight = getScrollHeight();
    const term = 75;

    const scrollFix = new ScrollMagic.Scene({
      triggerElement: '.product-all-list .side-menu-layout .right-content .panels',
      triggerHook: 0,
      offset: (document.querySelector('.hero-sub').offsetTop + term) * -1,
      duration: scrollHeight.duration,
    })
      .setPin('.side-menu', { spacerClass: 'hey', pushFollowers: false })
      .addTo(controller);

    window.addEventListener('resize', () => {
      scrollHeight = getScrollHeight();
      scrollFix.refresh();
      scrollFix.offset((document.querySelector('.hero-sub').offsetTop + term) * -1);
      scrollFix.duration(scrollHeight.duration);
      scrollFix.setPin('.side-menu', deviceState === 'mobile' ? { spacerClass: 'hey' } : { spacerClass: 'hey', pushFollowers: false });
    });
  };

  const getfixHeight = () => {
    const subHero = document.querySelector('.page-menu');
    let height = subHero.clientHeight;
    if (document.body.classList.contains('mobile')) {
      height = height + 112;
    } else {
      height = height + 100;
    }
    return height;
  };

  const tabAction = () => {
    const tabLinks = productAllList.querySelectorAll('[data-scroll-anchor]');
    const tabContents = document.querySelectorAll('[data-scroll-section]');
    let fixHeight = getfixHeight();

    window.addEventListener('resize', () => {
      fixHeight = getfixHeight();
    });

    tabLinks.forEach((tabLink, idx) => {
      tabLink.addEventListener('click', () => {
        window.scroll({
          top: tabContents[idx].offsetTop + 1 - fixHeight,
          behavior: 'smooth',
        });
      });
    });
  };

  const tabScroll = () => {
    const tabLinks = productAllList.querySelectorAll('[data-scroll-anchor]');
    const tabContents = document.querySelectorAll('[data-scroll-section]');
    let fixHeight = getfixHeight();

    window.addEventListener('resize', () => {
      fixHeight = getfixHeight();
    });

    tabContents.forEach((tabContent, idx) => {
      const tabContentTop = tabContent.offsetTop - fixHeight;

      if (window.scrollY >= tabContentTop) {
        tabLinks.forEach((tabLink) => {
          tabLink.classList.remove('active');
        });
        tabLinks[idx].classList.add('active');
      }
    });
    if (window.scrollY < tabContents[0].offsetTop - fixHeight) {
      tabLinks.forEach((tabLink) => {
        tabLink.classList.remove('active');
      });
    }
  };

  window.addEventListener('scroll', () => {
    tabScroll();
  });

  tabAction();
  scrollTab();
}

// header 전체 검색
const totalSearchWrap = header.querySelector('.total-search-wrap');
if (totalSearchWrap) {
  const totalSearchConfig = {
    dim: header.querySelector('.dim'), // 모바일 header dim
    mSearchOpenBtn: header.querySelector('.btn-ico.search'), // 모바일 검색 열기 버튼
    mSearchCloseBtn: totalSearchWrap.querySelector('.btn-text.close'), // 모바일 검색 닫기 버튼
    searchBox: totalSearchWrap.querySelector('.total-search'), // 검색 box
    searchInput: totalSearchWrap.querySelector('.total-search input'), // 검색 input
    searchList: totalSearchWrap.querySelector('.search-list'), // 검색 리스트
  };

  // 검색 열기 이벤트
  const totalSearchOpen = () => {
    totalSearchWrap.classList.add('active');
    if (document.body.classList.contains('pc')) {
      //pc
      searchDimClose();
    } else {
      // mobile
      searchDimOpen();
    }
  };

  // 검색 닫기 이벤트
  const totalSearchClose = () => {
    searchDimClose();
    if (totalSearchConfig.searchInput.value === '') totalSearchConfig.searchInput.blur();
    if (document.body.classList.contains('pc')) {
      // pc
      if (totalSearchConfig.searchInput.value === '') totalSearchWrap.classList.remove('active');
    } else {
      // mobile
      totalSearchWrap.classList.remove('typing', 'active');
      totalSearchConfig.searchInput.value = '';
      totalSearchConfig.searchList.style.display = 'none';
    }
  };

  // 검색어 입력시 최근검색어 영역 보이게 하는 이벤트
  const totalSearchAreaOpen = (el) => {
    if (el.target.value.trim().length > 0) {
      totalSearchConfig.searchList.style.display = 'block';
    } else {
      totalSearchConfig.searchList.style.display = 'none';
    }
  };

  const searchDimOpen = () => {
    totalSearchConfig.dim.classList.add('active');
    document.body.classList.add('scroll-lock');
    scrollLock.disablePageScroll();
  };

  const searchDimClose = () => {
    totalSearchConfig.dim.classList.remove('active');
    if (totalSearchWrap.classList.contains('active')) {
      document.body.classList.remove('scroll-lock');
      scrollLock.enablePageScroll();
    }
  };

  // 검색어 입력시 검색리스트 열고 닫기 (input)
  totalSearchConfig.searchInput.addEventListener('keyup', totalSearchAreaOpen);

  // 모바일 검색 열기 (click)
  totalSearchConfig.mSearchOpenBtn.addEventListener('click', totalSearchOpen);

  // 모바일 검색 닫기 (click)
  totalSearchConfig.mSearchCloseBtn.addEventListener('click', totalSearchClose);

  // 모바일 검색 dim 클릭 시 닫기 (click)
  totalSearchConfig.dim.addEventListener('click', totalSearchClose);

  // PC 검색 닫기 이벤트 추가 (blur, mouseeleave)
  if (document.body.classList.contains('pc')) {
    // PC 검색 닫기 (mouseleave)
    totalSearchWrap.addEventListener('mouseleave', totalSearchClose);
    // PC 검색 열기 (mouseenter)
    totalSearchWrap.addEventListener('mouseenter', totalSearchOpen);
  }

  window.addEventListener('resize', () => {
    totalSearchConfig.searchInput.value !== '' && document.body.classList.contains('pc') && totalSearchOpen();
    if (document.body.classList.contains('pc')) {
      // PC 검색 닫기 이벤트 추가 (mouseeleave, mouseenter)
      totalSearchWrap.addEventListener('mouseleave', totalSearchClose);
      totalSearchWrap.addEventListener('mouseenter', totalSearchOpen);
    } else {
      // PC 검색 닫기 이벤트 제거 (mouseeleave, mouseenter)
      totalSearchWrap.removeEventListener('mouseleave', totalSearchClose);
      totalSearchWrap.removeEventListener('mouseenter', totalSearchOpen);
    }
  });
}

// 아코디언
const accordion = document.querySelectorAll("[data-type='accordion-wrap']");

if (accordion) {
  // 이벤트 할당
  const clickEvt = (evt) => {
    // 현재 타겟
    const currTarget = evt.currentTarget.parentNode;
    let contentHeight = currTarget.querySelector('.content').scrollHeight;

    // 타겟에 active 클래스가 없으면 형제 요소들에 적용된 active 클래스 제거
    if (!currTarget.classList.contains('active')) {
      currTarget.parentNode.querySelectorAll('li').forEach((a) => {
        a.classList.remove('active');
        a.querySelector('.content').style.height = 0;
      });
      currTarget.querySelector('.content').style.height = `${contentHeight}px`;
    } else {
      currTarget.querySelector('.content').style.height = 0;
    }

    // resize height
    window.addEventListener('resize', () => {
      if (currTarget.classList.contains('active')) {
        currTarget.querySelector('.content').style.height = `auto`;
        contentHeight = currTarget.querySelector('.content').scrollHeight;
        currTarget.querySelector('.content').style.height = `${contentHeight}px`;
      }
    });
    // 타겟에 active 클래스 적용
    currTarget.classList.toggle('active');
  };

  accordion.forEach((el) => {
    // 아코디언 클래스 내 요소 변수 대입
    const accordionWrapList = el.querySelectorAll('[data-type="list-row"]');

    // 반복문으로 이벤트 제거 및 할당
    accordionWrapList.forEach((data) => {
      data.removeEventListener('click', clickEvt);
      data.addEventListener('click', clickEvt);
    });
  });
}

// 탭
const tabWrap = document.querySelectorAll("[data-type='tab-wrap']");
if (tabWrap) {
  tabWrap.forEach((tabEl) => {
    const showTab = (evt) => {
      // START: 탭안에 탭이 여러개 있을 경우 첫번째 탭만 gradition 적용되는 문제로 추가
      const innerTabGradiant = tabEl.querySelector(`#${evt.currentTarget.getAttribute('aria-controls')}`);
      if (innerTabGradiant && innerTabGradiant.querySelector("[data-type='tab-area']")) {
        const ckTabGradition = innerTabGradiant.querySelector("[data-type='tab-area']");
        // 탭 리스트를 감싸는 영역의 너비
        const ckTabListWidth = ckTabGradition.clientWidth;
        const patents = ckTabGradition.parentNode;
        const ckTabWidth = ckTabGradition.querySelector("[data-type='tab-list']");

        // 스크롤 이벤트 시작
        const ckScrollEvt = (evt) => {
          const targetPosition = evt.target.scrollLeft;
          // 스크롤 끝 이동 시 소수점 사이즈만큼 이동 위치가 모자르는 문제로 1px 추가
          if (targetPosition + ckTabListWidth + 1 >= ckTabWidth.clientWidth) {
            patents.classList.remove('gradiant-active');
          } else {
            patents.classList.add('gradiant-active');
          }
        };

        const resizeTab = () => {
          if (ckTabGradition.clientWidth >= ckTabWidth.clientWidth) {
            patents.classList.remove('gradiant-active');
          } else {
            patents.classList.add('gradiant-active');
          }
        };

        // 내부 리스트 길이가 작을 경우 (그라디언트 없음)
        if (ckTabWidth.clientWidth <= ckTabListWidth) {
          patents.classList.remove('gradiant-active');
        }
        // 내부 리스트 길이가 클 경우
        else {
          patents.classList.add('gradiant-active');
          ckTabGradition.removeEventListener('scroll', ckScrollEvt);
          ckTabGradition.addEventListener('scroll', ckScrollEvt);
        }

        // 윈도우 창 조절 감지하여 gradiant-active 클래스 주기위한 이벤트
        window.removeEventListener('resize', resizeTab);
        window.addEventListener('resize', resizeTab);
      }
      // END: 탭안에 탭이 여러개 있을 경우 첫번째 탭만 gradition 적용되는 문제로 추가

      // `#${target.getAttribute('aria-controls')}`
      // 이벤트 타켓을 변수에 대입
      const target = evt.currentTarget;
      // 최상위 요소를 받아온다
      const rootTab = evt.currentTarget.closest("[data-type='tab-wrap']");

      // 선택된 요소의 부모 tablist 찾는다.
      const parentTarget = target.closest("[role='tablist']");

      // data-type이 tab-item인 항목의 active 클래스를 제거한다
      parentTarget.querySelectorAll('[data-type="tab-item"]').forEach((data) => {
        data.classList.remove('active');
      });

      // 타켓의 class에 active를 준다
      target.classList.add('active');

      // 최상위 요소에서 role=tabpanel 를 찾아 hidden 값을 준다
      // 탭안의 탭이 있는 경우가 있어서 조건에 따라 분기 처리
      if (rootTab.querySelector('[role = "tabpanel"][data-type = "parent"]')) {
        rootTab.querySelectorAll('[role = "tabpanel"][data-type = "parent"]').forEach((data) => {
          data.setAttribute('hidden', true);
        });
      } else {
        rootTab.querySelectorAll('[role = "tabpanel"]').forEach((data) => {
          data.setAttribute('hidden', true);
        });
      }

      // 최상위 요소에서 타겟에 hidden 을 제거한다
      rootTab.querySelector(`#${target.getAttribute('aria-controls')}`).removeAttribute('hidden');
    };

    const tabGradition = tabEl.querySelector("[data-type='tab-area']");
    if (tabGradition) {
      // 탭 리스트를 감싸는 영역의 너비
      const tabListWidth = tabGradition.clientWidth;
      // 탭 리스트 길이의 너비
      const tabWidth = tabGradition.querySelector("[data-type='tab-list']");

      // 스크롤 이벤트 시작
      const scrollEvt = (evt) => {
        const targetPosition = evt.target.scrollLeft;
        // 스크롤 끝 이동 시 소수점 사이즈만큼 이동 위치가 모자르는 문제로 1px 추가
        if (targetPosition + tabListWidth + 1 >= tabWidth.clientWidth) {
          tabEl.classList.remove('gradiant-active');
        } else {
          tabEl.classList.add('gradiant-active');
        }
      };

      const resizeTab = () => {
        if (tabGradition.clientWidth >= tabWidth.clientWidth) {
          tabEl.classList.remove('gradiant-active');
        } else {
          tabEl.classList.add('gradiant-active');
        }
      };

      // 내부 리스트 길이가 작을 경우 (그라디언트 없음)
      if (tabWidth.clientWidth <= tabListWidth) {
        tabEl.classList.remove('gradiant-active');
      }
      // 내부 리스트 길이가 클 경우
      else {
        tabEl.classList.add('gradiant-active');
        tabGradition.removeEventListener('scroll', scrollEvt);
        tabGradition.addEventListener('scroll', scrollEvt);
      }

      // 윈도우 창 조절 감지하여 gradiant-active 클래스 주기위한 이벤트
      window.removeEventListener('resize', resizeTab);
      window.addEventListener('resize', resizeTab);
    }

    const tabs = document.querySelectorAll('[data-type="tab-item"]');
    // 탭에 이벤트 할당
    tabs.forEach((tab) => {
      tab.removeEventListener('click', showTab);
      tab.addEventListener('click', showTab);
    });
  });
}

// select box
const selectBoxs = document.querySelectorAll('.select-box1');
if (selectBoxs) {
  const selectBoxInit = () => {
    selectBoxs.forEach((selectBox) => {
      const basicSelect = selectBox.querySelector('select');
      const selectChoices = new Choices(basicSelect, {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: '',
      });
    });
  };

  selectBoxInit();
}

// search box
const searchBoxs = document.querySelectorAll('[data-type="inputSearch"]');

if (searchBoxs) {
  const searchAct = {
    // input 타이핑시 typing 클래스 추가
    // el: input, elP: input parent(input-search)
    typing: (el, elP) => {
      el.addEventListener('input', (e) => {
        if (e.target.value !== '') {
          elP.classList.add('typing');
        } else {
          elP.classList.remove('typing');
        }
      });
    },
    // btn-delete 삭제 버튼 클릭시 input 입력값 삭제
    // el: btn-delete, elInput: input, elP: input parent(input-search)
    typingDelete: (el, elInput, elP) => {
      el.addEventListener('click', () => {
        elInput.value = '';
        elInput.focus();
        elP.classList.remove('typing');

        // 최근검색어 영역이 있는 경우
        if (elP.nextElementSibling.classList.contains('search-list')) {
          elP.nextElementSibling.style.display = 'none';
        }
      });
    },
  };

  searchBoxs.forEach((searchBox) => {
    const searchInput = searchBox.querySelector('input');
    const btnDelete = searchBox.querySelector('.btn-delete');

    searchAct.typing(searchInput, searchBox);
    searchAct.typingDelete(btnDelete, searchInput, searchBox);
  });
}

// checkBox all
const checkWrap = document.querySelectorAll('.checked-wrap');
if (checkWrap) {
  checkWrap.forEach((el) => {
    // 테이블 헤더에 위치한 체크를 받아온다
    const checkAll = el.querySelector('input[data-check="all"]');
    // 테이블 본문에 위치한 체크를 받아온다
    const checkList = el.querySelectorAll('input[data-check="data"]');

    // 컨텐츠 체크 이벤트
    const checkEvt = () => {
      // 변수에 초기값 선언
      let status = true;
      // 체크 목록을 확인하여 하나라도 false 상태가 있을 경우 헤더에 위치한 체크 해제
      checkList.forEach((data) => {
        if (data.checked === false) {
          status = false;
        }
      });
      checkAll.checked = status;
    };

    // 헤더 체크 이벤트
    const checkHeader = (evt) => {
      // console.info(evt.currentTarget);
      // 헤더의 체크가 true 인 경우 컨텐츠 전체 체크 true 적용 아니면 falase 적용
      if (evt.currentTarget.checked) {
        checkList.forEach((elList) => {
          elList.checked = true;
        });
      } else {
        checkList.forEach((elList) => {
          elList.checked = false;
        });
      }
    };

    // 컨텐츠 체크에 이벤트 할당
    checkList.forEach((elList) => {
      elList.removeEventListener('click', checkEvt);
      elList.addEventListener('click', checkEvt);
    });

    //헤더 체크에 이벤트 할당
    checkAll.removeEventListener('click', checkHeader);
    checkAll.addEventListener('click', checkHeader);
  });
}

// Text Byte Count
const hintEl = document.querySelectorAll('.hint-txt');
if (hintEl) {
  hintEl.forEach((v) => {
    const inputEl = v.previousElementSibling;
    const cntEl = v.querySelector('.cnt');
    inputEl.addEventListener('input', (e) => {
      cntEl.innerText = getByteLength(e.target.value);
    });
  });
}

// footer
const footer = document.querySelector('footer');

if (footer) {
  // footer menu 버튼 클릭 이벤트 할당
  // const ftMenuInit = () => {
  //   footer.querySelectorAll('.ft-menu .menu-title').forEach((ftMenuButton) => {
  //     ftMenuButton.removeEventListener('click', ftMenuClickEvt);
  //     ftMenuButton.addEventListener('click', ftMenuClickEvt);
  //   });
  // };

  // pc, tablet 일 때 menu 버튼 active 제거
  const ftMenuActiveRemove = () => {
    footer.querySelectorAll('.ft-menu .menu-title').forEach((ftMenuButton) => {
      if (deviceState !== 'mobile' && ftMenuButton.classList.contains('active')) {
        ftMenuButton.classList.remove('active');
      }
    });
  };

  // footer menu 버튼 클릭 이벤트
  const ftMenuClickEvt = (evt) => {
    if (deviceState === 'mobile') {
      const currTarget = evt.currentTarget;
      if (!evt.currentTarget.classList.contains('active')) {
        currTarget
          .closest('ul')
          .querySelectorAll('.menu-title')
          .forEach((a) => {
            a.classList.remove('active');
          });
      }
      currTarget.classList.toggle('active');
    }
  };

  footer.querySelectorAll('.ft-menu .menu-title').forEach((ftMenuButton) => {
    ftMenuButton.removeEventListener('click', ftMenuClickEvt);
    ftMenuButton.addEventListener('click', ftMenuClickEvt);
  });

  window.addEventListener('resize', () => {
    if (document.body.className !== 'mobile') {
      ftMenuActiveRemove();
    }
  });
}
const main = document.querySelector('.main');
if (main) {
  // main 로드 익터랙션
  window.addEventListener('load', function () {
    main.querySelector('.main-visual').classList.add('active');
  });

  const controller = new ScrollMagic.Controller();
  const mainInteraction = new ScrollMagic.Scene({
    triggerElement: main.querySelector('.main-content'),
    triggerHook: 0,
  })
    .on('update enter', function (e) {
      if (!window.scrollY) {
        main.querySelector('.main-visual').classList.add('active');
      } else if (e.type === 'enter') {
        main.querySelector('.main-visual').classList.remove('active');
      }
    })
    .addTo(controller);

  // main 스와이프
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 11,
    centeredSlides: false,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function (sw) {
        const offer1 = document.querySelector('.swiper-num1');
        const offer2 = document.querySelector('.swiper-num2');
        offer1.innerHTML = '0' + (sw.realIndex + 1);
        offer2.innerHTML = '0' + sw.loopedSlides;
      },
    },
    breakpoints: {
      // when window width is >= 320px
      1200: {
        spaceBetween: 26,
      },
    },
  });
  swiper.on('click', function (target) {
    console.log(target.clickedSlide);
    if (target.clickedSlide !== undefined && target.clickedSlide.classList.contains('swiper-slide-next')) {
      swiper.slideNext();
    }
  });
}
