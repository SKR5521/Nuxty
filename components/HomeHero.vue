<template>
  <v-container fluid fill-height class="home-hero" style="height: 80vh;">
    <v-layout justify-center align-center column pa-5 >
      <div class="display-4 font-weight-black indigo--text text-xs-center">
        AAKRUTI
        <span class="font-weight-regular">2019</span>
      </div>
      <div class="display-3 font-weight-light indigo--text text-xs-center">Shaping Imagination</div>
      <v-btn outline large class="mt-5" color="indigo">Register Here</v-btn>
      <v-btn fab dark class="mt-5" color="indigo" @click="$vuetify.goTo('#first', options)">
        <v-icon dark>expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import * as easings from 'vuetify/es5/util/easing-patterns'
export default {
  name: 'HomeHero',
  computed: {
    options() {
      return {
        duration: 600,
        offset: 4,
        easing: 'easeInOutCubic'
      }
    }
  }
}
</script>

<style scoped>
.home-hero {
  /* background: url('../assets/img/bg.jpg') center; */
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
