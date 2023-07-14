<template>
  <div class="card-type2">
    <div><img :src="imgBase + card02Img" alt="" /></div>
    <div class="inner">
      <strong class="title">{{ card02Title }}</strong>
      <p class="desc">
        <span v-for="data in card02Desc.split('\n')" :key="data" class="line">{{
          data
        }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardType02',
  props: {
    card02Img: {
      type: String,
      default: '',
    },
    card02Title: {
      type: String,
      default: '',
    },
    card02Desc: {
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
