<template>
  <RecruitForm :form-title="'희망 근무조건'">
    <template #form>
      <ul>
        <li class="full">
          <label for="hope_role" class="title require">담당업무 및 역할</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="업무와 역할을 입력"
              rules="required"
              tag="span"
              class="wrap-textarea"
            >
              <textarea
                id="hope_role"
                v-model="hopeRole"
                :class="`is-${valid}`"
                data-test-id="cypress-hope-condition"
                placeholder="ex) UX/UI 디자이너, 프로젝트 매니저 등 원하는 업무와 역할을 작성해주세요."
                name="hope_role"
                data-required
                aria-required="true"
                class="contenteditable"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-hoperole"
              ></textarea>
              <span id="error-hoperole" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li class="full">
          <label for="infoHope" class="title require">희망연봉</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="희망연봉을 입력"
              rules="required"
              tag="span"
              class="wrap-input"
            >
              <input
                id="infoHope"
                v-model="hopePay"
                :class="`is-${valid}`"
                data-test-id="cypress-salary-condition"
                type="text"
                placeholder="ex) 0000만원"
                name="hope_pay"
                data-required
                :aria-invalid="String(!valid)"
                aria-errormessage="error-hopepay"
                aria-required="true"
              />
              <span id="error-hopepay" aria-live="assertive" class="error-message">{{
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
  name: 'HopeConditionForm',
  components: {
    ValidationProvider,
  },
  computed: {
    // 희망업무
    hopeRole: {
      get() {
        return this.$store.state.jobs.hope.role
      },
      set(value) {
        this.$store.commit('jobs/hope/updateHopeRole', value)
      },
    },
    // 희망연봉
    hopePay: {
      get() {
        return this.$store.state.jobs.hope.pay
      },
      set(value) {
        this.$store.commit('jobs/hope/updateHopePay', value)
      },
    },
  },
}
</script>

<style></style>
