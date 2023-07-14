<template>
  <main id="wrap" class="jobs">
    <Title language>
      <template #title1>{{ $t('jobs.title1') }}</template>
      <template #title2>{{ $t('jobs.title2') }}</template>
    </Title>
    <div class="area-visual-work">
      <img :src="`${GOOGLE_STORAGE}img_visual_jobs.png`" alt="" />
    </div>
    <section id="skipcontent" class="content">
      <div class="margin section-grid">
        <div class="section-title-wrap">
          <h3 class="section-title" data-action="fixed-title">Recruitment</h3>
        </div>
        <div class="section-contents">
          <div class="tab-sorting-list recruit">
            <!-- [data-content] : sorting 필수 속성 -->
            <button
              v-for="(item, index) in sortDatas"
              :key="index"
              type="button"
              :data-content="item.type"
              :class="item.selected === 'true' ? 'active' : ''"
              @click="onSorting($event, index)"
            >
              <span v-if="item.selected === 'true'" class="blind">선택됨</span>
              {{ item.process }}
              <sup>{{ item.length }}</sup>
            </button>
          </div>
          <div class="tab-sorting-container">
            <ul class="wrap-notice">
              <li v-if="recruitList.length === 0">
                <div class="notice-content" data-accord="panel">
                  <div class="" style="padding: 150px 0; text-align: center">
                    채용 공고가 없습니다.
                  </div>
                </div>
              </li>
              <li
                v-for="(value, index) in recruitList"
                :key="index"
                :data-index="index"
                data-accord="item close"
                data-content-name="always-on-recruitment"
              >
                <strong class="notice-button" data-accord="button" @click="accordion">
                  <button aria-expanded="false" :aria-controls="`job` + index">
                    <span class="process">
                      <span v-if="value.gubun == 0">상시</span>
                      <span v-else-if="value.gubun == 1">공채</span>
                    </span>
                    <span class="title">
                      <!-- 추후 back-end 변경 후 group이 없는 경우 group v-if처리, 현재는 인턴만 예외처리 -->
                      <template v-if="value.title.indexOf('인턴') >= 0">
                        <span class="role">{{ value.title }}</span>
                      </template>
                      <template v-else>
                        <span class="group">{{ value.title.substr(0, 6) }}</span>
                        <span class="role">{{ value.title.substr(7) }}</span>
                      </template>
                    </span>
                    <span class="period">
                      <span v-if="value.gubun == 0">채용 시 마감</span>
                      <span v-if="value.gubun == 1">{{ value.start_date }} ~ </span>
                      <span v-if="value.gubun == 1">{{ value.end_date }}</span>
                    </span>
                  </button>
                </strong>
                <div
                  :id="`job` + index"
                  class="notice-content"
                  data-accord="panel"
                  aria-hidden="true"
                >
                  <!-- eslint-disable -->
                  <div class="" v-html="value.content"></div>
                  <!-- eslint-disable -->
                  <div class="area-btn download">
                    <NuxtLink
                      :to="{ name: 'jobs-id___ko', params: { id: value.id } }"
                      title="페이지 이동"
                      class="button ga-resume"
                      tabindex="-1"
                      >지원하기</NuxtLink
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="margin section-grid">
        <div class="section-title-wrap">
          <h3 class="section-title" data-action="fixed-title">Related Articles</h3>
        </div>
        <div class="section-contents">
          <p class="h4-desc type-large" :class="$t('class')">
            {{ $t('jobs.related') }}
          </p>
          <ul class="card-wrap1 tab-item-wrap">
            <li
              v-for="(story, index) in blogData"
              :key="index"
              data-action="reveal-content"
              class="card-type1 tab-item active"
            >
              <CardType01
                title="새창 이동"
                :outer-link="true"
                :out-route="story.route"
                :open-frame="keyFrame"
                :card01-img="`img_jobs_0${[index + 1]}.png`"
                :card01-title="story.title"
                :card01-desc="story.desc"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="margin">
        <p class="t-type1">
          모든 질문 사항은
          <a href="mailto:info@pxd.co.kr" title="메일 보내기">job@pxd.co.kr</a>로
          보내주시기 바랍니다.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { textAction } from '~/assets/js/textAction.js'
import { stikyTitle } from '~/assets/js/stickyTitle.js'
import { GOOGLE_STORAGE } from '~/static/utils'

export default {
  name: 'Jobs',
  asyncData() {
    return { GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: 'pxd Jobs',
      description: 'pxd와 함께 사람을 행복하게 하는 디자인을 하실 분을 기다립니다.',
      url: `${this.$route.path}`,
    }
    return {
      title: 'Jobs > pxd',
      meta: makeMeta(seoMeta),
    }
  },
  data() {
    return {
      sortDatas: [
        { process: '전체', type: 'data-all', selected: 'true', length: 0 },
        { process: '공채', type: 'open-recruitment', selected: 'false', length: 0 },
        { process: '상시', type: 'always-on-recruitment', selected: 'false', length: 0 },
      ],
      recruitList: [], // 공고 기본 목록
      totalList: [], // 전체
      openList: [], // 공채
      alwaysList: [], // 상시
      accItem: [], // 아코디언 목록
      accButton: [], // 아코디언 버튼
      testMode: true, // location 확인
      apiUrl: '', // api 주소
      // url 관련
      newURL: '',
      accIndex: 0, // 아코디언 index 초기값
      queryIndex: 0, // url query index 초기값
      renewURL: '',
      // scroll 관련
      windowWidth: 0,
      headerHeight: 0,
      itemPositions: [], // 아코디언 menu 별 위치값
      // related articles 관련
      keyFrame: '_blank', // 새창 띄우기
      blogData: [
        {
          route: 'https://story.pxd.co.kr/696?category=158764',
          title: '디자인 비전공자로 UX하기',
          desc: 'UI 가벼운 이야기・May 28. 2013',
        },
        {
          route: 'https://story.pxd.co.kr/1266?category=158765',
          title: 'pxd에서 GUI 디자이너로 일하기',
          desc: 'GUI 가벼운 이야기・Oct 25. 2017',
        },
        {
          route: 'https://story.pxd.co.kr/1295?category=158772',
          title: 'HCI KOREA 2018 참관 후기 (2/3)',
          desc: 'pxd 다이어리 & 소소한 이야기・Feb 9. 2018',
        },
        {
          route: 'https://story.pxd.co.kr/388',
          title: '키스크린(Key Screens)이 나오기까지의 과정',
          desc: 'pxd 다이어리 & 소소한 이야기・Jun 30. 2011',
        },
        {
          route: 'https://story.pxd.co.kr/1035',
          title: 'pxd Annual Essay 2014 제작',
          desc: 'pxd 다이어리 & 소소한 이야기・Mar 18. 2015',
        },
        {
          route: 'https://story.pxd.co.kr/651',
          title: 'pxd ANNUAL STORY 제작기',
          desc: 'pxd 다이어리 & 소소한 이야기・Feb 28. 2013',
        },
      ],
    }
  },
  head() {
    return {
      title: `jobs > pxd`,
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.lists
    },
  },
  mounted() {
    // location 불러오기
    this.$store.dispatch('jobs/getLists')
    this.newURL = document.location.href

    window.onresize = () => {
      if (this.windowWidth !== window.innerWidth) {
        this.windowWidth = window.innerWidth
        this.headerHeight = document.querySelector('header').clientHeight
        this.itemPositions = []

        for (let k = 0; k < this.accButton.length; k++) {
          this.itemPositions.push(
            this.accButton[0].getBoundingClientRect().top +
              window.pageYOffset +
              k * this.accButton[0].clientHeight,
          )
        }
      }
    }
    // 메인 타이틀 애니메이션
    textAction('load', null)
    // 블로그 글 목록 애니메이션
    window.addEventListener('scroll', function () {
      const scrollPosition = window.pageYOffset
      textAction('scroll', scrollPosition)
    })
    this.getRecruitList()
  },
  updated() {
    this.accItem = document.querySelectorAll('li[data-accord="item close"]')
    this.accButton = document.querySelectorAll('li [data-accord="button"]')

    this.windowWidth = window.innerWidth
    this.headerHeight = document.querySelector('header').clientHeight

    if (document.location.href.includes('idx')) {
      this.queryIndex = this.accodQueryIndex('idx')
    }

    for (let k = 0; k < this.accButton.length; k++) {
      this.itemPositions.push(
        this.accButton[0].getBoundingClientRect().top +
          window.pageYOffset +
          k * this.accButton[0].clientHeight,
      )
    }

    if (this.queryIndex !== undefined) {
      for (let l = 0; l < this.accItem.length; l++) {
        if (this.accItem[l].getAttribute('data-index') === this.queryIndex) {
          this.accItem[l].setAttribute('data-accord', 'item open')
        }
      }
      // document.documentElement.scrollTop =
      //   this.itemPositions[this.queryIndex] - this.headerHeight
    }
    setTimeout(() => {
      stikyTitle(true)
    }, 100)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', textAction)
  },
  methods: {
    // 채용목록 불러오기
    getRecruitList() {
      const location =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:4000/boardListAll'
          : process.env.serverUrl + 'boardListAll'

      this.$axios
        .get(location)
        .then((res) => {
          this.recruitList = res.data.result.boardList
          let alwaysList = []
          let openList = []

          // 공고별로 목록 나누기
          if (this.recruitList.length > 0) {
            this.recruitList.forEach((data) => {
              switch (Number(data.gubun)) {
                case 0:
                  alwaysList = this.recruitList.map((list) => {
                    return list
                  })
                  break
                case 1:
                  openList = this.recruitList.map((list) => {
                    return list
                  })
                  break
                default:
                  break
              }
            })
            this.alwaysList = alwaysList
            this.openList = openList
            this.totalList = this.recruitList

            this.sortDatas.forEach((sortData, index) => {
              if (index === 1) {
                sortData.length = openList.length
                return
              }
              if (index === 2) {
                sortData.length = alwaysList.length
                return
              }
              sortData.length = this.recruitList.length
            })
          }
        })
        .catch((err) => console.log('err', err))
    },
    // accordion action
    accordion(e) {
      const li = e.currentTarget.parentNode
      const itemClass = li.getAttribute('data-accord')

      for (let j = 0; j < this.accItem.length; j++) {
        this.accItem[j].setAttribute('data-accord', 'item close')
        this.accItem[j].querySelector('button').setAttribute('aria-expanded', false)
        this.accItem[j].querySelector('.button').setAttribute('tabindex', '-1')
        this.accItem[j].querySelector('.notice-content').setAttribute('aria-hidden', true)
        if (this.renewURL !== '') {
          this.renewURL = this.renewURL.replace(/\?idx=([0-9]+)/gi, '')
          history.pushState(null, null, this.renewURL)
        }
      }
      if (itemClass === 'item close') {
        li.setAttribute('data-accord', 'item open')
        li.querySelector('button').setAttribute('aria-expanded', true)
        li.querySelector('.button').setAttribute('tabindex', '0')
        li.querySelector('.notice-content').setAttribute('aria-hidden', false)
        this.accIndex = li.getAttribute('data-index') // open index get
        if (typeof history.pushState === 'function') {
          this.renewURL = this.newURL
          this.renewURL = this.renewURL.replace(/\?idx=([0-9]+)/gi, '')
          this.renewURL += '?idx=' + this.accIndex
          history.pushState(null, null, this.renewURL)
        }
        clearTimeout(this.openMoveAcco)
        this.openMoveAcco()
      } else if (itemClass === 'item close done') {
        li.setAttribute('data-accord', 'item close done')
      }

      setTimeout(() => {
        stikyTitle(true)
      }, 100)
    },
    openMoveAcco() {
      setTimeout(() => {
        this.doScrolling(this.itemPositions[this.accIndex] - 100, 200)
      }, 250)
    },
    doScrolling(elementY, duration) {
      const startingY = window.pageYOffset
      const diff = elementY - startingY
      let start
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp

        const time = timestamp - start
        const percent = Math.min(time / duration, 1)

        window.scrollTo(0, startingY + diff * percent)

        if (time < duration) {
          window.requestAnimationFrame(step)
        }
      })
    },
    accodQueryIndex(paramName) {
      const _currentUrl = window.location.search.substring(1)
      const _queryIndex = _currentUrl.split('=')

      if (_queryIndex[0] === paramName) {
        return _queryIndex[1]
      }
    },
    // sorting event
    onSorting(e, index) {
      // 대체 텍스트
      const span = document.createElement('span')
      const text = document.createTextNode('선택됨')
      span.appendChild(text)
      span.classList.add('blind')

      // 공채(open)
      if (index === 1) {
        const el = e.target
        document.querySelectorAll('*[data-content]').forEach(function (v) {
          v.classList.remove('active')
          if (v.querySelector('.blind')) {
            v.querySelector('.blind').remove()
          }
        })
        document.querySelectorAll('li[data-accord]').forEach(function (v) {
          v.setAttribute('data-accord', 'item close')
        })
        el.classList.add('active')
        el.appendChild(span)
        this.recruitList = this.openList
        return
      }
      // 상시(always)
      if (index === 2) {
        const el = e.target
        document.querySelectorAll('*[data-content]').forEach(function (v) {
          v.classList.remove('active')
          if (v.querySelector('.blind')) {
            v.querySelector('.blind').remove()
          }
        })
        document.querySelectorAll('li[data-accord]').forEach(function (v) {
          v.setAttribute('data-accord', 'item close')
        })
        if (this.renewURL !== '') {
          this.renewURL = this.renewURL.replace(/\?idx=([0-9]+)/gi, '')
          history.pushState(null, null, this.renewURL)
        }
        el.classList.add('active')
        el.appendChild(span)
        this.recruitList = this.alwaysList
        return
      }
      // 전체(total)
      const el = e.target
      document.querySelectorAll('*[data-content]').forEach(function (v) {
        v.classList.remove('active')
        if (v.querySelector('.blind')) {
          v.querySelector('.blind').remove()
        }
      })
      document.querySelectorAll('li[data-accord]').forEach(function (v) {
        v.setAttribute('data-accord', 'item close')
      })
      if (this.renewURL !== '') {
        this.renewURL = this.renewURL.replace(/\?idx=([0-9]+)/gi, '')
        history.pushState(null, null, this.renewURL)
      }
      el.classList.add('active')
      el.appendChild(span)
      this.recruitList = this.totalList
    },
  },
}
</script>
