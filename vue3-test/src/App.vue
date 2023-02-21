<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click="handler">
    NAVER
  </a>
</template>

<script> 
export default {
  methods: {
    handler() {
      console.log('ABC!')
    }
  }
}
</script>
