<template>
  <NuxtChild></NuxtChild>
</template>

<script>
import { works as data } from '~/static/data/work/index.js'
export default {
  name: 'WorksData',
  asyncData() {
    const works = data.values
    return { works }
  },
}
</script>
