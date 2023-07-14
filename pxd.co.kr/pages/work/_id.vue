<template>
  <main id="wrap" class="work-detail">
    <!-- visual 영역 -->
    <div
      class="work-visual"
      :class="work.slug"
      :style="'background: ' + work.pageVisual.cover.bgColor"
    >
      <figure class="cover-img" :class="work.pageVisual.cover.background">
        <img
          :src="`${GOOGLE_STORAGE}${
            pc ? work.pageVisual.cover.pc : work.pageVisual.cover.mobile
          }`"
          :alt="work.pageVisual.cover.alt"
        />
      </figure>
      <figure class="inform">
        <img
          :src="`${GOOGLE_STORAGE}${work.pageVisual.logo.img}`"
          :alt="work.pageVisual.logo.alt"
          class="logo"
        />
      </figure>
    </div>
    <!-- summary -->
    <div
      id="skipcontent"
      class="section-detail headline"
      :data-aos="work.summary.aos ? work.summary.aos.ani : ''"
      :data-aos-duration="work.summary.aos ? work.summary.aos.duration : ''"
      :data-aos-offset="work.summary.aos ? work.summary.aos.offset : ''"
    >
      <h3 class="title" :class="work.summary.title.lang">
        {{ work.summary.title.content }}
      </h3>
      <div class="summary">
        <dl>
          <dt>Year</dt>
          <dd>{{ work.summary.year }}</dd>
        </dl>
        <dl>
          <dt>Client</dt>
          <dd>{{ work.summary.client }}</dd>
        </dl>
        <dl>
          <dt>Services</dt>
          <dd>{{ work.summary.service }}</dd>
        </dl>
      </div>
    </div>
    <!-- content -->
    <div v-for="(detail, index) in work.desc" :key="index" class="section-content">
      <!-- text + image -->
      <div v-if="detail.title" class="section-detail txt-box">
        <h4
          v-if="detail.title.lang"
          :data-aos="detail.aos ? detail.aos.title : ''"
          :data-aos-duration="detail.aos ? detail.aos.duration : ''"
          :data-aos-offset="detail.aos ? detail.aos.offset : ''"
          class="sub-title"
        >
          {{ detail.title.content }}
        </h4>
        <h4
          v-else
          :data-aos="detail.aos ? detail.aos.title : ''"
          :data-aos-duration="detail.aos ? detail.aos.duration : ''"
          :data-aos-offset="detail.aos ? detail.aos.offset : ''"
          class="sub-title en"
        >
          {{ detail.title }}
        </h4>
        <p
          class="desc"
          :data-aos="detail.aos ? detail.aos.desc : ''"
          :data-aos-duration="detail.aos ? detail.aos.duration : ''"
          :data-aos-offset="detail.aos ? detail.aos.offset : ''"
        >
          {{ detail.desc }}
        </p>
      </div>
      <!-- title은 없고 desc만 있는 경우 -->
      <div v-else-if="!detail.title && detail.desc" class="section-detail txt-box">
        <p
          class="desc"
          :data-aos="detail.aos ? detail.aos.desc : ''"
          :data-aos-duration="detail.aos ? detail.aos.duration : ''"
          :data-aos-offset="detail.aos ? detail.aos.offset : ''"
        >
          {{ detail.desc }}
        </p>
      </div>
      <!-- all image -->
      <figure v-if="!detail.tag && detail.pc">
        <img
          :src="`${GOOGLE_STORAGE}${pc ? detail.pc.img : detail.mobile.img}`"
          alt=""
          :data-aos="detail.aos ? detail.aos.img : ''"
          :data-aos-duration="detail.aos ? detail.aos.duration : ''"
          :data-aos-offset="detail.aos ? detail.aos.offset : ''"
        />
        <!-- 대체 텍스트가 normal 경우 -->
        <figcaption v-if="detail.alt.type === 'normal'" class="blind">
          {{ detail.alt.content }}
        </figcaption>
        <!-- 대체 텍스트가 list 경우 -->
        <figcaption v-else-if="detail.alt.type === 'list'" class="blind">
          <h4 v-if="detail.alt.content.title">{{ detail.alt.content.title }}</h4>
          <p v-if="detail.alt.content.sub">{{ detail.alt.content.sub }}</p>
          <ul>
            <li v-for="(li, liIndex) in detail.alt.content.li" :key="liIndex">
              {{ li.liContent }}
            </li>
          </ul>
        </figcaption>
        <!-- 대체 텍스트가 title + desc 경우 -->
        <figcaption v-else-if="detail.alt.type === 'title'" class="blind">
          <h4>{{ detail.alt.content.title }}</h4>
          <p>{{ detail.alt.content.desc }}</p>
        </figcaption>
      </figure>
      <a
        v-else-if="detail.tag && detail.pc"
        :href="detail.href"
        target="_blank"
        title="새창 이동"
      >
        <img
          :src="`${GOOGLE_STORAGE}${pc ? detail.pc.img : detail.mobile.img}`"
          alt=""
          :data-aos="detail.aos ? detail.aos.img : ''"
          :data-aos-duration="detail.aos ? detail.aos.duration : ''"
          :data-aos-offset="detail.aos ? detail.aos.offset : ''"
        />
        <!-- 대체 텍스트가 normal 경우 -->
        <figcaption v-if="detail.alt.type === 'normal'" class="blind">
          {{ detail.alt.content }}
        </figcaption>
        <!-- 대체 텍스트가 list 경우 -->
        <figcaption v-else-if="detail.alt.type === 'list'" class="blind">
          <span>{{ detail.alt.content.title }}</span>
          <ul>
            <li v-for="(li, liIndex) in detail.alt.content.li" :key="liIndex">
              {{ li.liContent }}
            </li>
          </ul>
        </figcaption>
      </a>
    </div>
    <!-- Credits -->
    <div class="section-detail crs">
      <h4 class="credits">credits</h4>
      <ul class="list-credits">
        <li v-for="(credit, index) in work.credits" :key="index">
          <strong class="part">{{ credit.team }}</strong>
          <span>{{ credit.members }}</span>
        </li>
      </ul>
    </div>
    <!-- 다음글 -->
    <div v-if="next" class="section next">
      <div class="section-title">
        <strong class="title">Next Project</strong>
      </div>
      <!-- 잠금 상태 -->
      <div class="section-contents">
        <NuxtLink
          v-if="next.type.protect"
          :to="localePath(`/work/${next.slug}`)"
          role="button"
          :event="next.type.protect ? '' : 'click'"
          :title="next.type.protect ? '비밀번호 입력 팝업 열기' : '페이지 이동'"
          :class="next.type.bg ? 'bg' : ''"
          @click.native="slugToPopup(next)"
        >
          <figure
            class="cover-img"
            :class="next.slug"
            :style="'background: ' + next.pageVisual.cover.bgColor"
          >
            <img
              v-if="next.type.protect"
              :src="`${GOOGLE_STORAGE}` + 'ico_closed_04.png'"
              alt=""
              class="badge-detail"
            />
            <img
              :src="`${GOOGLE_STORAGE}${next.pageVisual.cover.pc}`"
              alt=""
              class="bg-img"
            />
          </figure>
          <p class="h4-desc" :class="next.outVisual.title.lang">
            <i v-if="next.type.protect" class="badge-ico"
              ><span class="blind">보호된 글</span></i
            >
            {{ next.outVisual.title.content }}
          </p>
        </NuxtLink>
        <NuxtLink
          v-else
          :to="localePath(`/work/${next.slug}`)"
          :event="next.type.protect ? '' : 'click'"
          :title="next.type.protect ? '비밀번호 입력 팝업 열기' : '페이지 이동'"
          @click.native="slugToPopup(work)"
        >
          <div
            class="cover-img"
            :class="next.slug"
            :style="'background: ' + next.pageVisual.cover.bgColor"
          >
            <img
              v-if="next.type.protect"
              :src="`${GOOGLE_STORAGE}` + 'ico_closed_04.png'"
              alt=""
              class="badge-detail"
            />
            <img
              :src="`${GOOGLE_STORAGE}${next.pageVisual.cover.pc}`"
              alt=""
              class="bg-img"
            />
          </div>
          <p class="h4-desc" :class="next.outVisual.title.lang">
            <i v-if="next.type.protect" class="badge-ico"
              ><span class="blind">보호된 글</span></i
            >
            {{ next.outVisual.title.content }}
          </p>
        </NuxtLink>
      </div>
    </div>
    <PasswordPopup v-if="onPopup" :slug="slug" @togglePopup="togglePopup" />
  </main>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { makeMeta } from '~/static/seo'
import { headerpoint } from '~/assets/js/headerColor.js'
import { works } from '~/static/data/work/index.js'
import { GOOGLE_STORAGE } from '~/static/utils'
import workMixin from '~/mixins/workMixin'

export default {
  name: 'WorkId',
  mixins: [workMixin],
  middleware({ store, redirect, params }) {
    // If the user is not authenticated
    const work = works.getWork(params.id)
    if (work.type.protect && store.state.workMiddleware) {
      return redirect('/work')
    }
  },
  asyncData({ params }) {
    const work = works.getWork(params.id)
    const next = works.getNext(params.id)
    const title = params.id
    return { work, next, GOOGLE_STORAGE, title }
  },
  data() {
    return {
      pc: true,
    }
  },
  head() {
    const seoMeta = {
      title: `${this.work.outVisual.title.content}`,
      description: `${this.work.desc[0].desc}`,
      url: `${this.$route.path}`,
      image: `${this.work.outVisual.thumbnail}`,
    }
    return {
      title: `${this.work.outVisual.title.content} > Works > pxd`,
      meta: makeMeta(seoMeta),
    }
  },
  mounted() {
    AOS.init()
    this.$store.commit('deviceCheck')
    this.pcCheck()
    // window.addEventListener('load', this.pcCheck)
    window.addEventListener('resize', this.pcCheck)
    this.headerColor()
  },
  methods: {
    // 반응형
    pcCheck() {
      if (window.innerWidth < 769) {
        this.pc = false
      } else {
        this.pc = true
      }
    },
    headerColor() {
      headerpoint(this.work.headerType)
    },
  },
}
</script>
