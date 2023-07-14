import { titleAction, textResetAction } from './textAction'

export function headerScrollAction(scrollPosition, lastScrollPosition, viewAction) {
  const headerWrap = document.querySelector('header')
  // scrollPosition : 현재 스크롤 값, lastScrollPosition : 이전 스크롤 값
  const DELTA = 10 // 스크롤 시 변경 가능 수치
  const headerHeight = headerWrap.offsetHeight
  const headerBgTransparent = headerWrap.getAttribute('data-header')

  if (scrollPosition === 0) {
    scrollPosition += DELTA
  }
  // Load
  if (viewAction === 'load') {
    if (scrollPosition > headerHeight && headerWrap.classList.contains('transparent')) {
      headerWrap.classList.remove('transparent')
    }
  }
  // 이전 스크롤 값과 현재 스크롤 값이 10 이상 차이날 경우만 실행
  if (Math.abs(lastScrollPosition - scrollPosition) < DELTA) return
  // Scroll
  if (scrollPosition > lastScrollPosition && lastScrollPosition > headerHeight) {
    headerWrap.classList.add('hidden')
    if (headerWrap.classList.contains('transparent')) {
      headerWrap.classList.remove('transparent')
    }
  } else {
    headerWrap.classList.remove('hidden')
    if (lastScrollPosition < headerHeight && headerBgTransparent === 'bg-transparent') {
      headerWrap.classList.add('transparent')
    }
  }
}

// inner header open
export function menuAction() {
  const headerWrap = document.querySelector('header')
  const bodyElement = document.querySelector('body')
  const wrapNav = document.querySelector('.wrap-nav')
  const innerNav = document.querySelector('.inner-nav')
  const gnbTitle = document.querySelector('.gnb-title')
  const conditionOpen = !headerWrap.classList.contains('active')
  const navbtn = document.querySelector('.btn-menu')
  const menuElements = document.querySelectorAll(
    ".wrap-nav [data-action='action-title-y']",
  )
  const footerElements = document.querySelectorAll(
    ".wrap-nav [data-action='action-title-x']",
  )

  if (conditionOpen) {
    headerWrap.classList.add('active')
    wrapNav.addEventListener('transitionend', function () {
      innerNav.style.overflowY = 'auto'
      gnbTitle.focus()
      // bodyElement.classList.add('hidden')
    })
    titleAction('y', menuElements, 0.5, {
      default: 0.35,
      repeat: 0.1,
    })
    titleAction('x', footerElements, 0.5, {
      default: 1,
      repeat: 0.2,
    })
    navbtn.setAttribute('aria-expanded', 'true')
  }
}

// inner header close
export function popClosedAction() {
  const wrapNav = document.querySelector('.wrap-nav')
  const innerNav = document.querySelector('.inner-nav')
  const headerWrap = document.querySelector('header')
  const bodyElement = document.querySelector('body')
  const navbtn = document.querySelector('.btn-menu')
  const menuElements = document.querySelectorAll(
    ".wrap-nav [data-action='action-title-y']",
  )
  const footerElements = document.querySelectorAll(
    ".wrap-nav [data-action='action-title-x']",
  )
  const conditionOpen = headerWrap.classList.contains('active')
  const scrollPrev = 0
  if (conditionOpen) {
    headerWrap.classList.remove('active')
    wrapNav.addEventListener('transitionend', function () {
      innerNav.style.overflowY = 'hidden'
      bodyElement.classList.remove('hidden')
    })
    bodyElement.scrollTop = scrollPrev
    menuElements !== null && textResetAction(menuElements)
    footerElements !== null && textResetAction(footerElements)
    navbtn.setAttribute('aria-expanded', 'false')
  }
  setTimeout(() => {
    bodyElement.classList.remove('hidden')
  }, 1000)
}

// 본문바로가기 헤더클래스 hidden 주기
export function headerhidden() {
  const header = document.querySelector('header')
  setTimeout(() => {
    header.classList.add('hidden')
  }, 100)
}
