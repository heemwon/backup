<template>
  <div id="wrap" class="service">
    <Title language :class="$t('class')">
      <template #title1>{{ $t('service.title1') }}</template>
      <template #title2>{{ $t('service.title2') }}</template>
    </Title>
    <div class="area-visual-work">
      <img :src="`${GOOGLE_STORAGE}visual_service.png`" alt="" />
    </div>
    <section id="skipcontent" class="service-content">
      <h3 class="blind">Service 목록</h3>
      <ul class="wrap-list-service sub-main">
        <li v-for="(service, index) in services" :key="index">
          <NuxtLink :to="localePath(`/service/${service.slug}`)">
            <CardType02
              :card02-img="service.outVisual.thumbnail"
              :card02-title="$t('service.service.sub[' + index + '].title')"
              :card02-desc="$t('service.service.sub[' + index + '].desc')"
              :class="$t('class')"
            />
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
import CardType02 from '~/components/CardType02'
import { services as data } from '~/static/data/service/index.js'
import { GOOGLE_STORAGE } from '~/static/utils'

export default {
  name: 'Service',
  components: { CardType02 },
  asyncData() {
    const services = data.values
    return { services, GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: 'pxd Service',
      description: '사람에 대한 이해와 공감으로부터 문제를 발견합니다.',
      url: `${this.$route.path}`,
    }
    return {
      title: 'Service > pxd',
      meta: makeMeta(seoMeta),
    }
  },
}
</script>
