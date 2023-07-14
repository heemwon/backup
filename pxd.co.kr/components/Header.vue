<template>
  <!--헤더-->
  <header
    :data-header="
      (title.split('/')[1] === 'en' && !title.split('/')[3]) ||
      !title.split('/')[2] ||
      title.split('/')[1] === 'jobs'
        ? ''
        : 'bg-transparent'
    "
    :class="
      (title.split('/')[1] === 'en' && !title.split('/')[3]) ||
      !title.split('/')[2] ||
      title.split('/')[1] === 'jobs'
        ? ''
        : 'transparent'
    "
  >
    <div class="inner-header">
      <!--헤더 이너-->
      <h1 class="logo">
        <NuxtLink :to="localePath('/')" title="pxd 홈으로 이동">
          <span class="blind">pxd</span>
        </NuxtLink>
      </h1>
      <h2
        v-if="
          ($store.state.language === 'ko' && getTitle) ||
          ($store.state.language === 'en' && getTitle)
        "
        class="title"
      >
        {{ getTitle }}
      </h2>
      <strong v-else class="title">Innovative Design Consulting Group</strong>
      <button
        type="button"
        aria-controls="header-inner"
        aria-haspopup="true"
        aria-expanded="false"
        class="btn-menu"
        title="메뉴 팝업 열림"
        @click="hambOpen()"
        @focus="hambClose()"
      >
        <span class="blind">활성화</span>
        <span class="icon-bar bar-top"></span>
        <span class="icon-bar bar-mid"></span>
        <span class="icon-bar bar-bottom"></span>
      </button>
    </div>
    <div v-if="gnbOpen" id="header-inner" v-scroll-lock="gnbOpen" class="wrap-nav">
      <!--검은 화면 메뉴-->
      <div class="inner-nav">
        <h2 class="blind gnb-title" tabindex="0">Menu Popup</h2>
        <!--이너-->
        <div v-if="!$store.state.isMobile" class="logo" data-action="action-title-x">
          <nuxt-link
            class="btn"
            title="pxd 홈으로 이동"
            :to="localePath('/')"
            tag="button"
          >
            <span class="blind">pxd</span>
          </nuxt-link>
        </div>
        <ul class="wrap-languge" data-action="action-title-x">
          <li>
            <button
              title="영문 페이지 이동"
              :class="$store.state.language === 'en' ? 'active' : ''"
              @click.stop="languageChek('en')"
            >
              ENG
            </button>
          </li>
          <li>
            <button
              title="국문 페이지 이동"
              :class="$store.state.language === 'ko' ? 'active' : ''"
              @click.stop="languageChek('ko')"
            >
              KOR
            </button>
          </li>
        </ul>
        <div class="wrap-inner">
          <!--하단부분-->
          <div class="wrap-info pc-view" data-action="action-title-x">
            <dl>
              <dt>Our Address</dt>
              <dd>
                <address :class="$t('class')">
                  <span v-if="$t('class') === 'ko'" class="blind">{{
                    $t('footer.blind1')
                  }}</span
                  ><span v-if="$t('class') === 'ko'" class="address-num">{{
                    $t('footer.office1')
                  }}</span>
                  <span class="blind">{{ $t('footer.blind2') }}</span
                  >{{ $t('footer.office2') }}
                </address>
              </dd>
              <dt>Contact Us</dt>
              <dd>
                <a href="mailto:info@pxd.co.kr" class="underline" title="메일 보내기"
                  >info @ pxd.co.kr</a
                >
              </dd>
              <dd>
                <a href="tel:025432951" title="전화걸기">02-543-2951</a>
              </dd>
              <dt>Network</dt>
              <dd>
                <a
                  href="https://story.pxd.co.kr/"
                  target="_blank"
                  title="새창 이동"
                  class="ga-blog"
                  data-ga="nav-blog"
                >
                  <strong data-action="action-text">pxd Story</strong>
                </a>
              </dd>
              <dd>
                <a
                  href="https://pxd-fed-blog.web.app/"
                  rel="noopener"
                  target="_blank"
                  title="새창 이동"
                  class="ga-blog"
                  data-ga="footer-blog"
                  >XE Group</a
                >
              </dd>
              <dd>
                <a
                  href="http://lab.pxd.co.kr/"
                  target="_blank"
                  title="새창 이동"
                  class="ga-ux-lab"
                  data-ga="nav-ux-lab"
                >
                  <strong data-action="action-text">UX Tech Lab</strong>
                </a>
              </dd>
              <dd>
                <a
                  href="http://www.ixpatterns.com/About_IX_patterns"
                  target="_blank"
                  title="새창 이동"
                >
                  <strong data-action="action-text">ix pattern’s library</strong>
                </a>
              </dd>
              <dd>
                <a href="http://open.pxd.co.kr/" target="_blank" title="새창 이동">
                  <strong data-action="action-text">pxd open</strong>
                </a>
              </dd>
            </dl>
            <div class="wrap-gnb-sns">
              <a
                href="https://twitter.com/pxdstory"
                target="_blank"
                title="새창 이동"
                class="btn-twitter"
              >
                <span class="blind">twitter</span>
              </a>
              <a
                href="https://ko-kr.facebook.com/pxdstory/"
                target="_blank"
                title="새창 이동"
                class="btn-facebook ga-facebook"
                data-ga="nav-facebook"
              >
                <span class="blind">facebook</span>
              </a>
              <a
                href="https://www.instagram.com/pxd.people/"
                target="_blank"
                title="새창 이동"
                class="btn-instagram ga-instargram"
                data-ga="nav-instargram"
              >
                <span class="blind">instagram</span>
              </a>
            </div>
          </div>
          <nav>
            <!-- .ga-*, data-ga="dataVal" : GA 클릭 이벤트 식별자 관련 README.md 참고 -->
            <nuxt-link
              v-if="$store.state.isMobile"
              class="task mobile-view"
              :class="getTitle === '' ? 'active' : ''"
              :disabled="getTitle === '' ? true : false"
              :aria-current="getTitle === '' ? 'page' : ''"
              :title="getTitle === '' ? '현재 페이지' : 'pxd 홈으로 이동'"
              data-action="action-title-y"
              :to="localePath('/')"
              tag="button"
            >
              <strong data-action="action-text">Home</strong>
            </nuxt-link>
            <!-- work 메뉴-->
            <nuxt-link
              class="task ga-work"
              data-ga="nav-work"
              data-action="action-title-y"
              :aria-current="getTitle === 'work' ? 'page' : ''"
              :class="getTitle === 'work' ? 'active' : ''"
              :disabled="getTitle === 'work' ? true : false"
              :title="getTitle === 'work' ? '현재 페이지' : '페이지 이동'"
              :to="localePath('/work')"
              tag="button"
            >
              <strong data-action="action-text">Work</strong>
            </nuxt-link>
            <!-- story 메뉴-->
            <nuxt-link
              class="task ga-story"
              data-ga="nav-story"
              data-action="action-title-y"
              :aria-current="getTitle === 'story' ? 'page' : ''"
              :class="getTitle === 'story' ? 'active' : ''"
              :disabled="getTitle === 'story' ? true : false"
              :title="getTitle === 'story' ? '현재 페이지' : '페이지 이동'"
              :to="localePath('/story')"
              tag="button"
            >
              <strong data-action="action-text">Story</strong>
            </nuxt-link>
            <!-- service 메뉴-->
            <nuxt-link
              class="task ga-service"
              data-ga="nav-service"
              data-action="action-title-y"
              :aria-current="getTitle === 'service' ? 'page' : ''"
              :class="getTitle === 'service' ? 'active' : ''"
              :disabled="getTitle === 'service' ? true : false"
              :title="getTitle === 'service' ? '현재 페이지' : '페이지 이동'"
              :to="localePath('/service')"
              tag="button"
            >
              <strong data-action="action-text">Service</strong>
            </nuxt-link>
            <!-- people 메뉴-->
            <nuxt-link
              class="extra ga-people"
              data-ga="nav-people"
              data-action="action-title-y"
              :aria-current="getTitle === 'people' ? 'page' : ''"
              :class="getTitle === 'people' ? 'active' : ''"
              :disabled="getTitle === 'people' ? true : false"
              :title="getTitle === 'people' ? '현재 페이지' : '페이지 이동'"
              :to="localePath('/people')"
              tag="button"
            >
              <strong data-action="action-text">People</strong>
            </nuxt-link>
            <!-- contact 메뉴-->
            <nuxt-link
              class="extra ga-contact"
              data-ga="nav-contact"
              data-action="action-title-y"
              :aria-current="getTitle === 'contact' ? 'page' : ''"
              :class="getTitle === 'contact' ? 'active' : ''"
              :disabled="getTitle === 'contact' ? true : false"
              :title="getTitle === 'contact' ? '현재 페이지' : '페이지 이동'"
              :to="localePath('/contact')"
              tag="button"
            >
              <strong data-action="action-text">Contact</strong>
            </nuxt-link>
            <!-- Jobs 메뉴-->
            <nuxt-link
              class="extra ga-jobs"
              data-ga="nav-jobs"
              data-action="action-title-y"
              :aria-current="getTitle === 'jobs' ? 'page' : ''"
              :class="getTitle === 'jobs' ? 'active' : ''"
              :disabled="getTitle === 'jobs' ? true : false"
              :title="getTitle === 'jobs' ? '현재 페이지' : '페이지 이동'"
              :to="localePath('/jobs')"
              tag="button"
            >
              <strong data-action="action-text">Jobs</strong>
            </nuxt-link>
          </nav>
        </div>
        <button
          title="포커스 아웃시 팝업닫기"
          class="btn-close"
          @click="hambClose()"
          @keydown.tab="hambKeyClose()"
        >
          <span class="blind">비활성화</span>
          <span class="icon-bar bar-top"></span>
          <span class="icon-bar bar-bottom"></span>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import { directive } from 'vue-body-scroll-lock';
import { menuAction, popClosedAction, headerScrollAction } from '~/assets/js/header.js'
import { stikyTitle } from '~/assets/js/stickyTitle.js'

export default {
  name: 'Header',
  directives: {
    scrollLock: directive,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['title'],
  data() {
    return {
      gnbOpen: false,
    }
  },
  computed: {
    getTitle() {
      // return 'hello'
      if (this.title.split('#')) {
        if (this.title.split('#')[0].includes('jobs')) {
          return 'jobs'
        } else {
          if (this.$store.state.language === 'en') {
            if (this.title.split('#')[0].split('/')[2] === undefined) {
              return ''
            }
            return this.title.split('#')[0].split('/')[2]
          }
          return this.title.split('#')[0].split('/')[1]
        }
      } else {
        return this.title.includes('jobs') ? 'jobs' : this.title.split('/')[1]
      }
    },
  },
  watch: {
    $route() {
      // 라우트감지 영역
      // 라우트 이동 gnb 초기화
      this.hambClose()
      // 스크롤 초기화
      // eslint-disable-next-line prefer-const
      // 라우트감지 메인 및 서브페이지 헤더 구분
      this.$nextTick(() => {
        window.scrollTo(0, 0)
        headerScrollAction(0, 0, 'load')
        stikyTitle()
      })
    },
  },
  mounted() {
    let scrollPosition = window.pageYOffset
    const headerWrap = document.querySelector('header')
    let scrollPrev = 0
    // 헤더스크롤 로드
    window.addEventListener('scroll', function () {
      scrollPosition = window.pageYOffset
      // Header 인터랙션
      !!headerWrap && headerScrollAction(scrollPosition, scrollPrev)
      scrollPrev = scrollPosition
    })
  },
  methods: {
    hambOpen() {
      this.gnbOpen = true
      this.$nextTick(() => {
        // document.body.classList.add('hidden')
        setTimeout(() => {
          menuAction()
        }, 50)
      })
    },
    hambClose() {
      if (this.gnbOpen) {
        const wrapNav = document.querySelector('.wrap-nav')
        popClosedAction()
        if (wrapNav) {
          wrapNav.addEventListener('transitionend', () => {
            this.gnbOpen = false
          })
        }
      }
    },
    hambKeyClose() {
      const wrapNav = document.querySelector('.wrap-nav')
      if (!event.shiftKey) {
        popClosedAction()
        if (wrapNav) {
          wrapNav.addEventListener('transitionend', () => {
            this.gnbOpen = false
          })
        }
      }
    },
    languageChek(lang) {
      this.$i18n.setLocale(lang)
      this.$store.commit('languageCheck', lang)
    },
    routeCheck(url) {
      this.$router.push(url)
    },
  },
}
</script>
