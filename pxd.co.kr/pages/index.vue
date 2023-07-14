<template>
  <div id="wrap" class="main">
    <Title :language="false">
      <template #title1>pxd is an innovative design consulting group.</template>
      <template #title2>We connect people and design with a happy experience.</template>
    </Title>
    <MainsectionMenulist />
    <MainsectionOurwork />
    <MainsectionOurstory />
    <MainsectionOurservice />
    <!--insta api token 문제때문에 임시로 하드코딩한 컴포넌트를 삽입했습니다 -->
    <!-- <MainsectionPxdpeople /> -->
    <DummyPeople />
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { stikyTitle } from '~/assets/js/stickyTitle.js'

export default {
  name: 'Main',
  async asyncData({ store }) {
    if (store.state.insta.length === 0) {
      await store.dispatch('instaFeed')
    }
  },
  head() {
    const seoMeta = {
      title: 'pxd',
      description: 'pxd : Innovative Design Consulting Group',
    }
    return {
      title: 'pxd',
      meta: makeMeta(seoMeta),
    }
  },
  mounted() {
    stikyTitle()
  },
}
</script>
