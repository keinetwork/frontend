<template>
  <h1>{{ msg }}</h1>
  <input 
    type="text" 
    :value="msg" 
    @input="msg= $event.target.value"/>
    <h1>{{  checked }}</h1>
    <input 
      type="checkbox"
      v-model="checked" />
</template>

<script> 
export default {
  data() {
    return {
      msg: 'Hello world!',
      checked: false
    }
  },
  methods: {
    handler(event) {
      console.log(event.target.value)
    }
  }
}
</script>
