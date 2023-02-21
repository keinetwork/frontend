<template>
  <button @click="handler">
    Click me!
  </button>
</template>

<script> 
export default {
  methods: {
    handler() {
      console.log(event)
    }
  }
}
</script>
