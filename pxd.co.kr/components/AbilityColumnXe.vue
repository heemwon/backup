<template>
  <ul class="ability-list">
    <li v-for="(ability, index) in abilityLists" :key="index" aria-live="assertive">
      <label :for="`ability-${ability.list}`" class="ability-title">
        {{ ability.title }}
      </label>
      <div class="ability-select">
        <span class="wrap-radio-group">
          <span class="wrap-radio skills-radio">
            <input
              :id="`ability-${ability.list}`"
              v-model="ability.point"
              :name="ability.list"
              type="range"
              max="6"
              min="1"
              step="1"
              @input="setAbilityPointXe(index, $event.target.value)"
            />
            <!--리더기 중복 제거-->
            <span class="point">{{ ability.point }}<span class="blind">점</span></span>
          </span>
        </span>
        <div class="point-message-wrap">
          <JobsPointMessage :point="ability.point"></JobsPointMessage>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AbilityColumnXe',
  data() {
    return {
      show: false,
      abilityLists: [
        {
          list: 'htmlCss',
          title: 'HTML / CSS',
          point: this.$store.state.jobs.experience.skills.html_css,
        },
        {
          list: 'javascript',
          title: 'JavaScript',
          point: this.$store.state.jobs.experience.skills.javascript,
        },
        {
          list: 'a11y',
          title: '웹 접근성',
          point: this.$store.state.jobs.experience.skills.a11y,
        },
        {
          list: 'cross',
          title: '크로스 브라우징',
          point: this.$store.state.jobs.experience.skills.cross,
        },
        {
          list: 'motion',
          title: 'Motion / Interaction',
          point: this.$store.state.jobs.experience.skills.motion,
        },
        {
          list: 'spa',
          title: 'SPA FrameWork',
          point: this.$store.state.jobs.experience.skills.spa,
        },
      ],
      pointOneMessage: '기초 지식이 부족하거나,<br/>해당 업무 작업 진행 어려움',
      pointTwoMessage: '해당 업무의 소소한 작업 진행 가능',
      pointThreeMessage:
        '해당 업무의 일반적인 작업을<br/>다른 사람의 도움을 얻어 진행 가능 ',
      pointFourMessage: '해당 업무의 일반적인 작업 진행 가능',
      pointFiveMessage: '해당 업무의 모든 작업 진행이 가능하며,<br/>다른 사람 코칭 가능',
      pointSixMessage:
        '해당 업무의 모든 작업 진행이 가능하며,<br/> 다른 사람 코칭 및 리딩 가능',
    }
  },
  methods: {
    setAbilityPointXe(index, value) {
      this.$store.commit('jobs/experience/updateSkillsXe', { index, value })
    },
  },
}
</script>

<style></style>
