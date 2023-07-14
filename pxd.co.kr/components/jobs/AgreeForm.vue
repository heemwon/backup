<template>
  <div data-html2canvas-ignore="true" class="wrap-info-submit">
    <ValidationProvider
      v-slot="{ errors, valid }"
      name="위에 기재한 사항은 모두 사실인지 확인"
      rules="required"
      tag="span"
      class="wrap-check"
    >
      <input
        id="infoTrue"
        v-model="trust"
        data-test-id="agree"
        type="checkbox"
        name="agree_trust"
        data-required
        aria-required="true"
        value="trust"
        :class="`is-${valid}`"
        @change="setTrust($event.target.checked)"
      />
      <label for="infoTrue">위에 기재한 사항은 모두 사실입니다.</label>
      <span class="error-message">{{ errors[0] }}</span>
    </ValidationProvider>

    <ValidationProvider
      v-slot="{ errors, valid }"
      name="개인정보 수집 이용에 동의"
      rules="required"
      tag="span"
      class="wrap-check"
      ><input
        id="infoAgree"
        v-model="privacy"
        data-test-id="agree"
        type="checkbox"
        name="agree_privacy"
        data-required
        aria-required="true"
        value="privacy"
        :class="`is-${valid}`"
        @change="setPrivacy($event.target.checked)"
      />
      <label for="infoAgree">개인정보 수집 이용에 동의합니다.</label>
      <NuxtLink
        :to="localePath('/jobs-privacy')"
        title="새창 이동"
        target="_blank"
        class="privacy-btn"
        >개인정보 처리방침</NuxtLink
      >
      <span class="error-message">{{ errors[0] }}</span>
    </ValidationProvider>
    <input type="hidden" name="user_applicate" />
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'AgreeForm',
  components: {
    ValidationProvider,
  },
  data() {
    return {
      trust: [],
      privacy: [],
    }
  },
  methods: {
    setTrust(value) {
      this.$store.commit('jobs/agree/updateAgreeTrust', value)
    },
    setPrivacy(value) {
      this.$store.commit('jobs/agree/updateAgreePrivacy', value)
    },
  },
}
</script>

<style></style>
