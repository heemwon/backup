<template>
  <div id="wrap" class="contact">
    <Title language :class="$t('class')">
      <template #title1>{{ $t('contact.title1') }}</template>
      <template #title2>{{ $t('contact.title2') }}</template>
    </Title>
    <div class="wrap-map" aria-hidden="true">
      <strong class="blind">사무실 위치 지도</strong>
      <div id="map" class="area-map"></div>
      <div class="custom_typecontrol radius_border">
        <span
          v-for="(el, index) in mapType.list"
          :id="`btn${el.type[0].toUpperCase() + el.type.slice(1, el.type.length)}`"
          :key="el.type"
          :class="index === mapType.activeIndex ? 'selected_btn' : 'btn'"
          @click="setMapType(`${el.type}`)"
          >{{ el.name }}</span
        >
      </div>
      <!-- 지도 확대, 축소 컨트롤 div 입니다 -->
      <div class="custom_zoomcontrol radius_border">
        <span @click="zoomIn"
          ><img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
        /></span>
        <span @click="zoomOut"
          ><img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
        /></span>
      </div>
    </div>
    <div id="skipcontent" class="section sub">
      <div class="section-title">
        <h3 class="title">{{ $t('contact.title3') }}</h3>
      </div>
      <div class="section-contents">
        <ul class="list-contact">
          <li>
            <strong class="title">{{ $t('contact.sub1') }}</strong>
            <p class="art-1">
              {{ $t('contact.desc1') }}
            </p>
          </li>
          <li>
            <strong class="title">{{ $t('contact.sub2') }}</strong>
            <p class="art-1">
              {{ $t('contact.desc2') }}
            </p>
            <a
              href="https://kko.to/c05LqPNjj"
              target="_blank"
              title="새창 이동"
              class="map-kakao"
            >
              <strong data-action="action-text">{{ $t('contact.link2') }}</strong>
            </a>
          </li>
          <li>
            <strong class="title">{{ $t('contact.sub3') }}</strong>
            <p class="art-1">
              {{ $t('contact.desc3') }}
            </p>
            <a
              href="https://naver.me/GOyZwpCJ"
              target="_blank"
              title="새창 이동"
              class="map-naver"
            >
              <strong data-action="action-text">{{ $t('contact.link3') }}</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section sub">
      <div class="section-title">
        <h3 class="title">{{ $t('contact.project') }}</h3>
      </div>
      <div class="section-contents">
        <ul class="list-contact inquire">
          <li>
            <strong class="title">{{ $t('contact.info1') }}</strong>
            <p class="art-2">
              <a href="mailto:info@pxd.co.kr" title="메일 보내기">info@pxd.co.kr</a>
            </p>
          </li>
          <li>
            <strong class="title">{{ $t('contact.info2') }}</strong>
            <p class="art-2">
              <a href="tel:02-543-2951" title="전화 걸기">02-543-2951</a>
            </p>
          </li>
          <li>
            <strong class="title">{{ $t('contact.info3') }}</strong>
            <p class="art-2">
              <span>02-543-2960</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
export default {
  name: 'ContactIndex',
  data() {
    return {
      map: null,
      mapType: {
        activeIndex: 0,
        list: [
          {
            name: '지도',
            type: 'roadmap',
          },
          {
            name: '스카이뷰',
            type: 'skyview',
          },
        ],
      },
    }
  },
  head() {
    const seoMeta = {
      title: 'pxd Contact',
      description: '서울시 강남구 도산대로 139 제이타워 6층',
      url: `${this.$route.path}`,
    }
    return {
      title: 'Contact > pxd',
      meta: makeMeta(seoMeta),
    }
  },
  mounted() {
    const { kakao } = window
    kakao.maps.load(this.initMap)

    function myFetch() {
      const contactTarget = document.querySelectorAll('.wrap-map a')
      for (let i = 0; i < contactTarget.length; i++) {
        contactTarget[i].setAttribute('tabindex', '-1')
      }
      document.querySelector('.wrap-map area').setAttribute('tabindex', '-1')
    }

    setTimeout(() => {
      myFetch()
    }, 1000)
  },
  methods: {
    initMap() {
      const { kakao } = window
      const container = document.getElementById('map')
      // 지도를 생성할 때 필요한 기본 옵션
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
        level: 4, // 지도의 레벨(확대, 축소 정도)
      }
      const map = new kakao.maps.Map(container, options)
      this.map = map
      // 장소 검색 객체를 생성
      const ps = new kakao.maps.services.Places()

      // 마우스 휠 확대/축소 기능제한
      map.setZoomable(false)
      // 키워드로 장소를 검색
      ps.keywordSearch('pxd', this.placesSearchCB)
    },
    placesSearchCB(data, status) {
      const { kakao } = window
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        const bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          this.displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        this.map.setBounds(bounds)
      }
    },
    // 지도에 마커를 표시하는 함수
    displayMarker(place) {
      const { kakao } = window
      const content =
        '<div class="custom-overlay">' +
        '  <a href="https://map.kakao.com/link/map/10996207" target="_blank">' +
        '    <span class="title">pxd</span>' +
        '  </a>' +
        '</div>'

      // 마커를 생성하고 지도에 표시
      const marker = new kakao.maps.Marker({
        map: this.map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      // 커스텀 오버레이가 표시될 위치
      const position = new kakao.maps.LatLng(place.y, place.x)

      // 커스텀 오버레이를 생성
      const customOverlay = new kakao.maps.CustomOverlay({
        map: this.map,
        position,
        content,
        yAnchor: 1,
      })
    },
    zoomIn() {
      this.map.setLevel(this.map.getLevel() - 1)
    },
    zoomOut() {
      this.map.setLevel(this.map.getLevel() + 1)
    },
    setMapType(maptype) {
      const { kakao } = window
      this.mapType.activeIndex = this.mapType.list.map((el) => el.type).indexOf(maptype)
      if (maptype === 'roadmap') {
        this.map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP)
      } else {
        this.map.setMapTypeId(kakao.maps.MapTypeId.HYBRID)
      }
    },
  },
}
</script>
