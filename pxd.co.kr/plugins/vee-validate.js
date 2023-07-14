import { extend } from 'vee-validate'
import { required, alpha, email, max, ext, size, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_}해주세요.',
})
extend('requiredCustom', (value) => {
   return '숫자 형식으로 입력해주세요.'
})

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters',
})

extend('email', {
  ...email,
  message: '이메일 형식을 확인해주세요.',
})

extend('max', {
  ...max,
  message: '4자리 이하로 입력해주세요.',
})
extend('min', {
  ...min,
  message: '4자리 이상으로 입력해주세요.',
})
extend('birth', (value) => {
  if (/[0-9]{4}[./][0-9]{2}[./][0-9]{2}/.test(value)) return true

  if (/\d/.test(value)) return true

  return '숫자 형식으로 입력해주세요.'
})

extend('period', (value) => {
  if (!/(^\d{4}.(0[1-9]|1[0-2])\s~\s\d{4}.(0[1-9]|1[0-2]))$/.test(value)) return '형식(YYYY.MM ~ YYYY.MM)을 확인해주세요'
  if (/\d/.test(value)) return true

  return '숫자 형식으로 입력해주세요.'
})

extend('ext', {
  ...ext,
  message: '파일 확장자를 확인해 주세요.',
})

extend('size', {
  ...size,
  message: '첨부파일의 크기를 확인해 주세요',
})

