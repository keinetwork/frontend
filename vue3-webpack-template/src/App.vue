<template>
    <HelloWorld />
    <h1>{{ message }}</h1>
    
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
    componeents: {
        HelloWorld
    },
    data() {
        return {
            message: 'Hello Vue!!!'
        }
    }
}
</script>
