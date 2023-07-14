<template>
  <a
    v-if="instagram"
    href="https://www.instagram.com/pxd.people/"
    target="_blank"
    title="새창 이동"
    class="btn-more en ga-work"
    data-ga="main-more-work"
    rel="noopener"
    :data-action="this.$store.state.isMobile ? 'mobile-more' : 'fixed-more'"
  >
    Go to instagram
    <span class="arw">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          class="outer"
          x="11"
          y="11"
          fill-rule="evenodd"
          d="M14.571 9L18 12.5 14.571 16 14 15.417 16.367 13H6v-1h10.367L14 9.583 14.571 9z"
        />
      </svg>
    </span>
    <span class="circle">
      <span class="circle-half circle-half-right">
        <span class="circle-whole circle-right"></span>
      </span>
      <span class="circle-half circle-half-left">
        <span class="circle-whole circle-left"></span>
      </span>
    </span>
  </a>
  <NuxtLink
    v-else
    :to="slug"
    :title="slug + ' 더보기'"
    class="btn-more en ga-work"
    data-ga="main-more-work"
    :data-action="this.$store.state.isMobile ? 'mobile-more' : 'fixed-more'"
  >
    <span class="blind">{{ slug }}</span>
    More
    <span class="arw">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          class="outer"
          x="11"
          y="11"
          fill-rule="evenodd"
          d="M14.571 9L18 12.5 14.571 16 14 15.417 16.367 13H6v-1h10.367L14 9.583 14.571 9z"
        />
      </svg>
    </span>
    <span class="circle">
      <span class="circle-half circle-half-right">
        <span class="circle-whole circle-right"></span>
      </span>
      <span class="circle-half circle-half-left">
        <span class="circle-whole circle-left"></span>
      </span>
    </span>
  </NuxtLink>
</template>

<script>
export default {
  name: 'MainMoreBtn',
  props: {
    slug: {
      type: String,
      default: '',
    },
    instagram: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
