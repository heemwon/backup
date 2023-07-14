<template>
  <div id="skipcontent" class="main-component section">
    <div class="section-title-wrap">
      <h2 class="section-title" data-action="fixed-title">{{ title }}</h2>
    </div>
    <div class="section-contents">
      <strong class="h4-desc" :class="$t('class')">{{
        $t('main.cartegory.work')
      }}</strong>
      <div class="inner-section-list main">
        <ul class="card-wrap1 work">
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
  name: 'OurWork',
  data() {
    return {
      buttonType: 'button',
      slug: 'work',
      title: 'Our work',
      content: [
        {
          title: '모이는 순간 독서가 된다. Just Show Up',
          subTitle: '지앤엠글로벌문화재단',
          img: 'thumb_work_jsu.jpg',
          slug: 'detail_jsu',
        },
        {
          title: '올바른 투자습관을 길러주는 주식투자 스타터, STEPS',
          subTitle: 'Hanwha Investment & Securities Co',
          img: 'thumb_work_steps.jpg',
          slug: 'detail_steps',
        },
        {
          title: '고깃집 사장님의 미트 큐레이터, 미트박스',
          subTitle: '(주)글로벌네트웍스',
          img: 'thumb_work_meatbox.jpg',
          slug: 'detail_meatbox',
        },
      ],
    }
  },
  methods: {
    moveToDetail(id) {
      this.$router.push(`work/${id}`)
    },
    moveToDetailen(id) {
      this.$router.push(`en/work/${id}`)
    },
  },
}
</script>
