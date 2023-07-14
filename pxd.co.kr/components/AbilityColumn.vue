<template>
  <ul class="ability-list">
    <li v-for="(ability, indexTitle) in abilitys" :key="indexTitle">
      <template v-if="indexTitle !== 4">
        <span class="ability-title"> {{ ability.title }}</span>
        <div class="ability-select">
          <ul class="wrap-radio-group">
            <li
              v-for="(point, indexRadio) in ability.levelList"
              :key="indexRadio"
              class="wrap-radio"
              :aria-describedby="`group-${ability.list}${indexRadio}`"
            >
              <input
                :id="`group-${ability.list}${indexRadio}`"
                v-model="point.checked"
                :value="point.value"
                :name="`group-${ability.list}${indexTitle}`"
                type="radio"
                @change="setAbilityValue(indexTitle, indexRadio, $event.target.value)"
              />
              <label :for="`group-${ability.list}${indexRadio}`">{{ point.value }}</label>
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <label :for="`ability-${ability.list}-input`" class="ability-title">
          {{ ability.title }}
          <ValidationProvider
            v-slot="{ errors, valid }"
            :name="`도구를 입력`"
            tag="span"
            class="wrap-input"
          >
            <input
              :id="`ability-${ability.list}-input`"
              v-model="ability.type"
              :class="`is-${valid}`"
              type="text"
              placeholder="직접입력"
              @input="setAbilityTool(indexTitle, $event.target.value)"
            />
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </label>
        <ul class="ability-select">
          <li
            
            :class="`tool-index${[indexTitle + 1]}`"
            class="wrap-radio-group"
          >
            <span
              v-for="(point, indexRadio) in ability.levelList"
              :key="indexRadio"
              class="wrap-radio"
              :aria-describedby="`group-${ability.list}${indexRadio}`"
            >
              <input
                :id="`group-${ability.list}${indexRadio}`"
                v-model="point.checked"
                :value="point.value"
                :name="`group-${ability.list}${indexTitle}`"
                disabled="true"
                type="radio"
                @change="setAbilityValue(indexTitle, indexRadio, $event.target.value)"
              />
              <label :for="`group-${ability.list}${indexRadio}`">{{ point.value }}</label>
            </span>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'AbilityColumn',
  components: {
    ValidationProvider,
  },
  data() {
    return {
      abilitys: [
        {
          list: 'sketch',
          title: 'Sketch',
          levelList: [
            {
              level: 'excellence',
              value: '탁월함',
              checked: this.$store.state.jobs.experience.skills.sketch,
            },
            {
              level: 'good',
              value: '잘함',
              checked: this.$store.state.jobs.experience.skills.sketch,
            },
            {
              level: 'normal',
              value: '보통',
              checked: this.$store.state.jobs.experience.skills.sketch,
            },
          ],
        },
        {
          list: 'framer',
          title: 'Framer',
          levelList: [
            {
              level: 'excellence',
              value: '탁월함',
              checked: this.$store.state.jobs.experience.skills.framer,
            },
            {
              level: 'good',
              value: '잘함',
              checked: this.$store.state.jobs.experience.skills.framer,
            },
            {
              level: 'normal',
              value: '보통',
              checked: this.$store.state.jobs.experience.skills.framer,
            },
          ],
        },
        {
          list: 'xd',
          title: 'Adobe XD',
          levelList: [
            {
              level: 'excellence',
              value: '탁월함',
              checked: this.$store.state.jobs.experience.skills.xd,
            },
            {
              level: 'good',
              value: '잘함',
              checked: this.$store.state.jobs.experience.skills.xd,
            },
            {
              level: 'normal',
              value: '보통',
              checked: this.$store.state.jobs.experience.skills.xd,
            },
          ],
        },
        {
          list: 'excel',
          title: 'Microsoft Excel',
          levelList: [
            {
              level: 'excellence',
              value: '탁월함',
              checked: this.$store.state.jobs.experience.skills.excel,
            },
            {
              level: 'good',
              value: '잘함',
              checked: this.$store.state.jobs.experience.skills.excel,
            },
            {
              level: 'normal',
              value: '보통',
              checked: this.$store.state.jobs.experience.skills.excel,
            },
          ],
        },
        {
          list: 'tools',
          title: '도구',
          type: this.$store.state.jobs.experience.skills.tools_name,
          levelList: [
            {
              level: 'excellence',
              value: '탁월함',
              checked: this.$store.state.jobs.experience.skills.tools_value,
            },
            {
              level: 'good',
              value: '잘함',
              checked: this.$store.state.jobs.experience.skills.tools_value,
            },
            {
              level: 'normal',
              value: '보통',
              checked: this.$store.state.jobs.experience.skills.tools_value,
            },
          ],
        },
      ],
    }
  },
  mounted() {
    // 새로고침 시 inputType text의 입력 값이 있으면 라디오 버튼 활성화
    const getToolsName = this.$store.state.jobs.experience.skills.tools_name
    this.changeRadioDisabled(4, getToolsName)
  },
  methods: {
    // inputType text 개수에 따라 (라디오 버튼 활성화 && 기본 체크값(잘함)) || (라디오 버튼 비활성화 && 체크 해지) 설정
    changeRadioDisabled(index, value) {
      const radios = document.querySelectorAll(`.tool-index${[index + 1]} input`)
      const levels = this.abilitys[index].levelList

      if (value.replace(/\n/g, '') && value.length >= 1) {
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
    // inputType radio
    setAbilityValue(indexTitle, indexRadio, value) {
      this.$store.commit('jobs/experience/updateAbilityValue', {
        indexTitle,
        indexRadio,
        value,
      })
    },
    // 도구 inputType text
    setAbilityTool(indexTitle, value) {
      this.changeRadioDisabled(indexTitle, value)
      this.$store.commit('jobs/experience/updateAbilityTool', { indexTitle, value })
      this.$store.commit('jobs/experience/updateAbilityValue', {
        indexTitle,
        value,
      })
    },
  },
}
</script>

<style></style>
