// constants
const supportQuestion = {
  lang: /^(ko|en)$/,
  formId: 'contactForm',
  apiUrl: window.location.origin + '/uib/v1/support/question',
  method: 'POST',
  successPage: 'support/question/success.html',
  errorPage: 'support/question/fail.html',
};

// init
(() => {
  const validation = {
    contactTitle: { required: true, minLength: 3, maxLength: 200 },
    contactCont: { required: true, maxLength: 2000 },
    contactName: { required: true, maxLength: 50, regex: /^[a-zA-Z0-9ㄱ-ㅣ가-힣-_~\s]*$/i },
    contactCompany: { required: true, maxLength: 50, regex: /^[a-zA-Z0-9ㄱ-ㅣ가-힣-_~\s]*$/i },
    contactEmail: { required: true, email: true, minLength: 3, maxLength: 64, type: 'email' },
    contactPhone: { required: true, tel: true, minLength: 3, maxLength: 13, type: 'tel' },
    checkbox1: { required: true },
    checkbox2: { required: true },
    checkbox3: { required: true },
  };
  const errorMessages = {
    contactName: { regex: $.i18n.t('error.error_39') },
  };

  // 기존 article을 form으로 wrapping
  const $article = document.querySelector('article.content');
  const $form = document.createElement('form');
  $article.parentNode.replaceChild($form, $article);
  $form.appendChild($article);
  $form.id = supportQuestion.formId;
  $form.noValidate = true;
  $form.classList = $article.classList;
  $article.classList = [];
  // type이 없는 button들을, type="button"으로 셋팅
  const buttonList = $form.querySelectorAll('button');
  if (buttonList) {
    buttonList.forEach((v) => v.type = 'button');
  }

  // custom
  /* 유형 값 */
  $form.querySelector('[role=tablist]').id = 'contactType';
  // querystring으로 contactType이 넘어온 경우, init
  const params = new URLSearchParams(window.location.search);
  if (params.get('contactType')) {
    $form.querySelector('[role=tablist]').children[params.get('contactType')].click();
  }
  /* 제목 */
  $form.querySelector('#contactTitle').placeholder = $.i18n.t('message.message_1040', validation.contactTitle.maxLength);
  /* 내용 */
  $form.querySelector('.hint-txt').innerHTML = $.i18n.t('label.label_489', validation.contactCont.maxLength);
  // 기존 text counting은 제거
//  const $hintTxt = $form.querySelector('.hint-txt');
//  const $spanCnt = document.createElement('span');
//  $spanCnt.innerHTML = '0';
//  $spanCnt.classList = ['cnt'];
//  // replace child
//  $hintTxt.replaceChild($spanCnt, $hintTxt.childNodes[0]);
//  $hintTxt.replaceChild(document.createTextNode('/2000'), $hintTxt.childNodes[1]);
//  // addEventListener to textarea
//  $form.querySelector('#contactCont').addEventListener('input', e => {
//    $spanCnt.innerText = e?.target?.value?.length;
//  });
  /* 이름 */
  $form.querySelector('#contactName').placeholder = $.i18n.t('message.message_1042', validation.contactName.maxLength);

  bindValidation($form, {
    validation,
    errorMessages,
    focusable: true,
    success: ($form) => {
      // modal만 올리고, server로 request는 하지 않음
      document.querySelector('[data-popup=confirmPopup]').click();
    },
    error: ($form, allErrors) => {
      // 약관은 1, 2, 3만 체크
      if (allErrors &&
        (
          (allErrors.checkbox1 && allErrors.checkbox1.length > 0)
          || (allErrors.checkbox2 && allErrors.checkbox2.length > 0)
          || (allErrors.checkbox3 && allErrors.checkbox3.length > 0)
        )
      ) {
        $form.querySelector('.checked-wrap.font-body4').classList.add('active');
      } else {
        $form.querySelector('.checked-wrap.font-body4').classList.remove('active');
      }
    }
  });

  const redrawButton = () => {
    // 기존 버튼을 숨기고, submit버튼으로 대체
    const $requestButton = document.querySelector('button[data-popup=confirmPopup');
    const $buttonContainer = $requestButton.parentNode;
    $requestButton.style.display = 'none';
    const $submitButton = document.createElement('button');
    $submitButton.type = 'submit';
    $submitButton.innerHTML = $.i18n.t('button.button_5');
    $submitButton.classList.add('btn-solid');
    $submitButton.classList.add('large');
    $buttonContainer.prepend($submitButton);

    // dialog내의 '네' 버튼 클릭
    $buttonContainer
      .querySelector('section[data-popup=confirmPopup] .btn-solid')
      .addEventListener('click', () => {
        // language
        const lang = (
          window.localStorage.getItem('language') ||
          navigator.language ||
          navigator.userLanguage
        ).substring(0, 2)
        // 문의요청
        const body = {
          type: $form.querySelector('#contactType .active').value,
          subject: $form.querySelector('#contactTitle').value,
          content: $form.querySelector('#contactCont').value,
          name: $form.querySelector('#contactName').value,
          email: $form.querySelector('#contactEmail').value,
          phone:
            $form.querySelector('[name=selectEx5]').value +
            ' ' +
            $form.querySelector('#contactPhone').value,
          company: $form.querySelector('#contactCompany').value,
          agree1: $form.querySelector('#checkbox1').checked,
          agree2: $form.querySelector('#checkbox2').checked,
          agree3: $form.querySelector('#checkbox3').checked,
          agree4: $form.querySelector('#checkbox4').checked,
          agree5: $form.querySelector('#checkbox5').checked,
          lang: (supportQuestion.lang.test(lang) ? lang : 'ko')
        };

        let httpRequest;
        if (window.XMLHttpRequest) {
          httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
        }
        if (!httpRequest) {
          alert('XMLHttpRequest not supported');
          return;
        }
        httpRequest.onreadystatechange = r => {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              console.log('complete');
              location.href = supportQuestion.successPage;
            } else {
              console.log(
                '에러발생: ' + (httpRequest.status === 0 ? 'unknown' : httpRequest.status),
              );
              location.href = supportQuestion.errorPage;
            }
          }
        };
        httpRequest.open(supportQuestion.method, supportQuestion.apiUrl, true);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(JSON.stringify(body));
      });
  };
  redrawButton();
})();