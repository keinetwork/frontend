<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent.once="handler">
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
