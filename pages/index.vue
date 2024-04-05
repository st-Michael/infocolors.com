<template>
  <div>
    <Navigation/>
    <hero/>
    <creative />
    <service/>
  </div>
</template>

<script>
import hero from "./home/hero.vue"
import creative from "./home/creative.vue"
import service from "./home/service.vue"

export default {
  components: {
    hero,
    creative,
    service
  }
}

</script>

<style scoped>

</style>