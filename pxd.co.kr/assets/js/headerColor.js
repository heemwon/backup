export function headerpoint(headerType) {
  const head = document.querySelector('header')
  if (headerType || headerType === 'black') {
    head.classList.add('black')
  } else {
    head.classList.contains('black') && head.classList.remove('black')
  }
}
