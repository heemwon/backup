<template>
  <main class="service-detail">
    <!-- visual 영역 -->
    <div class="service-visual">
      <figure class="cover-img">
        <img
          :src="`${GOOGLE_STORAGE}${service.pageVisual.cover.pc}`"
          :alt="service.pageVisual.cover.alt"
        />
      </figure>
      <div class="cover-txt">
        <h3
          v-for="(title, index) in $t(
            'serviceDetail.service[' + service.index + '].visual',
          )"
          :key="index"
          data-action="action-title-y"
          class="title"
          :class="title.lang"
        >
          {{ title.title }}
        </h3>
        <div class="inform">
          <p
            v-for="(desc, index) in $t(
              'serviceDetail.service[' + service.index + '].desc',
            )"
            :key="index"
            :class="desc.lang"
            data-action="action-title-y"
          >
            {{ desc.title }}
          </p>
        </div>
      </div>
    </div>
    <!-- content -->
    <section id="skipcontent" class="content">
      <template v-if="$t('serviceDetail.service[' + service.index + '].type') === 'card'">
        <ul class="card-wrap">
          <li
            v-for="(content, index) in $t(
              'serviceDetail.service[' + service.index + '].detail',
            )"
            :key="index"
          >
            <a :href="content.href" target="_blank" title="새창 이동">
              <div>
                <img :src="`${GOOGLE_STORAGE}${content.img}`" alt="" />
              </div>
              <h4 class="sub-title" :class="$t('class')">
                {{ content.title }}
              </h4>
              <p class="sub-desc" :class="$t('class')">
                {{ content.desc }}
              </p>
            </a>
          </li>
        </ul>
        <div class="area-btn-center" data-action="fixed-title">
          <a
            href="http://lab.pxd.co.kr/"
            target="_blank"
            :title="$t('class') === 'en' ? 'Move the new window' : '새창 이동'"
            :class="'btn-more-big ' + $t('class')"
          >
            <span>{{ $t('serviceDetail.service[' + service.index + '].button') }}</span>
          </a>
        </div>
      </template>
      <template v-else>
        <figure class="content-img">
          <img
            :src="
              $store.state.isMobile
                ? `${GOOGLE_STORAGE}${service.pageVisual.banner.mobile.img}`
                : `${GOOGLE_STORAGE}${service.pageVisual.banner.pc.img}`
            "
            alt=""
          />
          <figcaption v-if="service.pageVisual.banner.alt.type === 'list'" class="blind">
            <span>{{ service.pageVisual.banner.alt.content.title }}</span>
            <ul>
              <li
                v-for="(li, liIndex) in service.pageVisual.banner.alt.content.li"
                :key="liIndex"
              >
                {{ li.liContent }}
              </li>
            </ul>
          </figcaption>
          <figcaption v-else class="blind">
            {{ service.pageVisual.banner.alt.content }}
          </figcaption>
        </figure>
        <ul class="sub-box">
          <li
            v-for="(content, index) in $t(
              'serviceDetail.service[' + service.index + '].detail',
            )"
            :key="index"
            :class="$t('class')"
          >
            <h4 class="sub-title" :class="content.lang">
              {{ content.title }}
            </h4>
            <p class="sub-desc">
              {{ content.desc }}
            </p>
          </li>
        </ul>
        <div class="area-btn-center" data-action="fixed-title">
          <a
            href="mailto:info@pxd.co.kr"
            target="_blank"
            :title="$t('class') === 'en' ? 'Send a mail' : '메일 보내기'"
            :class="'btn-more-big ' + $t('class')"
          >
            <span>{{ $t('serviceDetail.service[' + service.index + '].button') }}</span>
          </a>
        </div>
      </template>
    </section>
  </main>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { services } from '~/static/data/service/index.js'
import { GOOGLE_STORAGE } from '~/static/utils'
import { titleAction } from '~/assets/js/textAction'

export default {
  name: 'ServiceId',
  asyncData({ params }) {
    const service = services.getService(params.id)
    return { service, GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: `${this.service.outVisual.title.main}`,
      description: `${this.service.meta.descripton}`,
      url: `${this.$route.path}`,
      image: `${this.service.outVisual.thumbnail}`,
    }
    return {
      title: `${this.service.outVisual.title.main} > Service > pxd`,
      meta: makeMeta(seoMeta),
    }
  },
  mounted() {
    const textElements = document.querySelectorAll("[data-action='action-title-y']")
    titleAction('y', textElements, 0.5, { default: 0.3, repeat: 0.2843 })
  },
  methods: {},
}
</script>
