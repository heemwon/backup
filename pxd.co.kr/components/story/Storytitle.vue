<template>
  <div>
    <div class="story-visual" :class="story.slug">
      <div
        class="cover-img"
        :style="{
          'background-image': 'url(' + google + story.visual.pc + ')',
        }"
      ></div>
    </div>
    <section id="skipcontent" class="section-detail headline">
      <h3 class="title">{{ story.title }}</h3>
      <p class="summary">{{ story.summary.category }}<br />{{ story.summary.client }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StoryTitle',
  props: {
    story: {
      type: Object,
      default: Object,
    },
    google: {
      type: String,
      default: '',
    },
  },
}
</script>

