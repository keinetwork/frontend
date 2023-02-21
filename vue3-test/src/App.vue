<template>
  <MyBtn @click="log">
    Banana
  </MyBtn>
</template>

<script> 
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  methods: {
    log() {
      console.log('Click!!')
    }
  }
}
</script>
