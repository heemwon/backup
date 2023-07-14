<template>
  <RecruitForm
    :form-title="'포트폴리오'"
    :sub-form-title="'pdf 첨부, 30MB 이하. 초과 시 확인이 불가합니다.'"
    :form-type2="true"
  >
    <template #form>
      <ul>
        <li>
          <label for="portpolio" class="title">첨부파일</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, validate, valid }"
              name="포트폴리오를 첨부"
              rules="ext:pdf|size:30000"
              tag="span"
              class="wrap-file"
            >
              <input
                id="portpolio"
                type="file"
                accept=".pdf"
                name="pdf_files"
                data-test-id="cypress-portpolio-pdf"
                :class="`is-${valid}`"
                @change="setPortpolio"
                @input="validate"
              />
              <span class="error-message">{{ errors[0] }}</span>
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
  name:'PortfolioForm',
  components: {
    ValidationProvider,
  },
  computed: {
    portpolio: {
      get() {
        return this.$store.state.jobs.portpolio.file
      },
      set(value) {
        this.$store.commit('jobs/portpolio/updatePortpolio', value)
      },
    },
  },
  methods: {
    setPortpolio(e) {
      this.portpolio = e.target.files[0]
    },
  },
}
</script>

<style></style>
