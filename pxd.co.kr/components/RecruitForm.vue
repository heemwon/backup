<template>
  <div class="wrap-jobs-table">
    <div class="recruit-title-wrap">
      <h4 class="table-title">
        {{ formTitle }}
      </h4>
      <span v-if="subFormTitle" class="sub">{{ subFormTitle }}</span>
    </div>
    <!-- START: 이력서 폼 타입 -->
    <div v-if="!formType2" class="wrap-jobs-form">
      <slot name="form"></slot>
    </div>
    <div v-else class="wrap-jobs-form type2">
      <slot name="form"></slot>
    </div>
    <!-- END: 이력서 폼 타입 -->
  </div>
</template>

<script>
export default {
  name: 'RecruitForm',
  props: {
    formTitle: {
      type: String,
      default() {
        return ''
      },
    },
    subFormTitle: {
      type: String,
      default() {
        return ''
      },
    },
    formType2: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>

<style></style>
