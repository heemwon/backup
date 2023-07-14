<template>
  <div class="main-component section">
    <div class="section-title-wrap">
      <h2 class="section-title" data-action="fixed-title">{{ title }}</h2>
    </div>
    <div class="section-contents">
      <strong class="h4-desc" :class="$t('class')">
        {{ $t('main.cartegory.service.title') }}
      </strong>
      <div class="inner-section-list main">
        <ul class="card-wrap1 service">
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
              :card01-title="$t('main.cartegory.service.sub[' + index + '].title')"
              :card01-desc="$t('main.cartegory.service.sub[' + index + '].desc')"
              :class="$t('class')"
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
  name: 'OurService',
  data() {
    return {
      buttonType: 'button',
      slug: 'service',
      title: 'Our service',
      content: [
        {
          img: 'ico_service_main_01.svg',
          slug: 'detail_01',
        },
        {
          img: 'ico_service_main_02.svg',
          slug: 'detail_02',
        },
        {
          img: 'ico_service_main_03.svg',
          slug: 'detail_03',
        },
        {
          img: 'ico_service_main_04.svg',
          slug: 'detail_04',
        },
        {
          img: 'ico_service_main_05.svg',
          slug: 'detail_05',
        },
      ],
    }
  },
  methods: {
    moveToDetail(id) {
      this.$router.push(`service/${id}`)
    },
    moveToDetailen(id) {
      this.$router.push(`en/service/${id}`)
    },
  },
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
