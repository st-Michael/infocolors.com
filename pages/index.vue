<template>
  <div>
    <Navigation/>
    <hero/>
    <creative />
    <service/>
    <about />
    <media />
  </div>
</template>

<script>
import hero from "./home/hero.vue"
import creative from "./home/creative.vue"
import service from "./home/service.vue"
import about from "./home/about.vue"
import media from "./home/media.vue"


export default {
  components: {
    hero,
    creative,
    service,
    about,
    media
  }
}

</script>

<style scoped>

</style>