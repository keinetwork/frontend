<template>
  <input
    type="text"
    @keydown.ctrl.a="handler" />
</template>

<script> 
export default {
  methods: {
    handler() {
        console.log('Enter!!')
    }
  }
}
</script>
