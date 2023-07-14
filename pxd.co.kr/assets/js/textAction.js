// title
export function titleAction(type, elements, duration, delay) {
  /*
   * type : 요소 CSS 타입 'x' - translateX, 'y' - translateY
   * elements : 요소
   * duration : 애니메이션 지속 시간
   * delay : delay.default : 최초 지연 시간, delay.repeat : 각 요소마다의 지연 시간
   * */

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].nodeName === 'STRONG' && window.innerWidth < 769) {
      const transitionStyle =
        'transform ' +
        duration +
        's ease-in-out ' +
        (delay.default + delay.repeat * 0) +
        's' +
        ', opacity ' +
        duration +
        's ease-in-out ' +
        (delay.default + delay.repeat * 0) +
        's' +
        ', top ' +
        duration +
        's ease-in-out ' +
        (delay.default + delay.repeat * 0) +
        's'
      elements[i].style.transform = 'translate' + type.toUpperCase() + '(0)'
      elements[i].style.top = 0 + 'px'
      elements[i].style.opacity = 1
      elements[i].style.transition = transitionStyle
      elements[i].style.WebkitTransition = transitionStyle
    } else {
      const transitionStyle =
        'transform ' +
        duration +
        's ease-in-out ' +
        (delay.default + delay.repeat * i) +
        's' +
        ', opacity ' +
        duration +
        's ease-in-out ' +
        (delay.default + delay.repeat * i) +
        's'
      // elements[i].style.display = 'inline-block';
      elements[i].style.transform = 'translate' + type.toUpperCase() + '(0)'
      elements[i].style.opacity = 1
      elements[i].style.transition = transitionStyle
      elements[i].style.WebkitTransition = transitionStyle
    }
  }
}

// text
export function textAction(viewAction, scrollPosition) {
  const documentHeight = window.innerHeight
  // viewAction : load 시 실행, scrollPosition : 현재 스크롤 위치값
  const revealElements = document.querySelectorAll("[data-action='reveal-content']")
  const DELTA = 100 // 스크롤 시 컨텐츠 노출 가능 수치

  for (let i = 0; i < revealElements.length; i++) {
    const revealTop = revealElements[i].offsetTop

    /*
        Load,
        Scroll 이벤트 분기
        */

    // Load
    if (viewAction === 'load') {
      if (
        revealTop < documentHeight &&
        window.getComputedStyle(revealElements[i]).display !== 'none'
      ) {
        revealElements[i].style.transform = 'translateY(0)'
        revealElements[i].style.opacity = 1
        revealElements[i].style.transition =
          'transform 0.5s ease-in-out 0.7s, opacity 0.5s ease-in-out 0.7s'
      }
    }
    // Scroll
    else if (
      revealTop - documentHeight <= scrollPosition - DELTA &&
      window.getComputedStyle(revealElements[i]).display !== 'none'
    ) {
      revealElements[i].style.transform = 'translateY(0)'
      revealElements[i].style.opacity = 1
    }
  }
}

// content
export function contentAction(viewAction, scrollPosition) {
  const documentHeight = window.innerHeight
  // viewAction : load 시 실행, scrollPosition : 현재 스크롤 위치값
  const revealElements = document.querySelectorAll("[data-action='reveal-content']")
  const DELTA = 100 // 스크롤 시 컨텐츠 노출 가능 수치

  for (let i = 0; i < revealElements.length; i++) {
    const revealTop = revealElements[i].offsetTop

    /*
			Load,
			Scroll 이벤트 분기
			*/

    // Load
    if (viewAction === 'load') {
      if (
        revealTop < documentHeight &&
        window.getComputedStyle(revealElements[i]).display !== 'none'
      ) {
        revealElements[i].style.transform = 'translateY(0)'
        revealElements[i].style.opacity = 1
        revealElements[i].style.transition =
          'transform 0.5s ease-in-out 0.7s, opacity 0.5s ease-in-out 0.7s'
      }
    }
    if (viewAction === 'more') {
      revealElements[i].style.transform = 'translateY(0)'
      revealElements[i].style.opacity = 1
      revealElements[i].style.transition =
        'transform 0.3s ease-in-out 0.5s, opacity 0.3s ease-in-out 0.5s'
    }
    // Scroll
    else if (
      revealTop - documentHeight <= scrollPosition - DELTA &&
      window.getComputedStyle(revealElements[i]).display !== 'none'
    ) {
      revealElements[i].style.transform = 'translateY(0)'
      revealElements[i].style.opacity = 1
    }
  }
}

export function textResetAction(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].removeAttribute('style')
  }
}
