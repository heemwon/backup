var agent = navigator.userAgent.toLowerCase();

if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || agent.indexOf('msie') != -1) {
  if (document.querySelector('base')){
    window.location.href = document.querySelector('base').href +'common/browserError.html';
  }
  // 브라우저 에러
  function copy_to_clipboard(str) {
    window.clipboardData.setData("Text", str);
  }
  document.querySelector('.copy-btn').addEventListener('click', function(){
    document.querySelector('.copy-success').classList.add('active');
    setTimeout(function(){
        document.querySelector('.copy-success').classList.remove('active');
    },1000)
  });
}

// language pre check
// 다른 script보다 가장 먼저 수행되기 위해 ie check logic 바로 다음에 추가
(function() {
  const paramLocale = new URL(location).searchParams.get('locale');
  if (paramLocale && paramLocale.length >= 2) {
    const language = (window.localStorage.getItem('language') || navigator.language || navigator.userLanguage).substring(0, 2);
    const paramLang = paramLocale.substring(0, 2);
    if (/ko|en/i.test(paramLang) && paramLang !== language) {
      window.localStorage.setItem('language', paramLocale);
      location.replace(location.pathname)
    }
  }
})();