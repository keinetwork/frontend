<template>
  <h1 @click="changeMessage">
    {{ msg }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
  <h1 
    :class="{ active: isActive }"
    @click="activate">
    Hello?!({{ isActive }})
  </h1>
  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello?!
  </h1>
</template>

<script>

export default {
  data() {
    return {
      msg: "Hello?",
      isActive: false,
      color: 'orange',
      fontSize: '30px',
      fontStyle: {
        color: 'orange',
        fontSize: '30px',
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split("").reverse().join("");
    }
  },
  watch: {
    msg(newValue) {
      console.log('msg:', newValue)
    },
    reversedMessage(newValue) {
      console.log('reversedMessage:', newValue)
    }
  },
  methods: {
    changeMessage() {
      return this.msg="Good!"
    },
    activate() {
      this.isActive = true
    },
    changeStyle() {
      this.fontStyle.color = 'red'
      this.fontStyle.fontSize = '50px'
    }
  }
}
</script>

<style scoped>
  .active {
    color: red;
    font-weight: bold;
  }
</style>