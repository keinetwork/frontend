<template>
  <li><h1>{{ name }}?!</h1></li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: red !important;
  }
</style>