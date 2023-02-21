<template>
  <div
    class="parent"
    @wheel.passive="handler">
    <div
      class="child"
      @click="handlerB">
    </div>
  </div>
</template>

<script> 
export default {
  methods: {
    handler(event) {
      for (let i =0; i< 10000; i+=1){
        console.log(event)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .parent {
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    .child {
      width: 100px;
      height: 200px;
      background-color: orange;
    }
  }
</style>