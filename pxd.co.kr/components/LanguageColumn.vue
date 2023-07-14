<template>
  <ul class="ability-list">
    <li v-for="(language, indexText) in languages" :key="indexText">
      <label :for="`languageOther${[indexText + 1]}`" class="ability-title">
        {{ language.title }}
        <ValidationProvider
          v-slot="{ errors, valid }"
          :name="`외국어${[indexText + 1]}를 입력`"
          tag="span"
          class="wrap-input"
        >
          <input
            :id="`languageOther${[indexText + 1]}`"
            v-model="language.type"
            :class="`is-${valid}`"
            type="text"
            placeholder="직접입력"
            @input="setLanguage(indexText, $event.target.value)"
          />
          <span class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
      </label>
      <span class="ability-select"
        ><span
          :class="`lang-index${[indexText + 1]}`"
          class="wrap-radio-group"
          ><span
            v-for="(point, indexRadio) in language.levelList"
            :key="indexRadio"
            class="wrap-radio"
            :aria-describedby="`lang-other1-${point.level}${[indexText + 1]}`"
          >
            <input
              :id="`lang-other1-${point.level}${indexText + 1}`"
              v-model="point.checked"
              :value="point.value"
              :name="`languageLevel${indexText}`"
              disabled="true"
              type="radio"
              @change="setLanguageLevel(indexText, indexRadio, $event.target.value)"
            />
            <label :for="`lang-other1-${point.level}${indexText + 1}`">{{
              point.value
            }}</label>
          </span>
        </span></span
      >
    </li>
  </ul>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'LanguageColumn',
  components: {
    ValidationProvider,
  },
  data() {
    return {
      languages: [
        {
          title: '외국어 1',
          type: this.$store.state.jobs.experience.language.other1,
          levelList: [
            {
              level: 'excellence',
              value: '탁월함',
              checked: this.$store.state.jobs.experience.language.other1_value,
            },
            {
              level: 'good',
              value: '잘함',
              checked: this.$store.state.jobs.experience.language.other1_value,
            },
            {
              level: 'normal',
              value: '보통',
              checked: this.$store.state.jobs.experience.language.other1_value,
            },
          ],
        },
        {
          title: '외국어 2',
          type: this.$store.state.jobs.experience.language.other2,
          levelList: [
            {
              level: 'excellence',
              value: '탁월함',
              checked: this.$store.state.jobs.experience.language.other2_value,
            },
            {
              level: 'good',
              value: '잘함',
              checked: this.$store.state.jobs.experience.language.other2_value,
            },
            {
              level: 'normal',
              value: '보통',
              checked: this.$store.state.jobs.experience.language.other2_value,
            },
          ],
        },
      ],
    }
  },
  mounted() {
    // 새로고침 시 inputType text의 입력 값이 있으면 라디오 버튼 활성화
    const getLanguage = this.$store.state.jobs.experience.language
    const getLanguageTypes = []
    for (const [key, value] of Object.entries(getLanguage)) {
      if (key === 'other1' || key === 'other2') {
        getLanguageTypes.push(value)
      }
    }

    getLanguageTypes.forEach((language, index) => {
      this.changeRadioDisabled(index, language)
    })
  },
  methods: {
    // inputType text 개수에 따라 (라디오 버튼 활성화 && 기본 체크값(잘함)) || (라디오 버튼 비활성화 && 체크 해지) 설정
    changeRadioDisabled(index, value) {
      const radios = document.querySelectorAll(`.lang-index${index + 1} input`)
      const levels = this.languages[index].levelList

      if (value.replace(/\n/g, '') && value.length > 1) {
        radios.forEach((radio) => {
          radio.disabled = false
          levels[1].checked = '잘함'
        })
      } else {
        radios.forEach((radio) => {
          radio.disabled = true
          levels.forEach((level) => {
            level.checked = ''
          })
        })
      }
    },

    // 외국어 inputType text
    setLanguage(indexText, value) {
      this.changeRadioDisabled(indexText, value)
      this.$store.commit('jobs/experience/updateLanguage', { indexText, value })
      this.$store.commit('jobs/experience/updateLanguageLevel', { indexText, value })
    },
    // 외국어 inputType radio
    setLanguageLevel(indexText, indexRadio, value) {
      this.$store.commit('jobs/experience/updateLanguageLevel', {
        indexText,
        indexRadio,
        value,
      })
    },
  },
}
</script>

<style></style>
