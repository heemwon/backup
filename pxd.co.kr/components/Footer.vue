<template>
  <footer>
    <div class="section">
      <div class="section-title">
        <strong class="title">pxd, inc</strong>
      </div>
      <div class="section-contents">
        <dl>
          <dt>Office</dt>
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
          <dd>
            <a href="tel:02-543-2951" title="전화 걸기">Tel. 02.543.2951</a>
            <span>Fax. 02.543.2960</span>
            <a href="mailto:info@pxd.co.kr" title="메일 보내기">Email. info@pxd.co.kr</a>
          </dd>
        </dl>
        <dl>
          <dt>Jobs</dt>
          <dd>
            <NuxtLink
              to="/jobs"
              class="ga-jobs"
              data-ga="footer-jobs"
              data-action="action-text"
              >recruitment</NuxtLink
            >
          </dd>
          <!-- .ga-*, data-ga="dataVal" : GA 클릭 이벤트 식별자 관련 README.md 참고 -->
          <dd>
            <a href="mailto:job@pxd.co.kr" data-action="action-text" title="메일 보내기"
              >job@pxd.co.kr</a
            >
          </dd>
        </dl>
        <dl>
          <dt>Social</dt>
          <dd>
            <a
              href="https://www.instagram.com/pxd.people/"
              target="_blank"
              title="새창 이동"
              class="ga-instargram"
              data-ga="footer-instargram"
              data-action="action-text"
              rel="noopener"
              >instagram</a
            >
          </dd>
          <dd>
            <a
              href="https://ko-kr.facebook.com/pxdstory/"
              target="_blank"
              title="새창 이동"
              class="ga-facebook"
              data-ga="footer-facebook"
              data-action="action-text"
              rel="noopener"
              >facebook</a
            >
          </dd>
        </dl>
        <dl class="wa">
          <dt class="blind">Web Accessibility</dt>
          <dd>
            <a
              href="http://www.webwatch.or.kr/Situation/WA_Situation.html?skey=1&sval=%ED%94%BC%EC%97%91%EC%8A%A4%EB%94%94&npp=9&MenuCD=110"
              title="새창 이동"
              target="_blank"
              rel="noopener"
            >
              <img
                class="wa-mark"
                :src="waImgSrc"
                title="WA 품질인증 마크, 웹와치(WebWatch) 2021.12.15 ~ 2022.12.14"
                alt="과학기술정보통신부 WA(WEB접근성) 품질인증 마크, 웹와치(WebWatch) 2021.12.15 ~ 2022.12.14"
              />
            </a>
          </dd>
        </dl>
      </div>
    </div>

    <div class="footer-etc">
      <div class="copyright">&copy; 2021 pxd, inc. All Rights Reserved.</div>
      <div class="related-site">
        <a
          href="https://www.uxalliance.com/"
          target="_blank"
          title="새창 이동"
          rel="noopener"
          >UX alliance</a
        >
        <a
          href="https://story.pxd.co.kr/"
          rel="noopener"
          target="_blank"
          title="새창 이동"
          class="ga-blog"
          data-ga="footer-blog"
          >pxd Story</a
        >
        <a
          href="https://pxd-fed-blog.web.app/"
          rel="noopener"
          target="_blank"
          title="새창 이동"
          class="ga-blog"
          data-ga="footer-blog"
          >XE Group</a
        >
        <a
          href="http://lab.pxd.co.kr/"
          rel="noopener"
          target="_blank"
          title="새창 이동"
          class="ga-ux-lab"
          data-ga="footer-ux-lab"
          >UX Tech Lab</a
        >
      </div>
    </div>

    <div class="btn-top">
      <button type="button" @click.prevent="moveScrollTop">top</button>
    </div>
  </footer>
</template>

<script>
import { scrollTopAction } from '~/assets/js/footer.js'
import { GOOGLE_STORAGE_ICO } from '~/static/utils'
export default {
  name: 'Footer',
  asyncData() {
    return { GOOGLE_STORAGE_ICO }
  },
  data() {
    return {
      waImgSrc: GOOGLE_STORAGE_ICO + 'wa_mark.png',
    }
  },
  methods: {
    moveScrollTop() {
      scrollTopAction()
    },
  },
}
</script>

<style scope>
.wa-mark {
  width: 70px;
}
</style>
