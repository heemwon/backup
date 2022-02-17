(() => {
  const calculatorUrl = window.location.origin + '/calculator/';
  const consoleUrl = window.location.origin + '/console';
  const servicePortalUrl = window.location.origin + '/uib/static/service/pages/index.html';

  /* i18n */
  $.i18n.init(
    {
      resStore: resources,
      lng: (window.localStorage.getItem('language') || navigator.language || navigator.userLanguage).substring(0, 2),
      useLocalStorage: false,
      preload: ['ko', 'en'],
    },
    function (t) {
      $('html').i18n();
    },
  );

  const aLinks = document.querySelectorAll('a[href]');
  if (aLinks) {
    aLinks.forEach(v => {
      const href = v.href;
      if (v.href && !(v.href.trim().startsWith('javascript:')) && v.href.indexOf('#') >= 0) {
        // href로 바로 넘기는 경우 hash가 동작하지 않음
        // html -> spring -> html 흐름을 타기 때문에 문제
        // 때문에 href가 아닌 javascript를 통해서 hash이동을 하게 변경
        v.href = 'javascript:;';
        v.onclick = () => {
          if (v.target === '_blank') {
            window.open(href, '_blank');
          } else {
            location.href = href;
          }
        };
      }
    });
  }

  // 요금 계산기 버튼
  const calculatorLinks = document.querySelectorAll('[scp-calculator]');
  if (calculatorLinks) {
    calculatorLinks.forEach(v => {
      if (v.hasAttribute('internal')) {
        v.href = calculatorUrl;
      } else {
        v.href = 'javascript:;';
        v.onclick = () => {
          window.open(calculatorUrl, '_blank', 'width=1450, height=800');
        };
      }
    });
  }

  // console로 이동 버튼
  const consoleLinks = document.querySelectorAll('[scp-console]');
  if (consoleLinks) {
    consoleLinks.forEach(v => {
      if (v.hasAttribute('internal')) {
        v.href = consoleUrl;
      } else {
        v.href = 'javascript:;';
        v.onclick = () => {
          window.open(consoleUrl, '_blank');
        };
      }
    });
  }

  // service portal 메인으로 이동 버튼
  const servicePortalLinks = document.querySelectorAll('[service-portal]');
  if (servicePortalLinks) {
    servicePortalLinks.forEach(v => {
      if (v.hasAttribute('internal')) {
        v.href = servicePortalUrl;
      } else {
        v.href = 'javascript:;';
        v.onclick = () => {
          window.open(servicePortalUrl, '_blank');
        };
      }
    });
  }
})();
