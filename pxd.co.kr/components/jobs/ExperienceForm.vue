<template>
  <RecruitForm
    :form-title="'이력정보'"
    :sub-form-title="'필요에 따라 편집하여 작성해주세요.'"
    :form-type2="true"
  >
    <template #form>
      <ul>
        <li data-test-id="cypress-education-wrap">
          <span class="title require">학력사항 </span>
          <div class="form-content">
            <EducationRow
              v-for="(education, i) in educations"
              :key="i"
              :edu="education"
              :index="i"
            />
          </div>
          <button
            type="button"
            class="btn-add-row education-add-row"
            @click="addEducationRow"
          >
            <span class="blind">학력사항 행 추가</span>
            +
          </button>
        </li>
        <li data-test-id="cypress-history-wrap">
          <span class="title">경력사항 </span>
          <div class="form-content">
            <CareerRow
              v-for="(career, i) in careers"
              :key="i"
              :career="career"
              :index="i"
            ></CareerRow>
          </div>
          <button type="button" class="btn-add-row history-add-row" @click="addCareerRow">
            <span class="blind">경력사항 행 추가</span>
            +
          </button>
        </li>
        <li data-test-id="cypress-project-wrap">
          <span class="title"> 주요 수행 프로젝트 </span>
          <div class="form-content">
            <ProjectRow
              v-for="(project, i) in projects"
              :key="i"
              :project="project"
              :index="i"
            >
            </ProjectRow>
          </div>
          <button
            type="button"
            class="btn-add-row project-add-row"
            @click="addProjectRow"
          >
            <span class="blind">프로젝트 행 추가</span>
            +
          </button>
        </li>
        <li data-test-id="cypress-awards-wrap">
          <strong class="title">수상경력/관련 교육 이력/자격 면허</strong>
          <div class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="수상경력/관련 교육 이력/자격 면허를 입력"
              tag="span"
              class="wrap-textarea"
            >
              <label for="experience_license" class="blind">이력 사항 및 상세내용</label>
              <textarea
                id="experience_license"
                v-model="license"
                :class="`is-${valid}`"
                name="experience_license"
                placeholder="이력 사항 및 상세내용 기재"
                class="contenteditable"
              ></textarea>
              <span class="error-message">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </li>
        <!-- XE 그룹 활성화 시 group_num == '56'" -->
        <li
          v-if="groupId === '56' || groupId === 56"
          :class="{ typeRange: groupId === '56' || groupId === 56 }"
        >
          <strong class="title">업무스킬 보유능력</strong>
          <div class="blind">
            <p>업무 활용 능력 정도를 1부터 6까지의 범위내에서 선택해주세요.</p>
            <ol>
              <li>1. 기초 지식이 부족하거나, 해당 업무 작업 진행 어려움</li>
              <li>2. 해당 업무의 소소한 작업 진행 가능</li>
              <li>3. 해당 업무의 일반적인 작업을 다른 사람의 도움을 얻어 진행 가능</li>
              <li>4. 해당 업무의 일반적인 작업 진행 가능</li>
              <li>5. 해당 업무의 모든 작업 진행이 가능하며, 다른 사람 코칭 가능</li>
              <li>
                6. 해당 업무의 모든 작업 진행이 가능하며, 다른 사람 코칭 및 리딩 가능
              </li>
            </ol>
          </div>
          <div class="form-content">
            <AbilityColumnXe></AbilityColumnXe>
          </div>
        </li>
        <li v-else data-test-id="cypress-skills-wrap">
          <strong class="title">프로토타이핑/그래픽/업무 도구 활용 능력</strong>
          <span class="blind"
            >업무 활용 능력 정도를 각 항목별로 탁월함, 잘함, 보통의 선택지 중에
            선택해주세요.</span
          >
          <div class="form-content">
            <AbilityColumn></AbilityColumn>
          </div>
        </li>
        <li data-test-id="cypress-language-wrap">
          <strong class="title">언어 활용능력</strong>
          <span class="blind"
            >언어 활용 능력 정도를 각 항목별로 탁월함, 잘함, 보통의 선택지 중에
            선택해주세요.</span
          >
          <div class="form-content">
            <LanguageColumn></LanguageColumn>
          </div>
        </li>
      </ul>
    </template>
  </RecruitForm>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'ExperienceForm',
  components: {
    ValidationProvider,
  },
  props: ['groupId'],
  computed: {
    // 학력
    educations: {
      get() {
        return this.$store.state.jobs.experience.education
      },
    },
    // 경력
    careers: {
      get() {
        return this.$store.state.jobs.experience.career
      },
    },
    // 프로젝트
    projects: {
      get() {
        return this.$store.state.jobs.experience.project
      },
    },
    // 수상경력/관련 교육 이력/자격 면허
    license: {
      get() {
        return this.$store.state.jobs.experience.license
      },
      set(value) {
        this.$store.commit('jobs/experience/updateLicense', value)
      },
    },
  },
  methods: {
    addEducationRow() {
      this.$store.commit('jobs/experience/addEducationRow')
      setTimeout(() => {
        if (document.querySelector('.education-list:last-child .education input')) {
          document.querySelector('.education-list:last-child .education input').focus()
        }
      }, 50)
    },
    addCareerRow() {
      this.$store.commit('jobs/experience/addCareerRow')
      setTimeout(() => {
        if (document.querySelector('.career-list:last-child li:first-child input')) {
          document.querySelector('.career-list:last-child li:first-child input').focus()
        }
      }, 50)
    },
    addProjectRow() {
      this.$store.commit('jobs/experience/addProjectRow')
      setTimeout(() => {
        if (document.querySelector('.project-list:last-child li:first-child input')) {
          document.querySelector('.project-list:last-child li:first-child input').focus()
        }
      }, 50)
    },
  },
}
</script>

<style></style>
