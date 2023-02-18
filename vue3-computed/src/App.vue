<template>
  <button @click="add">
    ADD
  </button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reverseMessage() }}</h1>
  <h1>{{ msg.split("").reverse().join("") }}</h1>
  <h1>{{ msg.split("").reverse().join("") }}</h1>
</template>

<script>

export default {
  data() {
    return {
      msg: "Hello Computed!",
    }
  },
  computed: {
    reverseGetSet: {
      get() {
        return this.msg.split("").reverse().join("")
      },
      set(value) {
        this.msg = value
        console.log(value)
      }
    },
    reversedMessage() {
      // 캐싱
      return this.msg.split("").reverse().join("");
    }
  },
  methods: {
    // Getter
    reverseMessage() {
      return this.msg.split("").reverse().join("");
    },
    add() {
      // this.reversedMessage += "!?"; // 읽기 전용
      // Setter
      // this.msg += '!?'
      this.reverseGetSet += "!?"; // Get, Set

    },
  }
};
</script>
