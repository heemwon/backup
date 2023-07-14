<template>
  <ul data-test-id="cypress-history" class="career-list">
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'career-term' + index"
        name="기간을 입력"
        rules="period"
        tag="span"
        class="wrap-input"
      >
        <label :for="'career' + index" class="blind">경력 기간</label>
        <input
          :id="'career' + index"
          v-model="careerPeriod"
          :class="`is-${valid}`"
          type="text"
          placeholder="YYYY.MM ~ YYYY.MM"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-careerperiod' + index"
        />
        <span
          :id="'error-careerperiod' + index"
          aria-live="assertive"
          class="error-message"
        >
          {{ errors[0] }}
        </span>
      </ValidationProvider>
    </li>
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'career-company' + index"
        name="회사명을 입력"
        tag="span"
        class="wrap-input"
      >
        <label :for="'careerCompany' + index" class="blind">회사명</label>
        <input
          :id="'careerCompany' + index"
          v-model="Careercompany"
          type="text"
          placeholder="회사명"
          :class="`is-${valid}`"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-careercompany' + index"
        />
        <span
          :id="'error-careercompany' + index"
          aria-live="assertive"
          class="error-message"
          >{{ errors[0] }}</span
        >
      </ValidationProvider>
    </li>
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'career-position' + index"
        name="담당업무 및 직위를 입력"
        tag="span"
        class="wrap-input"
      >
        <label :for="'carrerPosition' + index" class="blind">담당업무 및 직위</label>
        <input
          :id="'carrerPosition' + index"
          v-model="careerPosition"
          type="text"
          placeholder="담당업무 및 직위"
          :class="`is-${valid}`"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-careerposition' + index"
        />
        <span
          :id="'error-careerposition' + index"
          aria-live="assertive"
          class="error-message"
          >{{ errors[0] }}</span
        >
      </ValidationProvider>
    </li>
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'career-reason' + index"
        name="퇴직사유를 입력"
        tag="span"
        class="wrap-input"
      >
        <label :for="'careerReason' + index" class="blind">퇴직사유</label>
        <input
          :id="'careerReason' + index"
          v-model="careerReason"
          type="text"
          placeholder="퇴직사유"
          :class="`is-${valid}`"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-careerreason' + index"
        />
        <span
          :id="'error-careerreason' + index"
          aria-live="assertive"
          class="error-message"
          >{{ errors[0] }}</span
        >
      </ValidationProvider>
    </li>
    <li
      v-if="careers.length >= 2"
      v-show="index > 0"
      class="btn-remove-arrow"
      style="text-align: right; vertical-align: middle"
    >
      <button type="button" class="btn-remove-row" @click="removeCareerRow(index)">
        <span class="blind">경력사항 행 삭제</span>
        -
      </button>
    </li>
  </ul>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'CareerRow',
  components: {
    ValidationProvider,
  },
  props: {
    career: {
      type: Object,
      default: Object,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    careers: {
      get() {
        return this.$store.state.jobs.experience.career
      },
    },
    careerPeriod: {
      get() {
        return this.$store.state.jobs.experience.career[this.index].period
      },
      set(value) {
        this.$store.commit('jobs/experience/updateCareerTerm', {
          index: this.index,
          value,
        })
      },
    },
    Careercompany: {
      get() {
        return this.$store.state.jobs.experience.career[this.index].name
      },
      set(value) {
        this.$store.commit('jobs/experience/updateCareerCompany', {
          index: this.index,
          value,
        })
      },
    },
    careerPosition: {
      get() {
        return this.$store.state.jobs.experience.career[this.index].position
      },
      set(value) {
        this.$store.commit('jobs/experience/updateCareerPosition', {
          index: this.index,
          value,
        })
      },
    },
    careerReason: {
      get() {
        return this.$store.state.jobs.experience.career[this.index].reason
      },
      set(value) {
        this.$store.commit('jobs/experience/updateCareerReason', {
          index: this.index,
          value,
        })
      },
    },
  },
  methods: {
    removeCareerRow(index) {
      this.$store.commit('jobs/experience/removeCareerRow', index)
      this.focusRow()
    },
    focusRow() {
      const listNum = document.querySelectorAll('.career-list').length - 1
      const target = document.querySelector(
        '.career-list:nth-child(' + listNum + ') > li:nth-child(4) input',
      )
      if (target) {
        target.focus()
      }
    },
  },
}
</script>

<style></style>
