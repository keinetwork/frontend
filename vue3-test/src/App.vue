<template>
  <h1>{{ msg }}</h1>
  <input 
    type="text" 
    :value="msg" 
    @input="msg= $event.target.value"/>
</template>

<script> 
export default {
  data() {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
