<template>
  <h1>{{ msg }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>

export default {
  data() {
    return {
      msg: "Hello?",
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split("").reverse().join("");
    }
  },
  methods: {
    changeMessage() {
      return this.msg="Good!"
    }
  }
}
</script>
