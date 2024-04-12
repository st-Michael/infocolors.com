<template>
  <div>
    <Navigation/>
    <hero/>
    <creative />
    <service/>
    <about />
    <media />
    <studio />
    <testimonials />
  </div>
</template>

<script>
import hero from "./home/hero.vue"
import creative from "./home/creative.vue"
import service from "./home/service.vue"
import about from "./home/about.vue"
import media from "./home/media.vue"
import studio from "./home/studio.vue"
import testimonials from "./home/testimonials.vue"


export default {
  components: {
    hero,
    creative,
    service,
    about,
    media,
    studio,
    testimonials
  }
}

</script>

<style scoped>

</style>