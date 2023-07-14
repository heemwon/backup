<template>
  <div class="wrap" :class="$t('title')">
    <div id="skipNav">
      <a href="#skipcontent" role="button" @click="hiddenHeader()">본문 바로가기</a>
    </div>
    <Header :title="$route.fullPath" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { headerhidden } from '~/assets/js/header.js'
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale === 'en' ? 'en' : 'ko',
      },
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkEvent)
  },
  mounted() {
    this.checkEvent()
    window.addEventListener('resize', this.checkEvent)
  },
  methods: {
    checkEvent() {
      this.$store.commit('deviceCheck', this.$el.clientWidth)
    },
    hiddenHeader() {
      headerhidden()
    },
  },
}
</script>
