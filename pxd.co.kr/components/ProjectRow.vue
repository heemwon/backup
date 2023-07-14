<template>
  <ul data-test-id="cypress-history" class="project-list">
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'project-period' + index"
        name="기간을 입력"
        rules="period"
        tag="span"
        class="wrap-input"
      >
        <label :for="'project' + index" class="blind">수행 프로젝트 기간</label>
        <input
          :id="'project' + index"
          v-model="projectPeriod"
          type="text"
          placeholder="YYYY.MM ~ YYYY.MM"
          :class="`is-${valid}`"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-projectperiod' + index"
        />
        <span
          :id="'error-projectperiod' + index"
          aria-live="assertive"
          class="error-message"
          >{{ errors[0] }}</span
        >
      </ValidationProvider>
    </li>
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'project-name' + index"
        name="프로젝트명을 입력"
        tag="span"
        class="wrap-input"
      >
        <label :for="'projectName' + index" class="blind">프로젝트명</label>
        <input
          :id="'projectName' + index"
          v-model="projectName"
          type="text"
          placeholder="프로젝트명"
          :class="`is-${valid}`"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-projectname' + index"
        />
        <span
          :id="'error-projectname' + index"
          aria-live="assertive"
          class="error-message"
          >{{ errors[0] }}</span
        >
      </ValidationProvider>
    </li>
    <li>
      <ValidationProvider
        v-slot="{ errors, valid }"
        :vid="'project-position' + index"
        name="역할 및 업무 입력"
        tag="span"
        class="wrap-input"
      >
        <label :for="'projectPosition' + index" class="blind">역할 및 업무</label>
        <input
          :id="'projectPosition' + index"
          v-model="projectPosition"
          type="text"
          placeholder="역할 및 업무"
          :class="`is-${valid}`"
          :aria-invalid="String(!valid)"
          :aria-errormessage="'error-projectposition' + index"
        />
        <span
          :id="'error-projectposition' + index"
          aria-live="assertive"
          class="error-message"
          >{{ errors[0] }}</span
        >
      </ValidationProvider>
    </li>
    <li v-if="projects.length >= 2" class="btn-remove-arrow">
      <button type="button" class="btn-remove-row" @click="removeProjectRow(index)">
        <span class="blind">수행 프로젝트 행 삭제</span>
        -
      </button>
    </li>
  </ul>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'ProjectRow',
  components: {
    ValidationProvider,
  },
  props: {
    project: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    projects: {
      get() {
        return this.$store.state.jobs.experience.project
      },
    },
    projectPeriod: {
      get() {
        return this.$store.state.jobs.experience.project[this.index].period
      },
      set(value) {
        this.$store.commit('jobs/experience/updateProjectTerm', {
          index: this.index,
          value,
        })
      },
    },
    projectName: {
      get() {
        return this.$store.state.jobs.experience.project[this.index].name
      },
      set(value) {
        this.$store.commit('jobs/experience/updateProjectName', {
          index: this.index,
          value,
        })
      },
    },
    projectPosition: {
      get() {
        return this.$store.state.jobs.experience.project[this.index].position
      },
      set(value) {
        this.$store.commit('jobs/experience/updateProjectPosition', {
          index: this.index,
          value,
        })
      },
    },
  },
  methods: {
    removeProjectRow(index) {
      this.$store.commit('jobs/experience/removeProjectRow', index)
      this.focusRow()
    },
    focusRow() {
      const listNum = document.querySelectorAll('.project-list').length - 1
      const target = document.querySelector(
        '.project-list:nth-child(' + listNum + ') > li:nth-child(3) input',
      )
      if (target) {
        target.focus()
      }
    },
  },
}
</script>

<style></style>
