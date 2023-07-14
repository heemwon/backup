export function accordion() {
  const accordionGroups = document.querySelectorAll('[data-role="accordion-group"]')
  if (accordionGroups) {
    const accordionEvt = (e) => {
      let currentTarget = e.target.tagName
      currentTarget === 'BUTTON'
        ? (currentTarget = e.target)
        : (currentTarget = e.target.closest('button'))
      const accordionOption = currentTarget
        .closest('[accordion-option]')
        .getAttribute('accordion-option')
      const accordionWrapper = currentTarget.closest('[data-role="accordion-group"]')
      const targetContents = accordionWrapper.querySelector(
        `[aria-labelledby="${currentTarget.id}"]`,
      )
      // toggle type (default)
      if (currentTarget.ariaExpanded === 'true') {
        currentTarget.setAttribute('aria-expanded', 'false')
        targetContents.style.display = 'none'
        targetContents.removeEventListener('transitionstart', accordionTransitionEvt)
        targetContents.addEventListener('transitionend', accordionTransitionEvt)
      } else {
        // 연결 된 accordion은 무조건 하나씩 만 열리는 type
        if (accordionOption === 'only') {
          const accordionBtns = accordionWrapper.querySelectorAll('.accordion-btn')
          // 기존에 선택 된 accordion 속성 false 로 변경
          accordionBtns.forEach((accordionBtn) => {
            accordionBtn.setAttribute('aria-expanded', 'false')
            if (accordionBtn.nextElementSibling !== null) {
              accordionBtn.nextElementSibling.style.display = 'none'
              accordionBtn.nextElementSibling.removeEventListener(
                'transitionstart',
                accordionTransitionEvt,
              )
              accordionBtn.nextElementSibling.addEventListener(
                'transitionend',
                accordionTransitionEvt,
              )
            }
          })
        }
        // 선택 된 accordion 속성 true 상태로 변경
        currentTarget.setAttribute('aria-expanded', 'true')
        targetContents.removeAttribute('hidden')
        targetContents.style.display = 'block'
      }
    }
    // height size transition event 후 hidden 속성 추가
    const accordionTransitionEvt = () => {
      const accordionContentsAll = document.querySelectorAll('.wrap-accordion-contents')
      accordionContentsAll.forEach((contents) => {
        if (contents.previousElementSibling.ariaExpanded === 'false')
          contents.setAttribute('hidden', 'true')
        else contents.removeAttribute('hidden')
      })
    }
    // 초기 셋팅 및 클릭 이벤트 제거/할당
    accordionGroups.forEach((accordionGroup) => {
      const accordionBtns = accordionGroup.querySelectorAll('.accordion-btn')
      accordionBtns.forEach((accordionBtn) => {
        // 초기 셋팅 : accordion contents height size 에 비례한 transition duration 수정 (height size 188px = 0.3s 기준)
        accordionBtn.nextElementSibling.style.transitionDuration = `${
          accordionBtn.nextElementSibling.scrollHeight * 0.0016
        }s`
        // 초기 셋팅 : button 의 aria-expanded 값이 false 인 accordion contents 에 hidden 값 할당
        if (
          accordionBtn.ariaExpanded === 'false' &&
          accordionBtn.nextElementSibling !== null
        )
          accordionBtn.nextElementSibling.setAttribute('hidden', 'true')
        // 초기 셋팅 : button 의 aria-expanded 값이 true 인 accordion contents 에 height size 할당
        if (
          accordionBtn.ariaExpanded === 'true' &&
          accordionBtn.nextElementSibling !== null
        )
          accordionBtn.nextElementSibling.style.height = `${accordionBtn.nextElementSibling.scrollHeight}px`
        accordionBtn.removeEventListener('click', accordionEvt)
        accordionBtn.addEventListener('click', accordionEvt)
      })
    })
  }
}
