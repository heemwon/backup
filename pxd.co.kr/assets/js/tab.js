export function filterEvent(event) {
  // 대체 텍스트
  const span = document.createElement('span')
  const text = document.createTextNode('선택됨')
  span.appendChild(text)
  span.classList.add('blind')

  // 탭 리스트
  const tabList = document.querySelectorAll('.tab-list-item')

  tabList.forEach((list) => {
    list.setAttribute('tabindex', '-1')
    list.classList.remove('active')
  })

  // content
  const all = document.querySelectorAll('[data-group]')

  // pc
  if (window.innerWidth > 768) {
    tabList.forEach((list) => {
      if (list.querySelector('.blind')) {
        list.querySelector('.blind').remove()
      }
    })
    const pcListTarget = document.querySelector(
      '[data-value="' + event.target.getAttribute(['data-value']) + '"]',
    )
    pcListTarget.appendChild(span)
    pcListTarget.setAttribute('tabindex', '0')
    pcListTarget.classList.add('active')

    // content
    const val = event.target.dataset.value

    all.forEach((content) => {
      const arr = content.dataset.group.split(' ')
      for (const a of arr) {
        if (a === val) {
          content.classList.add('active')
          break
        } else {
          content.classList.remove('active')
        }
      }
    })
  } else {
    // mobile
    tabList.forEach((list) => {
      list.removeAttribute('selected')
    })
    const moListTarget = event.target[event.target.options.selectedIndex]
    moListTarget.setAttribute('tabindex', '0')
    moListTarget.classList.add('active')

    // content
    const val = event.target[event.target.options.selectedIndex].getAttribute([
      'data-value',
    ])

    all.forEach((content) => {
      const arr = content.dataset.group.split(' ')
      for (const a of arr) {
        if (a === val) {
          content.classList.add('active')
          break
        } else {
          content.classList.remove('active')
        }
      }
    })
  }
}
export function focusMoveList() {
  const target = document.querySelectorAll('.tab-list-wrap button')
  target.forEach((e) => {
    e.setAttribute('tabindex', '0')
  })
}
export function selectWidth(optionValue) {
  if (window.innerWidth < 769) {
    const selectWrap = document.querySelector('.select')
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let textWidth = 0

    for (let i = 0; i < optionValue.length; i++) {
      if (optionValue.length > 20) {
        if (
          chars.includes(optionValue.charAt(i)) === -1 ||
          optionValue.charAt(i) === 'm'
        ) {
          textWidth += 17
        } else if (
          optionValue.charAt(i) === 'i' ||
          optionValue.charAt(i) === 'l' ||
          optionValue.charAt(i) === ' '
        ) {
          textWidth += 5
        } else {
          textWidth += 7
        }
      } else if (optionValue.length <= 20 && optionValue.length > 13) {
        if (
          chars.includes(optionValue.charAt(i)) === -1 ||
          optionValue.charAt(i) === 'm'
        ) {
          textWidth += 17
        } else if (
          optionValue.charAt(i) === 'i' ||
          optionValue.charAt(i) === 'l' ||
          optionValue.charAt(i) === ' ' ||
          optionValue.charAt(i) === '/'
        ) {
          textWidth += 5
        } else {
          textWidth += 9
        }
      } else if (
        chars.includes(optionValue.charAt(i)) === -1 ||
        optionValue.charAt(i) === 'm'
      ) {
        textWidth += 17
      } else if (
        optionValue.charAt(i) === 'i' ||
        optionValue.charAt(i) === 'l' ||
        optionValue.charAt(i) === ' '
      ) {
        textWidth += 5
      } else {
        textWidth += 11
      }
      if (chars.includes(optionValue.charAt(i)) === -1 || optionValue.charAt(i) === 'm') {
        textWidth += 19
      } else if (
        optionValue.charAt(i) === 'i' ||
        optionValue.charAt(i) === 'l' ||
        optionValue.charAt(i) === ' ' ||
        optionValue.charAt(i) === '/'
      ) {
        textWidth += 5
      } else {
        textWidth += 12
      }
      selectWrap.style.width = textWidth + 15 + 'px'
      selectWrap.style.minWidth = textWidth + 15 + 'px'
    }
  }
}
