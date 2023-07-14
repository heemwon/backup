<template>
  <div class="section-detail related">
    <strong class="blind">관련 글 목록</strong>
    <div class="inner-section-list sub">
      <ul class="pc-view">
        <li v-for="(next, index) in nexts" :key="index">
          <NuxtLink :to="{ path: `/story/${next.slug}` }">
            <div class="img-box">
              <img :src="`${google}${next.thumbnail}`" :alt="next.title" />
            </div>
            <div>
              <strong class="title">{{ next.nextTitle }}</strong>
              <p class="h5-etc">{{ next.client }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <ul class="mobile-view">
        <li>
          <NuxtLink :to="{ path: `/story/${nexts[0].slug}` }">
            <div class="img-box">
              <img :src="`${google}${nexts[0].thumbnail}`" :alt="`${nexts[0].title}`" />
            </div>
            <div>
              <strong class="title">{{ nexts[0].nextTitle }}</strong>
              <p class="h5-etc">{{ nexts[0].client }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryTail',
  props: {
    nexts: {
      type: Array,
      default: Object,
    },
    google: {
      type: String,
      default: '',
    },
  },
}
</script>
