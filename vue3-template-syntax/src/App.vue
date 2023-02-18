<template>
  <h1 
    v-once
    @click="add">
    {{ msg }}
  </h1>
  <h1 v-html="msg"></h1>
  <H1 
    :[attr]="msg2"
    @[event]="add">
    {{ msg2 }}
  </H1>
</template>

<script>
export default {
  data() {
    return {
      msg: '<div style="color: red;">Hello!!</dev>',
      msg2: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    add() {
      this.msg += '!'
    }
  }
}
</script>

<style scoped>
  .active {
    color: royalblue;
    font-size: 100px;
  }
</style>