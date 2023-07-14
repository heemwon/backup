<template>
  <div class="story-btn-wrap">
    <a
      :href="'https://story.pxd.co.kr/' + href"
      class="btn-more-big"
      target="_blank"
      title="새창 이동"
    >
      <span>pxd 블로그에서 보기</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'StoryButton',
  props: {
    href: {
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
