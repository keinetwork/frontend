<template>
  <Parent :msg="message" />
</template>

<script> 
import Parent from '~/components/Parent'

export default {
  components: {
    Parent
  },
  data() {
    return {
      message: 'Hello world!'
    }
  }
}
</script>
