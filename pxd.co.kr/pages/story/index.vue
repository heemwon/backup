<template>
  <main id="wrap" class="story">
    <Title language :class="$t('class')">
      <template #title1>{{ $t('story.title1') }}</template>
      <template #title2>{{ $t('story.title2') }}</template>
    </Title>
    <section id="skipcontent" class="content">
      <div class="margin section-grid">
        <div class="section-title-wrap">
          <h3 class="section-title" data-action="fixed-title">Popular posts</h3>
        </div>
        <div class="section-contents">
          <ul class="card-wrap1 tab-item-wrap">
            <li
              v-for="(story, index) in storys"
              :key="index"
              data-action="reveal-content"
              class="card-type1 tab-item active"
            >
              <NuxtLink
                title="페이지 이동"
                :to="localePath({ path: `/story/${story.slug}` })"
              >
                <div class="img-box">
                  <img :src="`${GOOGLE_STORAGE}${story.thumbnail}`" alt="" />
                </div>
                <article>
                  <h4 class="title">{{ story.title }}</h4>
                  <p class="h5-etc">{{ story.client }}</p>
                </article>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="area-btn-center" data-action="fixed-title">
      <Button btn-title="pxd 블로그 가기" title="새창 이동" @btnEvent="pxdBlog" />
    </div>
  </main>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { textAction } from '~/assets/js/textAction'
import { stories as data } from '~/static/data/story/index.js'
import { GOOGLE_STORAGE } from '~/static/utils'

export default {
  name: 'Story',
  asyncData() {
    const storys = data.values
    return { storys, GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: 'pxd Story',
      description: '실패로부터 배우고 지식을 공유하여 모두의 경험을 확장합니다.',
      url: `${this.$route.path}`,
    }
    return {
      title: 'Story > pxd',
      meta: makeMeta(seoMeta),
    }
  },
  mounted() {
    textAction('load', null)
    window.addEventListener('scroll', function () {
      const scrollPosition = window.pageYOffset
      textAction('scroll', scrollPosition)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', textAction)
  },
  methods: {
    pxdBlog() {
      window.open('https://story.pxd.co.kr/')
    },
  },
}
</script>
