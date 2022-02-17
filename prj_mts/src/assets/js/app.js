// Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

const app = {
  tab: () => {
    const tabWrap = document.querySelectorAll("[data-type='tab-wrap']");
    if (tabWrap) {
      tabWrap.forEach((tabEl) => {
        const showTab = (evt) => {
          // START: 탭안에 탭이 여러개 있을 경우 첫번째 탭만 gradition 적용되는 문제로 추가
          const innerTabGradiant = tabEl.querySelector(`#${evt.currentTarget.getAttribute("aria-controls")}`);
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
                patents.classList.remove("gradiant-active");
              } else {
                patents.classList.add("gradiant-active");
              }
            };

            const resizeTab = () => {
              if (ckTabGradition.clientWidth >= ckTabWidth.clientWidth) {
                patents.classList.remove("gradiant-active");
              } else {
                patents.classList.add("gradiant-active");
              }
            };

            // 내부 리스트 길이가 작을 경우 (그라디언트 없음)
            if (ckTabWidth.clientWidth <= ckTabListWidth) {
              patents.classList.remove("gradiant-active");
            }
            // 내부 리스트 길이가 클 경우
            else {
              patents.classList.add("gradiant-active");
              ckTabGradition.removeEventListener("scroll", ckScrollEvt);
              ckTabGradition.addEventListener("scroll", ckScrollEvt);
            }

            // 윈도우 창 조절 감지하여 gradiant-active 클래스 주기위한 이벤트
            window.removeEventListener("resize", resizeTab);
            window.addEventListener("resize", resizeTab);
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
            data.classList.remove("active");
          });

          // 타켓의 class에 active를 준다
          target.classList.add("active");

          // 최상위 요소에서 role=tabpanel 를 찾아 hidden 값을 준다
          // 탭안의 탭이 있는 경우가 있어서 조건에 따라 분기 처리
          if (rootTab.querySelector('[role = "tabpanel"][data-type = "parent"]')) {
            rootTab.querySelectorAll('[role = "tabpanel"][data-type = "parent"]').forEach((data) => {
              data.setAttribute("hidden", true);
            });
          } else {
            rootTab.querySelectorAll('[role = "tabpanel"]').forEach((data) => {
              data.setAttribute("hidden", true);
            });
          }

          // 최상위 요소에서 타겟에 hidden 을 제거한다
          rootTab.querySelector(`#${target.getAttribute("aria-controls")}`).removeAttribute("hidden");
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
              tabEl.classList.remove("gradiant-active");
            } else {
              tabEl.classList.add("gradiant-active");
            }
          };

          const resizeTab = () => {
            if (tabGradition.clientWidth >= tabWidth.clientWidth) {
              tabEl.classList.remove("gradiant-active");
            } else {
              tabEl.classList.add("gradiant-active");
            }
          };

          // 내부 리스트 길이가 작을 경우 (그라디언트 없음)
          if (tabWidth.clientWidth <= tabListWidth) {
            tabEl.classList.remove("gradiant-active");
          }
          // 내부 리스트 길이가 클 경우
          else {
            tabEl.classList.add("gradiant-active");
            tabGradition.removeEventListener("scroll", scrollEvt);
            tabGradition.addEventListener("scroll", scrollEvt);
          }

          // 윈도우 창 조절 감지하여 gradiant-active 클래스 주기위한 이벤트
          window.removeEventListener("resize", resizeTab);
          window.addEventListener("resize", resizeTab);
        }

        const tabs = document.querySelectorAll('[data-type="tab-item"]');
        // 탭에 이벤트 할당
        tabs.forEach((tab) => {
          tab.removeEventListener("click", showTab);
          tab.addEventListener("click", showTab);
        });
      });
    }
  },
  swiper: () => {
    const swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper2 = new Swiper(".mySwiper-02", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper3 = new Swiper(".mySwiper-03", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper4 = new Swiper(".mySwiper-04", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper5 = new Swiper(".mySwiper-05", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper6 = new Swiper(".mySwiper-06", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper7 = new Swiper(".mySwiper-07", {
      cssMode: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
    const swiper8 = new Swiper(".mySwiper-08", {
      cssMode: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
    const swiper9 = new Swiper(".mySwiper-09", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper10 = new Swiper(".mySwiper-10", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    const swiper11 = new Swiper(".mySwiper-11", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
  },
  accordion: () => {
    // accordion
    const onClickAccordion = (t) => {
      // 현재 타겟
      const currTarget = t.parentNode;
      let listActive = document.querySelector(".accordion-wrap1 li.active .content");

      // 타겟에 active 클래스가 없으면 형제 요소들에 적용된 active 클래스 제거
      if (!currTarget.classList.contains("active")) {
        currTarget.parentNode.querySelectorAll("li").forEach((a) => {
          a.classList.remove("active");
          if (a.querySelector(".content")) {
            a.querySelector(".content").style.height = 0;
          }
        });
        currTarget.querySelector(".content").style.height = "auto";
        // 아코디언 scroll 이동
        const absoluteTop = currTarget.getBoundingClientRect().top + window.pageYOffset;
        if (listActive) {
          window.scrollTo({ top: absoluteTop - listActive.clientHeight, left: 0, behavior: "smooth" });
        } else {
          window.scrollTo({ top: absoluteTop, left: 0, behavior: "smooth" });
        }
      } else {
        currTarget.querySelector(".content").style.height = 0;
      }
      // 타겟에 active 클래스 적용
      currTarget.classList.toggle("active");
    };
    document.addEventListener("click", function (event) {
      var t = event.target;
      while (t && t !== this) {
        if (t.matches("[data-type=list-row]")) {
          onClickAccordion(t);
        }
        t = t.parentNode;
      }
    });
  },
  dropdownMenu: () => {
    const pageWrap = document.querySelector(".product-info-wrap");
    const body = document.querySelector("main");

    if (pageWrap) {
      const btn = document.querySelector(".dropdown-btn");
      const menu = document.querySelector(".sub-menu");
      btn.addEventListener("click", function () {
        menu.classList.toggle("active");
        btn.classList.toggle("active");
        body.classList.toggle("menu-open");
        if (body.classList.contains("menu-open")) {
          bodyScrollLock.disableBodyScroll(body);
        } else {
          bodyScrollLock.enableBodyScroll(body);
        }
      });
    }

    const pageServiceWrap = document.querySelector(".menu-type");

    if (pageServiceWrap) {
      const btn = document.querySelectorAll(".dropdown-btn");

      btn.forEach((btnList) => {
        btnList.addEventListener("click", function (e) {
          const menu = e.target.parentNode.parentNode.querySelector(".content-wrap");
          const dim = e.target.parentNode.parentNode.querySelector(".dim");

          menu.classList.add("active");
          if (menu.classList.contains("active")) {
            bodyScrollLock.disableBodyScroll(body);
          } else {
            bodyScrollLock.enableBodyScroll(body);
          }
          dim.addEventListener("click", function () {
            menu.classList.remove("active");
          });
        });
      });
    }
  },
  fileInput: () => {
    const body = document.querySelector("main");

    function readMultipleImg(input) {
      const fileWrap = document.querySelector(".input-file-item");
      if (input.files) {
        // 유사배열을 배열로 변환 (forEach문으로 처리하기 위해)
        const fileArr = Array.from(input.files);
        const $colDiv1 = document.createElement("div");
        $colDiv1.classList.add("file-add-img");
        fileArr.forEach((file) => {
          const reader = new FileReader();
          const $imgDiv = document.createElement("img");
          const $delBtn = document.createElement("span");
          $delBtn.classList.add("del-btn");
          reader.onload = (e) => {
            $imgDiv.src = e.target.result;
          };
          $colDiv1.appendChild($delBtn);
          $colDiv1.appendChild($imgDiv);

          reader.readAsDataURL(file);
        });
        fileWrap.appendChild($colDiv1);
      }
    }
    const inputImg = document.getElementById("photo");
    if (inputImg) {
      inputImg.addEventListener("change", (e) => {
        readMultipleImg(e.target);
        const delBtn = document.querySelectorAll(".del-btn");
        console.log(inputImg.value);
        delBtn.forEach((delItem) => {
          delItem.addEventListener("click", (e) => {
            e.target.offsetParent.remove();
          });
        });
      });
    }

    // 문의유형 선택
    const qaSelectBtn = document.querySelector(".question-category");
    const qaSelectCnt = document.querySelector(".input-select-wrap");
    if (qaSelectBtn) {
      qaSelectBtn.addEventListener("click", () => {
        qaSelectCnt.classList.add("active");
        bodyScrollLock.disableBodyScroll(body);
      });

      const qaSelectMenu = document.querySelectorAll(".select-menu");
      qaSelectMenu.forEach((menu) => {
        menu.addEventListener("click", (item) => {
          qaSelectBtn.innerText = item.target.innerText;
          qaSelectCnt.classList.remove("active");
          bodyScrollLock.enableBodyScroll(body);
        });
      });
    }

    // 내용 확인 팝업
    const agreeBtn = document.querySelector(".agree-btn");
    const agreeNextBtn = document.querySelector(".agree-next");
    if (agreeBtn) {
      agreeBtn.addEventListener("change", function (e) {
        console.log();
        if (e.target.checked) {
          agreeNextBtn.removeAttribute("disabled");
        } else {
          agreeNextBtn.setAttribute("disabled", "true");
        }
      });
    }
  },
  infoPopup: () => {
    const page = document.querySelector(".gift-info-wrap");
    const infoBtn = document.querySelector(".ico-info");
    if (page) {
      infoBtn.addEventListener("click", () => {
        const infoDesc = document.querySelector(".info-desc");
        infoDesc.classList.toggle("active");
      });
    }

    const counselingBtn = document.querySelector(".category-btn");
    const counselingMenu = document.querySelector(".menu-wrap");
    const dim = document.querySelector(".select-category-wrap .dim");
    const body = document.querySelector("body");
    if (counselingBtn) {
      counselingBtn.addEventListener("click", function () {
        counselingBtn.classList.toggle("active");
        counselingMenu.classList.toggle("active");
        dim.classList.toggle("active");
        if (counselingBtn.classList.contains("active")) {
          bodyScrollLock.disableBodyScroll(body);
        } else {
          bodyScrollLock.enableBodyScroll(body);
        }
      });
    }
  },
  init: () => {
    app.tab(); // tab
    app.swiper(); // swiper
    app.accordion(); // accordion
    app.dropdownMenu(); // 거래가이드 드롭다운 메뉴
    app.fileInput(); // 고객서비스 input
    app.infoPopup(); // 유의사항 팝업
  },
};

app.init();
