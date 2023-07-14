<template>
  <main id="wrap" class="work">
    <Title language :class="$t('class')">
      <template #title1>{{ $t('work.title1') }}</template>
      <template #title2>{{ $t('work.title2') }}</template>
    </Title>
    <div id="skipcontent" class="content">
      <div v-if="!$store.state.isMobile" class="margin" style="width: 100%">
        <strong class="blind">카테고리 목록</strong>
        <span class="blind">버튼 선택 시 해당 카테고리 내용으로 재정렬</span>
        <ul class="tab-list-wrap">
          <li v-for="(item, index) in category" :key="index" class="tab-list">
            <button
              type="button"
              :data-value="item.value"
              :tabindex="item.tabindex"
              class="tab-list-item"
              :class="selectName === item.value ? 'active' : ''"
              @click="pcSelectSubject"
            >
              <span v-if="item.aria === 'true'" class="blind">선택됨</span>
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
      <div v-else class="margin select">
        <label for="workList" class="blind">포트폴리오 항목 바로가기</label>
        <select id="workList" @change="moSelectSubject">
          <option
            v-for="(item, index) in category"
            :key="index"
            :data-value="item.value"
            :tabindex="item.tabindex"
            class="tab-list-item"
            :class="item.class"
            :selected="selectName === item.value ? true : false"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="margin section-grid">
        <div v-if="!$store.state.isMobile" class="section-title-wrap">
          <strong class="section-title" data-action="fixed-title">{{
            subjectName
          }}</strong>
        </div>
        <div class="section-contents" @keydown.tab="focusMove">
          <ul class="card-wrap1 tab-item-wrap">
            <li
              v-for="(work, index) in works"
              :key="index"
              :data-group="work.category"
              data-action="reveal-content"
              class="tab-item active"
              aria-hidden="false"
            >
              <NuxtLink
                v-if="work.type.protect"
                :to="localePath(`/work/${work.slug}`)"
                role="button"
                :event="work.type.protect ? '' : 'click'"
                :title="work.type.protect ? '비밀번호 입력 팝업 열기' : '페이지 이동'"
                @click.native="slugToPopup(work)"
              >
                <CardType01
                  :card01-img="work.outVisual.thumbnail"
                  :card01-title="work.outVisual.title.content"
                  :card01-desc="work.outVisual.client"
                  :show="!work.type.protect"
                />
              </NuxtLink>
              <NuxtLink
                v-else
                :to="localePath(`/work/${work.slug}`)"
                :event="work.type.protect ? '' : 'click'"
                :title="work.type.protect ? '비밀번호 입력 팝업 열기' : '페이지 이동'"
                @click.native="slugToPopup(work)"
              >
                <CardType01
                  :card01-img="work.outVisual.thumbnail"
                  :card01-title="work.outVisual.title.content"
                  :card01-desc="work.outVisual.client"
                  :show="!work.type.protect"
                />
              </NuxtLink>
            </li>
          </ul>
          <Button
            v-if="subjectName === 'All'"
            type="button"
            data-action="fixed-title"
            @btnEvent="moreContent"
          />
        </div>
      </div>
    </div>
    <PasswordPopup v-if="onPopup" :slug="slug" @togglePopup="togglePopup" />
  </main>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { contentAction } from '~/assets/js/textAction'
import { filterEvent, focusMoveList } from '~/assets/js/tab'
import { works as data } from '~/static/data/work/index.js'
import { morBtnEvent, moreBtnDefalut } from '~/assets/js/moreBtn'
import workMixin from '~/mixins/workMixin'

export default {
  name: 'Work',
  mixins: [workMixin],
  asyncData() {
    const works = data.values
    return { works }
  },
  data() {
    return {
      cardTitle: '포트폴리오 바로가기',
      category: [
        { value: 'all', name: 'All', aria: 'true', tabindex: '0', class: 'active' },
        {
          value: 'aiRobotics',
          name: 'AI & Robotics',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'autoMobility',
          name: 'Auto & Mobility',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'backEnd',
          name: 'Back-End',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        { value: 'b2b', name: 'B2B', aria: 'false', tabindex: '0', class: '' },
        {
          value: 'commerce',
          name: 'Commerce',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'dataAnalysis',
          name: 'Data Analysis',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        { value: 'ebook', name: 'eBook', aria: 'false', tabindex: '0', class: '' },
        {
          value: 'education',
          name: 'Education',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        { value: 'etc', name: 'etc', aria: 'false', tabindex: '0', class: '' },
        {
          value: 'frontEnd',
          name: 'Front-End',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'financialService',
          name: 'Financial Service',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'guideline',
          name: 'Guideline',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'healthcare',
          name: 'Healthcare',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'insurance',
          name: 'Insurance',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        { value: 'iot', name: 'IoT', aria: 'false', tabindex: '0', class: '' },
        {
          value: 'mobileService',
          name: 'Mobile Service',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'promotion',
          name: 'Promotion',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'retail',
          name: 'Retail',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        { value: 'sns', name: 'SNS', aria: 'false', tabindex: '0', class: '' },
        { value: 'space', name: 'Space', aria: 'false', tabindex: '0', class: '' },
        {
          value: 'startUp',
          name: 'Start Up',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'tvMediaVod',
          name: 'TV/Media/VOD',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'uiDevelop',
          name: 'UI Develop',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'usabilityTest',
          name: 'Usability Test',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'userResearch',
          name: 'User Research / Survey',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'voiceUx',
          name: 'Voice UX',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
        {
          value: 'wearable',
          name: 'Wearable',
          aria: 'false',
          tabindex: '0',
          class: '',
        },
      ],
      subjectName: 'All',
      slug: '',
      selectName: 'all',
    }
  },
  head() {
    const seoMeta = {
      title: 'pxd Work',
      description: '비즈니스와 기술에 대한 통찰력 있는 이해로부터 해법을 만듭니다.',
      url: `${this.$route.path}`,
    }
    return {
      title: 'Work > pxd',
      meta: makeMeta(seoMeta),
    }
  },

  mounted() {
    // 더보기 목록 초기 개수()를 입력
    setTimeout(() => {
      moreBtnDefalut(12)
    }, 50)
    // scroll animation
    contentAction('load', null)
    window.addEventListener('scroll', function () {
      contentAction('scroll', window.pageYOffset)
    })
    setTimeout(() => {
      window.addEventListener('resize', this.widthLoad())
    }, 50)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.widthLoad())
    window.removeEventListener('scroll', function () {
      contentAction('scroll', window.pageYOffset)
    })
  },
  methods: {
    pcSelectSubject(event) {
      filterEvent(event)
      this.subjectName = event.target.innerText.split('\n')[0]
      if (this.subjectName === 'All') {
        moreBtnDefalut(12)
      }
      this.selectName = event.target.dataset.value
    },
    moSelectSubject(event) {
      filterEvent(event)
      this.subjectName =
        event.target[event.target.options.selectedIndex].innerText.split('\n')[1]

      if (this.subjectName === 'All') {
        moreBtnDefalut(12)
      }
      this.selectName = event.target[event.target.options.selectedIndex].dataset.value
      this.widthChange()
    },
    focusMove(event) {
      if (event.shiftKey) {
        focusMoveList()
      }
    },
    moreContent() {
      // 추가로 보여질 목록의 수()
      morBtnEvent(12)
      contentAction('more', null)
    },
    widthChange() {
      const selectWrap = document.querySelector('.select')
      const targetLength =
        event.target[event.target.options.selectedIndex].innerText.split('\n')[1].length -
        10
      if (targetLength === 3) {
        selectWrap.style.width = '74px'
      } else if (targetLength === 5 || targetLength === 8) {
        selectWrap.style.width = targetLength * 14 + 30 + 'px'
      } else if (targetLength === 9 || targetLength === 12) {
        selectWrap.style.width = targetLength * 14 + 15 + 'px'
      } else {
        selectWrap.style.width = targetLength * 14 + 'px'
      }
    },
    widthLoad() {
      if (window.innerWidth < 769) {
        const selectWrap = document.querySelector('.select')
        const targetLength = this.subjectName.length
        if (targetLength === 3) {
          selectWrap.style.width = '74px'
        } else if (targetLength === 5 || targetLength === 8) {
          selectWrap.style.width = targetLength * 14 + 30 + 'px'
        } else if (targetLength === 9 || targetLength === 12) {
          selectWrap.style.width = targetLength * 14 + 15 + 'px'
        } else {
          selectWrap.style.width = targetLength * 14 + 'px'
        }
      }
    },
  },
}
</script>
