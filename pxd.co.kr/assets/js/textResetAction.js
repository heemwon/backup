export function textResetAction(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].removeAttribute('style')
  }
}
