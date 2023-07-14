<template>
  <div id="wrap" class="people">
    <Title language :class="$t('class')">
      <template #title1>{{ $t('people.title1') }}</template>
      <template #title2>{{ $t('people.title2') }}</template>
    </Title>
    <div id="skipcontent" class="wrap-insta" data-action="reveal-content">
      <template v-for="(item, index) in instaList">
        <a
          v-if="index < 16"
          :key="index"
          :href="item.permalink"
          title="새창 이동"
          target="_blank"
          class="instagram-item"
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
    <div class="insta-url-wrap">
      <a
        href="https://www.instagram.com/pxd.people/"
        class="btn-more-big"
        target="blank"
        title="새창 이동"
      >
        <span> pxd 인스타그램 </span>
      </a>
    </div>
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { contentAction } from '~/assets/js/textAction.js'
import insta from '~/static/data/people/insta.json'

export default {
  name: 'People',
  // insta api token 문제때문에 임시로 주석처리 하였습니다.
  // async asyncData({ store }) {
  //   if (store.state.insta.length === 0) {
  //     await store.dispatch('instaFeed')
  //   }
  // },
  data() {
    return {
      instaList: insta,
    }
  },
  head() {
    const seoMeta = {
      title: 'pxd People',
      description: '좋은 사람들과 함께하는 우리의 시간을 소개합니다.',
      url: `${this.$route.path}`,
    }
    return {
      title: 'People > pxd',
      meta: makeMeta(seoMeta),
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
    goToInsta() {
      location.href = 'https://www.instagram.com/pxd.people'
    },
  },
}
</script>
