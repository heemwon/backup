<template>
  <div class="main_menu_list">
    <ul class="list-menu-explain">
      <!-- .ga-*, data-ga="dataVal" : GA 클릭 이벤트 식별자 관련 README.md 참고 -->
      <li class="list-service">
        <NuxtLink
          :to="localePath('/service')"
          class="ani-service ga-service"
          data-ga="main-service"
        >
          <div @mouseenter="play" @mouseleave="stop">
            <div class="ico-animation ani-img-service">
              <lottie :options="lottieOptions.first" @animCreated="handleAnimation" />
            </div>
            <div class="ico-animation ani-img-service"></div>
            <p class="list-title">
              <strong data-action="action-text">Service</strong>
            </p>
          </div>
          <p class="explain" :class="$t('class')">{{ $t('main.menulist.msg1') }}</p>
        </NuxtLink>
      </li>

      <li class="list-work">
        <NuxtLink :to="localePath('/work')" class="ani-work ga-work" data-ga="main-work">
          <div @mouseenter="play2" @mouseleave="stop2">
            <div class="ico-animation ani-img-work">
              <lottie :options="lottieOptions.second" @animCreated="handleAnimation2" />
            </div>
            <p class="list-title">
              <strong data-action="action-text">Work</strong>
            </p>
          </div>
          <p class="explain" :class="$t('class')">
            {{ $t('main.menulist.msg2') }}
          </p>
        </NuxtLink>
      </li>

      <li class="list-story">
        <NuxtLink
          :to="localePath('/story')"
          class="ani-story ga-story"
          data-ga="main-story"
        >
          <div @mouseenter="play3" @mouseleave="stop3">
            <div class="ico-animation ani-img-story">
              <lottie :options="lottieOptions.third" @animCreated="handleAnimation3" />
            </div>
            <p class="list-title">
              <strong data-action="action-text">Story</strong>
            </p>
          </div>
          <p class="explain" :class="$t('class')">{{ $t('main.menulist.msg3') }}</p>
        </NuxtLink>
      </li>

      <li class="list-people">
        <NuxtLink :to="localePath('/people')" class="ga-people" data-ga="main-people">
          <div class="ico-animation ani03">
            <span class="circle-left"></span>
            <span class="circle-right"></span>
          </div>
          <p class="list-title">
            <strong data-action="action-text">People</strong>
          </p>
          <p class="explain" :class="$t('class')">{{ $t('main.menulist.msg4') }}</p>
        </NuxtLink>
      </li>
    </ul>
    <span title="화면 스크롤 안내" class="arr-down" aria-hidden="true"></span>
  </div>
</template>
<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as fAnimationdata from '~/assets/js/json/motion_1.json'
import * as sAnimationdata from '~/assets/js/json/motion_2.json'
import * as tAnimationdata from '~/assets/js/json/motion_3.json'
export default {
  name: 'MenuList',
  components: {
    lottie,
  },
  data() {
    return {
      animationEye: '',
      animationWork: '',
      animationStory: '',
      curFrame: '',
      curFrame2: '',
      curFrame3: '',
      anim: {
        firstAnim: null,
        secondAnim: null,
        thirdAnim: null,
      },
      lottieOptions: {
        first: { animationData: fAnimationdata.default, autoplay: false, loop: false },
        second: { animationData: sAnimationdata.default, autoplay: false, loop: false },
        third: { animationData: tAnimationdata.default, autoplay: false, loop: false },
      },
    }
  },
  mounted() {
    this.animationEye = document.querySelector('.ani-service')
    this.animationWork = document.querySelector('.ani-img-work')
    this.animationStory = document.querySelector('.ani-img-story')
    this.curFrame = 0
    this.curFrame2 = 0
    this.curFrame3 = 0
  },
  methods: {
    /** 애니메이션1**/
    handleAnimation(anim) {
      this.anim.firstAnim = anim
    },
    fSaveFrame() {
      this.curFrame = this.anim.firstAnim.currentFrame
    },
    stop() {
      this.anim.firstAnim.playSegments([this.curFrame, 0], true)
      this.anim.firstAnim.onEnterFrame = this.fSaveFrame
    },
    play() {
      this.anim.firstAnim.playSegments([0, 42], true)
      this.anim.firstAnim.onEnterFrame = this.fSaveFrame
    },
    /** 애니메이션2**/
    handleAnimation2(anim) {
      this.anim.secondAnim = anim
    },
    stop2() {
      this.anim.secondAnim.playSegments([this.curFrame2, 0], true)
      this.anim.secondAnim.onEnterFrame = this.fSaveFrame2
    },
    play2() {
      this.anim.secondAnim.playSegments([0, 42], true)
      this.anim.secondAnim.onEnterFrame = this.fSaveFrame2
    },
    fSaveFrame2() {
      this.curFrame2 = this.anim.secondAnim.currentFrame
    },
    /** 애니메이션3**/
    handleAnimation3(anim) {
      this.anim.thirdAnim = anim
    },
    fSaveFrame3() {
      this.curFrame3 = this.anim.thirdAnim.currentFrame
    },
    stop3() {
      this.anim.thirdAnim.playSegments([this.curFrame3, 0], true)
    },
    play3() {
      this.anim.thirdAnim.playSegments([0, 42], true)
      this.anim.thirdAnim.onEnterFrame = this.fSaveFrame3
    },
  },
}
</script>
