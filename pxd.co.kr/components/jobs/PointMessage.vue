<template>
  <span v-html="stateMessage"></span>
</template>

<script>
export default {
  name:'PointMeassage',
  props: {
    point: {
      type: String,
      default() {
        return '기초 지식이 부족하거나,<br/>해당 업무 작업 진행 어려움'
      },
    },
  },
  data() {
    return {
      pointOneMessage: '기초 지식이 부족하거나,<br/>해당 업무 작업 진행 어려움',
      pointTwoMessage: '해당 업무의 소소한 작업 진행 가능',
      pointThreeMessage:
        '해당 업무의 일반적인 작업을<br/>다른 사람의 도움을 얻어 진행 가능 ',
      pointFourMessage: '해당 업무의 일반적인 작업 진행 가능',
      pointFiveMessage: '해당 업무의 모든 작업 진행이 가능하며,<br/>다른 사람 코칭 가능',
      pointSixMessage:
        '해당 업무의 모든 작업 진행이 가능하며,<br/> 다른 사람 코칭 및 리딩 가능',
      show: false,
    }
  },
  computed: {
    stateMessage() {
      switch (this.point) {
        case '1':
        return this.pointOneMessage
        case '2':
          return this.pointTwoMessage
        case '3':
          return this.pointThreeMessage
        case '4':
          return this.pointFourMessage
        case '5':
          return this.pointFiveMessage
        case '6':
          return this.pointSixMessage
        default:
          break
      }
      return this.pointOneMessage
    },
  },
  watch: {
    point(newVal) {
      if (newVal) {
        this.show = true
      }
    },
  },
}
</script>

<style></style>
