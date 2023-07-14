<template>
  <button class="btn-more-big" type="button" @click="btnEvent" v-bind:title="title">
    <span>{{ btnTitle }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnTitle: {
      type: String,
      default: '더보기',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    btnEvent() {
      this.$emit('btnEvent')
    },
  },
}
</script>
