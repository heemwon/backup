<template>
  <a v-if="tagType === 'button'" role="button" href="javascript:;" class="card-type1">
    <div class="img-box"><img :src="imgBase + card01Img" alt="" /></div>
    <div>
      <strong class="title">{{ card01Title }}</strong>
      <p v-if="show" class="h5-etc">
        <span v-for="data in card01Desc.split('\n')" :key="data" class="line">{{
          data
        }}</span>
      </p>

      <p v-else class="h5-etc secret-work">보호된 글</p>
    </div>
  </a>
  <a
    v-else-if="outerLink"
    :href="outRoute"
    :target="openFrame"
    title="페이지 이동"
    class="card-type1"
  >
    <div class="img-box"><img :src="imgBase + card01Img" alt="" /></div>
    <div>
      <strong class="title">{{ card01Title }}</strong>
      <p v-if="show" class="h5-etc">
        <span v-for="data in card01Desc.split('\n')" :key="data" class="line">{{
          data
        }}</span>
      </p>

      <p v-if="show" class="h5-etc">{{ card01Desc }}</p>
      <p v-else class="h5-etc secret-work">보호된 글</p>
    </div>
  </a>
  <div v-else class="card-type1">
    <div class="img-box"><img :src="imgBase + card01Img" alt="" /></div>
    <div>
      <strong class="title">{{ card01Title }}</strong>
      <p v-if="show" class="h5-etc">{{ card01Desc }}</p>
      <p v-else class="h5-etc secret-work">보호된 글</p>
    </div>
  </div>
  <!-- <div>
    <a
      v-if="!outerLink"
      href="javascript:;"
      :target="openFrame ? openFrame : '_self'"
      title="페이지 이동"
      class="card-type1"
    >
      <figure><img :src="imgBase + card01Img" alt="" /></figure>
      <div>
        <strong class="title">{{ card01Title }}</strong>
        <p v-if="show" class="h5-etc">{{ card01Desc }}</p>
        <p v-else class="h5-etc secret-work">보호된 글</p>
      </div>
    </a>
    <a
      v-else
      :href="outRoute"
      :target="openFrame ? openFrame : '_self'"
      title="페이지 이동"
      class="card-type1"
    >
      <figure><img :src="imgBase + card01Img" alt="" /></figure>
      <div>
        <strong class="title">{{ card01Title }}</strong>
        <p v-if="show" class="h5-etc">{{ card01Desc }}</p>
        <p v-else class="h5-etc secret-work">보호된 글</p>
      </div>
    </a>
  </div> -->
</template>

<script>
export default {
  name: 'CardType01',
  props: {
    tagType: {
      type: String,
      default: '',
    },
    card01Img: {
      type: String,
      default: '',
    },
    card01Title: {
      type: String,
      default: '',
    },
    card01Desc: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: true,
    },
    // 외부 계정 리크 유무
    outerLink: {
      type: Boolean,
      default: false,
    },
    // 외부 계정의 링크
    outRoute: {
      type: String,
      default: '',
    },
    // 새 창 띄우기
    openFrame: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      imgBase: 'https://storage.googleapis.com/pxd-dev-server.appspot.com/images/img/',
    }
  },
}
</script>
