export function languageAction() {
  const buttonElements = document.querySelectorAll('.wrap-language a')
  for (let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', () => {
      const _this = this
      for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].classList.remove('active')
      }

      _this.classList.add('active')
    })
  }
}
