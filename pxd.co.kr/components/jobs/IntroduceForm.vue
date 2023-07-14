<template>
  <RecruitForm
    :form-title="'자기소개'"
    :sub-form-title="'항목별 7줄 이내로 작성해주세요.'"
    :form-type2="true"
  >
    <template #form>
      <ul>
        <li>
          <label for="introduce_myself" class="title require">자기소개</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="자기소개를 입력"
              rules="required"
              tag="span"
              class="wrap-textarea"
            >
              <textarea
                id="introduce_myself"
                v-model="myself"
                :class="`is-${valid}`"
                data-test-id="cypress-introduce-self"
                placeholder="남들과 다른 자신만의 경험, 가치관, 노력, 관계 등을 중심으로 작성해주세요."
                name="introduce_myself"
                data-required
                aria-required="true"
                class="contenteditable"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-myself"
              ></textarea>
              <span id="error-myself" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li>
          <label for="introduce_aim" class="title require"
            >pxd 입사 후 이루고자 하는 목표는 무엇입니까?</label
          >
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="입사 후 목표을 입력"
              rules="required"
              tag="span"
              class="wrap-textarea"
            >
              <textarea
                id="introduce_aim"
                v-model="aim"
                :class="`is-${valid}`"
                data-test-id="cypress-introduce-goal"
                placeholder="5년 후, 10년 후 계획하고 있는 자신의 모습을 서술해주세요."
                name="introduce_aim"
                data-required
                aria-required="true"
                class="contenteditable"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-aim"
              ></textarea>
              <span id="error-aim" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li>
          <label for="introduce_why" class="title require"
            >pxd에서 지원자를 왜 뽑아야 하는지 이유를 말해주세요.</label
          >
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="왜 뽑아야 하는지 이유를 입력"
              rules="required"
              tag="span"
              class="wrap-textarea"
            >
              <textarea
                id="introduce_why"
                v-model="why"
                :class="`is-${valid}`"
                data-test-id="cypress-introduce-reason"
                placeholder="해당 내용을 자유롭게 작성해주세요."
                name="introduce_why"
                data-required
                aria-required="true"
                class="contenteditable"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-why"
              ></textarea>
              <span id="error-why" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li>
          <label for="introduce_etc" class="title require">그 외 하고 싶은 이야기</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="하고 싶은 이야기를 입력"
              rules="required"
              tag="span"
              class="wrap-textarea"
            >
              <textarea
                id="introduce_etc"
                v-model="etc"
                :class="`is-${valid}`"
                data-test-id="cypress-introduce-etc"
                placeholder="해당 내용을 자유롭게 작성해주세요."
                name="introduce_etc"
                data-required
                aria-required="true"
                class="contenteditable"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-etc"
              ></textarea>
              <span id="error-etc" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
      </ul>
    </template>
  </RecruitForm>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name:'IntroduceForm',
  components: {
    ValidationProvider,
  },
  computed: {
    myself: {
      get() {
        return this.$store.state.jobs.introduce.myself
      },
      set(value) {
        this.$store.commit('jobs/introduce/updateMyself', value)
      },
    },
    // 입사 후 목표
    aim: {
      get() {
        return this.$store.state.jobs.introduce.aim
      },
      set(value) {
        this.$store.commit('jobs/introduce/updateAim', value)
      },
    },
    // 뽑아야 하는 이유
    why: {
      get() {
        return this.$store.state.jobs.introduce.why
      },
      set(value) {
        this.$store.commit('jobs/introduce/updateWhy', value)
      },
    },
    // 기타
    etc: {
      get() {
        return this.$store.state.jobs.introduce.etc
      },
      set(value) {
        this.$store.commit('jobs/introduce/updateEtc', value)
      },
    },
  },
}
</script>

<style></style>
