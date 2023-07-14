<template>
  <ul class="education-list">
    <li class="education">
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'education-period' + index"
        name="기간을 입력"
        rules="required|period"
        tag="span"
        class="wrap-input"
      >
        <label :for="`educationPeriod` + index" class="blind">학력 기간</label>
        <input
          :id="`educationPeriod` + index"
          v-model="period"
          :class="`is-${valid}`"
          type="text"
          placeholder="YYYY.MM ~ YYYY.MM"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-period' + index"
          aria-required="true"
        />
        <span :id="'error-period' + index" aria-live="assertive" class="error-message">{{
          errors[0]
        }}</span>
      </ValidationProvider>
    </li>
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'education-name' + index"
        name="학교명 및 학과 또는 전공을 입력"
        rules="required"
        tag="span"
        class="wrap-input"
      >
        <label :for="`educationName` + index" class="blind"
          >학교명 및 학과 또는 전공</label
        >
        <input
          :id="`educationName` + index"
          v-model="name"
          :class="`is-${valid}`"
          type="text"
          placeholder="학교명 및 학과 또는 전공"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-educationname' + index"
          aria-required="true"
        />
        <span
          :id="'error-educationname' + index"
          aria-live="assertive"
          class="error-message"
          >{{ errors[0] }}</span
        >
      </ValidationProvider>
    </li>
    <li>
      <span class="wrap-select">
        <label :for="`educationType` + index" class="blind">최종학력</label>
        <select :id="`educationType` + index" v-model="type">
          <option value="졸업">졸업</option>
          <option value="졸업예정">졸업예정</option>
          <option value="재학">재학</option>
          <option value="중퇴">중퇴</option>
        </select>
      </span>
    </li>
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'education-point' + index"
        name="학점을 입력"
        rules="required"
        tag="span"
        class="wrap-input"
      >
        <label :for="'eduPoint' + index" class="blind">학점</label>
        <input
          :id="'eduPoint' + index"
          v-model="point"
          :class="`is-${valid}`"
          placeholder="학점"
          type="text"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-point' + index"
          aria-required="true"
        />
        <span :id="'error-point' + index" aria-live="assertive" class="error-message">{{
          errors[0]
        }}</span>
      </ValidationProvider>
    </li>
    <li
      class="btn-remove-arrow"
      style="text-align: right; vertical-align: middle"
      v-if="education.length >= 2"
      v-show="index > 0"
    >
      <button
        type="button"
        class="btn-remove-row education-remove-row"
        @click="removeEducationRow(index)"
      >
        <span class="blind">학력사항 행 삭제</span>
        -
      </button>
    </li>
  </ul>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'EducationRow',
  components: {
    ValidationProvider,
  },
  props: {
    edu: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    education: {
      get() {
        return this.$store.state.jobs.experience.education
      },
    },
    period: {
      get() {
        return this.$store.state.jobs.experience.education[this.index].period
      },
      set(value) {
        this.$store.commit('jobs/experience/updateEducationPeriod', {
          index: this.index,
          value,
        })
      },
    },
    name: {
      get() {
        return this.$store.state.jobs.experience.education[this.index].name
      },
      set(value) {
        this.$store.commit('jobs/experience/updateEducationName', {
          index: this.index,
          value,
        })
      },
    },
    type: {
      get() {
        return this.$store.state.jobs.experience.education[this.index].type
      },
      set(value) {
        this.$store.commit('jobs/experience/updateEducationType', {
          index: this.index,
          value,
        })
      },
    },
    point: {
      get() {
        return this.$store.state.jobs.experience.education[this.index].point
      },
      set(value) {
        this.$store.commit('jobs/experience/updateEducationPoint', {
          index: this.index,
          value,
        })
      },
    },
  },
  methods: {
    removeEducationRow(index) {
      this.$store.commit('jobs/experience/removeEducationRow', index)
      this.focusRow()
    },
    focusRow() {
      const listNum = document.querySelectorAll('.education-list').length - 1
      const target = document.querySelector(
        '.education-list:nth-child(' + listNum + ') > li:nth-child(4) input',
      )
      if (target) {
        target.focus()
      }
    },
  },
}
</script>

<style></style>
