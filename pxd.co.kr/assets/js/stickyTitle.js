export function stikyTitle() {
  /** Sticky 타이틀 **/
  const fixedTitle = document.querySelectorAll('[data-action="fixed-title"]')
  const fixedMore = document.querySelectorAll('[data-action="fixed-more"]')
  const headerWrap = document.querySelector('header')
  const headerWrapHeight = headerWrap.offsetHeight
  let currentSpace = []

  window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset
    sticky.fixedAction(scrollPosition)
  })

  const sticky = {
    init: (remainHeight) => {
      let initHeight = 0

      // remainHeight true시 첫번째 객체의 높이값을 변수에 저장
      if (remainHeight) {
        initHeight = currentSpace[0]
      }
      currentSpace = []
      for (let i = 0; i < fixedTitle.length; i++) {
        const fixedTitleHeight = fixedTitle[i].offsetHeight
        // let titleYOffset = Math.ceil(i === 0 ? window.pageYOffset + fixedTitle[i].nextElementSibling.getBoundingClientRect().top : window.pageYOffset + fixedTitle[i].nextElementSibling.getBoundingClientRect().top - (fixedTitleHeight/3)); // 타이틀 Y 위치
        // let titleYOffset = Math.ceil(i === 0 ? window.pageYOffset + fixedTitle[i].getBoundingClientRect().top : window.pageYOffset + fixedTitle[i].getBoundingClientRect().top - (fixedTitleHeight/3)); // 타이틀 Y 위치
        let titleYOffset

        // 타이틀 Y축 위치
        if (fixedTitle[i].nextElementSibling) {
          titleYOffset = Math.ceil(
            i === 0
              ? window.pageYOffset +
                  fixedTitle[i].nextElementSibling.getBoundingClientRect().top
              : window.pageYOffset +
                  fixedTitle[i].nextElementSibling.getBoundingClientRect().top -
                  fixedTitleHeight / 3,
          )
        } else {
          titleYOffset = Math.ceil(
            window.pageYOffset + fixedTitle[i].getBoundingClientRect().top,
          )
        }

        if (remainHeight && i === 0) currentSpace.push(initHeight)
        // 첫번째 위치를 기억할 때만 동작
        else currentSpace.push(titleYOffset)
      }
      for (let i = 0; i < fixedMore.length; i++) {
        const fixedMoreHeight = fixedMore[i].offsetHeight
        // let titleYOffset = Math.ceil(i === 0 ? window.pageYOffset + fixedMore[i].nextElementSibling.getBoundingClientRect().top : window.pageYOffset + fixedMore[i].nextElementSibling.getBoundingClientRect().top - (fixedMoreHeight/3)); // 타이틀 Y 위치
        // let titleYOffset = Math.ceil(i === 0 ? window.pageYOffset + fixedMore[i].getBoundingClientRect().top : window.pageYOffset + fixedMore[i].getBoundingClientRect().top - (fixedMoreHeight/3)); // 타이틀 Y 위치
        let moreYOffset

        // 타이틀 Y축 위치
        if (fixedMore[i].previousElementSibling) {
          moreYOffset = Math.ceil(
            i === 0
              ? window.pageYOffset +
                  fixedMore[i].previousElementSibling.getBoundingClientRect().top
              : window.pageYOffset +
                  fixedMore[i].previousElementSibling.getBoundingClientRect().top -
                  fixedMoreHeight / 3,
          )
        } else {
          moreYOffset = Math.ceil(
            window.pageYOffset + fixedMore[i].getBoundingClientRect().top,
          )
        }

        if (remainHeight && i === 0) currentSpace.push(initHeight)
        // 첫번째 위치를 기억할 때만 동작
        else currentSpace.push(moreYOffset)
      }
    },
    fixedAction: (scrollPosition) => {
      for (let i = 0; i < fixedTitle.length; i++) {
        fixedTitle[i].classList.remove('current')
        if (
          scrollPosition > currentSpace[i] - headerWrapHeight &&
          scrollPosition < currentSpace[i + 1] - headerWrapHeight
        ) {
          fixedTitle[i].classList.add('current')
        } else if (
          currentSpace[fixedTitle.length - 1] - headerWrapHeight <
          scrollPosition
        ) {
          // 마지막 컨텐츠 판단
          fixedTitle[fixedTitle.length - 1].classList.remove('current')
        }
      }
      for (let i = 0; i < fixedMore.length; i++) {
        fixedMore[i].classList.remove('current')
        if (
          scrollPosition > currentSpace[i] - headerWrapHeight &&
          scrollPosition < currentSpace[i + 1] - headerWrapHeight
        ) {
          fixedMore[i].classList.add('current')
        } else if (
          currentSpace[fixedMore.length - 1] - headerWrapHeight <
          scrollPosition
        ) {
          // 마지막 컨텐츠 판단
          fixedMore[fixedMore.length - 1].classList.remove('current')
        }
      }
    },
  }
  sticky.init(false)
}
