<template>
  <div ref="popupWrap" class="wrap-pop" tabindex="0" @keydown.tab="focusMoveClose">
    <div class="container-pop">
      <div class="area-enter-pw">
        <strong class="title">비밀번호 입력</strong>
        <p class="desc">보호된 글입니다. 비밀번호를 입력해주세요.</p>
        <div class="area-input">
          <span class="input">
            <label for="inputWorkPw" class="blind">비밀번호 입력</label>
            <input
              id="inputWorkPw"
              v-model="password"
              type="password"
              data-input="placeholder"
              aria-errormessage="error-msg"
              aria-invalid="false"
              placeholder="비밀번호 입력"
              @focus="focus = false"
              @blur="password ? (focus = false) : (focus = true)"
              @keydown.enter="confirm"
            />
            <span
              id="error-msg"
              class="error-msg"
              data-msg="input-error"
              role="alert"
              aria-live="assertive"
              >올바른 비밀번호를 입력해주세요.</span
            >
          </span>
        </div>
      </div>
      <div class="area-btn is-center">
        <button class="btn-border-lg pop" title="페이지 이동" @click="confirm">
          <span>확인</span>
        </button>
      </div>
      <button
        ref="btnClose"
        class="btn-close"
        @click="closePopup"
        @keydown.tab="focusMoveWrap"
      >
        <span class="blind">닫기</span>
      </button>
    </div>
  </div>
</template>

<script>
import { passwordCheck } from '~/assets/js/workSecret'
import workMixin from '~/mixins/workMixin'
export default {
  name: 'PasswordPopup',
  mixins: [workMixin],
  props: {
    slug: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      password: '',
      focus: true,
    }
  },
  mounted() {
    document.querySelector('.wrap-pop').focus()
  },
  methods: {
    errorMsg() {
      const errorMsg = document.querySelector('.wrap-pop .error-msg')
      errorMsg.classList.add('active')
    },
    confirm() {
      if (passwordCheck(this.password)) {
        this.$store.commit('updateMiddleware')
        if (this.$i18n.locale === 'en') {
          this.$router.push(`/${this.$i18n.locale}/work/${this.slug}`)
        } else if (this.$router.history.current.fullPath.split('/').length === 3) {
          this.$router.push(`./${this.slug}`)
        } else {
          this.$router.push(`work/${this.slug}`)
        }
      } else {
        this.errorMsg()
        document.querySelector('.area-input input').setAttribute('aria-invalid', 'true')
      }
    },
    closePopup() {
      this.$emit('togglePopup')
      document.querySelector('.section-contents').focus()
    },
    focusMoveWrap(event) {
      if (!event.shiftKey) {
        this.$refs.popupWrap.focus()
      } else {
        return false
      }
    },
    focusMoveClose(event) {
      this.$refs.popupWrap.onblur = function () {
        if (event.shiftKey) {
          document.querySelector('.wrap-pop .btn-close').focus()
        }
      }
    },
  },
}
</script>
