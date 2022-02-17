// validation
// opt.focusable
//  > true: validation false시 가장 첫번째로 focus 이동
// opt.success, opt.error
//  > validation결과 listener
// opt.errorMessages
const validateForm = ($form, opt = {}) => {
  const messages = {
    required: $.i18n.t('error.error_34'),
    minLength: $.i18n.t('error.error_35'),
    maxLength: $.i18n.t('error.error_40'),
    email: $.i18n.t('error.error_36'),
    tel: $.i18n.t('error.error_37'),
    number: $.i18n.t('error.error_42'),
    min: $.i18n.t('error.error_43'),
    max: $.i18n.t('error.error_44'),
    default: $.i18n.t('error.error_41'),
    ...opt.defaultMessages
  };

  // form이 한번 이라도 submit을 진행했는지...
  const { submitted } = $form;

  // validateTag
  // type: input, textarea, checkbox
  const validateTag = $tag => {
    const errors = [];
    if (!$tag) {
      return [ 'null' ];
    }
    let { id, type, value } = $tag;
    let errorMessage = {};
    if (opt && opt.errorMessages) {
      errorMessage = opt.errorMessages[id] ? opt.errorMessages[id] : {};
    }

    if (type === 'checkbox') {
      value = $tag.checked;
    }

    if (value && $tag.type === 'number') {
      // 소수점도 불가
      if (isNaN(value) || value.indexOf('.') >= 0) {
        errors.push((errorMessage.number && errorMessage.number.format(value)) || messages.number);
      }
      if ($tag.min && Number(value) < Number($tag.min)) {
        errors.push((errorMessage.min && errorMessage.min.format(value)) || messages.min.format(Number($tag.min).toLocaleString()));
      }
      if ($tag.max && Number(value) > Number($tag.max)) {
        errors.push((errorMessage.max && errorMessage.max.format(max)) || messages.max.format(Number($tag.max).toLocaleString()));
      }
    }
    if ($tag.type === 'email') {
      if (
        !/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
          value,
        )
      ) {
        errors.push((errorMessage.email && errorMessage.email.format(value)) || messages.email);
      }
    }
    if ($tag.type === 'tel') {
      if (
        !/^(0)?([1-9]{1})([0-9]{1})?-([0-9]{3}|[0-9]{4})-[0-9]{4}$/.test(value)
        && !/^(0)?([1-9]{1})([0-9]{1})?([0-9]{3}|[0-9]{4})[0-9]{4}$/.test(value)
      ) {
        errors.push((errorMessage.tel && errorMessage.tel.format(value)) || messages.tel);
      }
    }
    if ($tag.required) {
      if (!value || (value && typeof value === 'string' && value.trim().length < 1)) {
        errors.push((errorMessage.required && errorMessage.required.format(value)) || messages.required);
      }
    }
    if (value.length > 0 && ($tag.minLength >= 0 || $tag.maxLength >= 0)) {
      if (value.length < $tag.minLength) {
        errors.push(
          (errorMessage.minLength && errorMessage.minLength.format(value)) || messages.minLength.format($tag.minLength),
        );
      } else if (value.length > $tag.maxLength) {
        errors.push(
          (errorMessage.maxLength && errorMessage.maxLength.format(value)) || messages.maxLength.format($tag.maxLength),
        );
      }
    }
    if ($tag.regex) {
      if (!$tag.regex.test(value)) {
        errors.push((errorMessage.regex && errorMessage.regex.format(value)) || messages.default);
      }
    }
    if ($tag.custom && $tag.custom instanceof Function) {
      if (!$tag.custom(value)) {
        errors.push((errorMessage.custom && errorMessage.custom.format(value)) || message.default);
      }
    }

    // form submit 전에는 ui에 영향을 주지 않도록...
    if (submitted || $tag.updated) {
      if (errors.length < 1) {
        $tag.parentElement.classList.remove('status-fail');
        if (type === 'checkbox') {
          //$tag.parentElement.querySelector('.check').style = '';
        }
      } else {
        // errorlist의 가장 마지막에 error가 발생한 tag를 추가
        errors.push($tag);
        // fail 일때, input box 상위의 div.input-box1에 .status-fail 추가
        $tag.parentElement.classList.add('status-fail');
        if (type === 'checkbox') {
          //$tag.parentElement.querySelector('.check').style = 'border: 2px red solid;';
        } else {
          if ($tag.parentElement) {
            const $failTxt = $tag.parentElement.querySelector('.fail-txt');
            if ($failTxt) {
              $failTxt.innerHTML = errors[0];
            }
          }
        }
      }
    }

    return errors;
  };
  // end function

  let validate = true;
  let focus = false;
  let allErrors = {};

  $form.querySelectorAll('input, textarea').forEach($tag => {
    const errors = validateTag($tag);
    validate = errors.length < 1 && validate;
    allErrors[$tag.id || $tag.name] = errors;
    // 처음 invalid input으로 focus이동
    if (opt && opt.focusable && !validate && !focus) {
      // invalidate
      focus = true;
      $tag.focus();
    }
    $tag.onblur = e => {
      if ($tag.type === 'text') {
        $tag.value = e.target.value.trim();
      }
    };
  });

  if (validate) {
    opt && opt.success && opt.success($form);
  } else {
    opt && opt.error && opt.error($form, allErrors);
  }
  return validate;
};

// bindValidation
// $form, validation
const bindValidation = ($form, opt = {}) => {
  if (!$form) {
    return;
  }

  const { validation, errorMessages, success, error, focusable, defaultMessages } = opt;

  $form.querySelectorAll('input, textarea').forEach($tag => {
    // focus out 시에 validation 체크
    $tag.addEventListener('focusout', (e) => {
      $tag.updated = true;
      validateForm($form, { errorMessages, error, defaultMessages });
    });

    if (validation) {
      const obj = validation[$tag.id || $tag.name];
      if (obj) {
        $tag.parentElement.classList.remove('status-fail');
        if (obj && $tag) {
          if (obj.required) {
            $tag.required = obj.required;
          }
          if (obj.minLength) {
            $tag.minLength = obj.minLength;
          }
          if (obj.maxLength) {
            $tag.maxLength = obj.maxLength;
          }
          if (obj.type) {
            $tag.type = obj.type;
          }
          if (obj.regex) {
            $tag.regex = obj.regex;
          }
          if (obj.custom) {
            $tag.custom = obj.custom;
          }
        }
      }
    }
  });

  $form.onsubmit = e => {
    // validation
    $form.submitted = true;
    validateForm($form, { errorMessages, success, error, focusable, defaultMessages });
    return false;
  };
};