<template>
  <div class="movie">
    <img 
        :src="movie.Poster" 
        alt="" 
        width="200" />
  </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>