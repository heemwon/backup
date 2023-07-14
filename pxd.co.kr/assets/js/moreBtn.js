export function moreBtnDefalut(cnt) {
  const content = document.querySelectorAll('.tab-item')
  for (let i = cnt; i < content.length; i++) {
    content[i].setAttribute('aria-hidden', 'true')
    content[i].classList.remove('active')
  }
}
export function morBtnEvent(cnt) {
  const moreBtn = document.querySelector('.work .btn-more-big')
  const hiddenContent = document.querySelectorAll('[aria-hidden="true"]')
  const contentAll = document.querySelectorAll('.tab-item')
  let add = 1

  if (hiddenContent.length >= cnt) {
    for (let i = 0; i < cnt; i++) {
      hiddenContent[i].setAttribute('aria-hidden', 'false')
      hiddenContent[i].classList.add('active')
    }
  } else {
    hiddenContent.forEach((content) => {
      content.setAttribute('aria-hidden', 'false')
      content.classList.add('active')
      moreBtn.setAttribute('style', 'display: none')
    })
  }
  window.addEventListener('keydown', function () {
    if (event.keyCode === 9 && !event.shiftKey) {
      moreBtn.onblur = function () {
        contentAll[cnt * add].querySelector('a').focus()
        add++
      }
    } else {
      return false
    }
  })
}
