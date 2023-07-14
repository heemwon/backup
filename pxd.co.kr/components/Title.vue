<template>
  <div v-if="language" class="title-wrap">
    <div>
      <strong data-action="action-title-y">
        <slot name="title1"></slot>
      </strong>
      <strong data-action="action-title-y">
        <slot name="title2"></slot>
      </strong>
    </div>
  </div>
  <div v-else class="title-wrap en">
    <div>
      <strong data-action="action-title-y">
        <slot name="title1"></slot>
      </strong>
      <strong data-action="action-title-y">
        <slot name="title2"></slot>
      </strong>
    </div>
  </div>
</template>

<script>
// props 대신 슬롯 이용 https://vuejs.org/v2/guide/components-slots.html
// ko/en은 vue store를 이용해서 번역 바뀌는 부분만 적용 되도록
import { titleAction } from '../assets/js/textAction'

export default {
  name: 'Title',
  props: {
    language: Boolean,
  },
  mounted() {
    const textElements = document.querySelectorAll(
      ".title-wrap [data-action='action-title-y']",
    )
    titleAction('y', textElements, 0.5, { default: 0.3, repeat: 0.2843 })
  },
}
</script>
