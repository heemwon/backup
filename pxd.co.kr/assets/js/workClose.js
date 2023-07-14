export function workClose() {
  /** *  Work 목록 중 암호 글  ***/
  const confirmOk = document.querySelector('.pop')
  let adminPopUrl

  // 비밀번호 암호화
  const strToSha256 = function (_pwd) {
    const sha256 = require('crypto-js/sha256')
    const CryptoJS = require('crypto-js')
    const comparePwd = '353a8e9765c88e13c4e42924307589d862b331c13e961afc19f49ea973860918'
    const errMsg = document.querySelector('.error-msg')
    const inputPw = document.querySelectorAll('.input')
    const hashText = CryptoJS.SHA256(_pwd)

    if (comparePwd === hashText) {
      errMsg.style.display = 'none'
      popClosedAction()
      window.location.href = adminPopUrl
    } else {
      for (let i = 0; i < inputPw.length; i++) {
        inputPw[i].classList.add('error')
      }
      errMsg.style.display = 'block'
      document.getElementById('inputWorkPw').value = ''
    }
  }

  // Work 보호글 이벤트

  // 팝업 오픈
  function popOpenAction(_url) {
    document.querySelector('body').classList.add('hidden')
    document.querySelector('.wrap-pop').classList.add('active')
    if (document.getElementById('inputWorkPw')) {
      document.getElementById('inputWorkPw').value = ''
      document.getElementById('inputWorkPw').focus()
    }
    adminPopUrl = _url
    if (document.querySelector('.input')) {
      document.querySelector('.input').classList.remove('error')
      document.querySelector('.error-msg').style.display = 'none'
    }
  }
  // 팝업 닫기
  function popClosedAction() {
    const popWrap = document.querySelector('.wrap-pop')
    const bodyElement = document.querySelector('body')
    const headerWrap = document.querySelector('header')

    bodyElement.classList.remove('hidden')
    popWrap.classList.remove('active')
    headerWrap.classList.remove('active')
    callPopupFocus.focus();
  }

  // 비밀번호 팝업 호출
  const listClosedWork = document.querySelectorAll(
    'li[data-closed="work-closed"], [data-closed="work-closed"]',
  )

  for (let i = 0; i < listClosedWork.length; i++) {
    listClosedWork[i].addEventListener('click', function () {
      for (let j = 0; j < listClosedWork.length; j++) {
        const _this = this
        if (listClosedWork[j] === _this) {
          const popUrl = listClosedWork[j].getAttribute('redirect-url')
          callPopupFocus = listClosedWork[j];
          console.log(callPopupFocus)
          popOpenAction(popUrl)
        }
      }
    })
  }

  // 비밀번호 확인
  if (confirmOk) {
    confirmOk.addEventListener('click', function () {
      const pwd = document.getElementById('inputWorkPw').value
      if (pwd === '') {
        return
      }
      strToSha256(pwd)
    })
  }
}
