<template>
  <MyBtn text="" >Banana</MyBtn>
  <MyBtn :color="color" >
    <spam style="color: red;">Apple</spam>
  </MyBtn>
  <MyBtn 
    large
    color="royalblue" >Cherry</MyBtn>
  <MyBtn >Banana</MyBtn>
  <button>Banana</button>
</template>

<script> 
import MyBtn from '~/components/MyBtn'

export default {
  components: {
    MyBtn
  },
  data() {
    return {
      color: '#000'
    }
  }
}
</script>
