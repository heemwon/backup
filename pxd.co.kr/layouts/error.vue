<template>
  <div class="wrap">
    <div>
      <section class="content">
        <h4 class="inc">pxd, inc</h4>
        <p class="desc not-found">찾을 수 없는 페이지 입니다.</p>
        <p class="desc not-found">요청하신 페이지가 사라졌거나</p>
        <p class="desc not-found">잘못된 경로를 이용하셨습니다.</p>
      </section>
      <div class="inform">
        <NuxtLink to="/" title="pxd 홈으로 이동">홈으로 이동</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout',
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
.inc {
  font-family: 'NunitoSans';
  font-size: 36px;
  font-weight: 900;
  line-height: 48px;
  letter-spacing: -0.2px;
  color: #000;
  margin-bottom: 10px;
}

.desc {
  padding: 5px 0;
  font-size: 56px;
  letter-spacing: -2px;
  color: #000;
  word-break: keep-all;
}
@media (max-width: 768px) {
  .desc {
    font-size: 22px;
  }
}

.inform {
  padding: 1.3rem;
  text-align: center;
}
</style>
