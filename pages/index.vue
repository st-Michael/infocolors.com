<template>
  <div>
    <Navigation/>
    <hero/>
    <creative />
    <service/>
    <about />
  </div>
</template>

<script>
import hero from "./home/hero.vue"
import creative from "./home/creative.vue"
import service from "./home/service.vue"
import about from "./home/about.vue"

export default {
  components: {
    hero,
    creative,
    service,
    about
  }
}

</script>

<style scoped>

</style>