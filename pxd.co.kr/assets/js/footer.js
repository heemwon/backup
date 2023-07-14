export function scrollTopAction() {
  let process
  let delay = 0
  const scrollPixel = 200

  function getPapeYOfSet() {
    const yOffSet =
      typeof window.pageYOffset === 'number'
        ? window.pageYOffset
        : document.documentElement.scrollTop
    return yOffSet
  }

  // eslint-disable-next-line prefer-const
  process = setInterval(function () {
    // eslint-disable-next-line no-undef
    const yOffSet = getPapeYOfSet()
    // eslint-disable-next-line no-undef
    if (yOffSet === 0) {
      clearInterval(process)
    } else {
      window.scrollBy(0, -scrollPixel)
    }
  }, delay)

  // top으로 이동시 focus 이동
  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 9) {
      delay++
      if (delay === 1) {
        document.querySelector('#skipNav > a').focus()
      }
    }
  })
}
