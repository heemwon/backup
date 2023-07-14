const agent = window.navigator.userAgent.toLowerCase()
const appName = window.navigator.appName.toLowerCase()
const msg =
  '우리 사이트는 Microsoft Edge, Chrome에 최적화 되어있습니다. 확인 버튼을 누르시면 Microsoft Edge로 이동됩니다.'
if (
  (appName === 'netscape' && agent.indexOf('trident') !== -1) ||
  agent.indexOf('msie') !== -1
) {
  if (confirm(msg)) {
    window.location = 'microsoft-edge:' + window.location.href
  }
}
