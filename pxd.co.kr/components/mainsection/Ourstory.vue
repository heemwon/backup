<template>
  <div class="main-component section">
    <div class="section-title-wrap">
      <h2 class="section-title" data-action="fixed-title">{{ title }}</h2>
    </div>
    <div class="section-contents">
      <strong class="h4-desc" :class="$t('class')">{{
        $t('main.cartegory.story')
      }}</strong>
      <div class="inner-section-list main">
        <ul class="card-wrap1 stories">
          <li
            v-for="(item, index) in content"
            :key="index"
            @click="
              $store.state.language === 'ko'
                ? moveToDetail(item.slug)
                : moveToDetailen(item.slug)
            "
          >
            <CardType01
              title="페이지 이동"
              :tag-type="buttonType"
              :card01-img="item.img"
              :card01-title="item.title"
              :card01-desc="item.subTitle"
            />
          </li>
        </ul>
      </div>
    </div>
    <MainMoreBtn :slug="slug" />
  </div>
</template>

<script>
export default {
  name: 'OurStory',
  data() {
    return {
      buttonType: 'button',
      slug: 'story',
      title: 'Our story',
      content: [
        {
          title: '디자인 시스템 1편 - 디자인 가이드/디자인 시스템은 왜 필요한가',
          subTitle: 'UI 가벼운 이야기・Sep 9, 2019',
          img: 'img_story_list_01.png',
          slug: 'detail_01',
        },
        {
          title: '3D 지도의 내비게이션 제스쳐',
          subTitle: 'UI 가벼운 이야기・May 13, 2019',
          img: 'img_story_list_02.png',
          slug: 'detail_02',
        },
        {
          title: 'UX의 미래는 여기있다',
          subTitle: 'UI 가벼운 이야기・Oct 23, 2017',
          img: 'img_story_list_03.png',
          slug: 'detail_03',
        },
      ],
    }
  },
  methods: {
    moveToDetail(id) {
      this.$router.push(`story/${id}`)
    },
    moveToDetailen(id) {
      this.$router.push(`en/story/${id}`)
    },
  },
}
</script>

<style></style>
