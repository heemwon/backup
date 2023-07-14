<template>
  <div class="main-component people">
    <div class="section">
      <div class="section-title" data-action="fixed-title">
        <h2 class="title">{{ title }}</h2>
      </div>
      <div class="section-contents">
        <p class="h4-desc" :class="$t('class')">{{ $t('main.cartegory.people') }}</p>
      </div>
    </div>
    <div class="wrap-insta" data-action="reveal-content">
      <template v-for="(item, index) in instaList">
        <a
          v-if="index < 8"
          :key="index"
          :href="item.permalink"
          title="새창 이동"
          target="_blank"
          class="instagram-item"
          rel="noopener"
        >
          <img :src="item.img" alt="" />
          <p class="blind">
            {{
              instaCaption[index] +
              '... 더 자세한 정보는 인스타그램 링크 이동으로 바로가기'
            }}
          </p>
        </a>
      </template>
    </div>
    <MainMoreBtn :instagram="instagram" />
  </div>
</template>

<script>
import { contentAction } from '~/assets/js/textAction.js'
import insta from '~/static/data/people/insta.json'

export default {
  name: 'DummyPeople',
  data() {
    return {
      instagram: true,
      title: 'pxd people',
      instaList: insta,
    }
  },
  computed: {
    instaCaption() {
      return this.instaList.map((el) => {
        let text = el.caption
        if (text) {
          text = el.caption.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            '',
          )
          text = text.substr(0, 40)
          return text
        }
        return ''
      })
    },
  },
  mounted() {
    contentAction('load', null)
    contentAction('scroll', window.pageYOffset)
  },
  methods: {
    moveToDetail(id) {
      this.$router.push(`work${id}`)
    },
  },
}
</script>
