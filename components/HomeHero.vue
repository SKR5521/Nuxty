<template>
  <v-container fluid fill-height class="home-hero" style="height: 100vh;">
    <v-layout justify-center align-center column  >
      <div class="display-4 font-weight-bold indigo--text text-xs-center" >AAKRUTI<span class="font-weight-regular">2019</span>
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
import ResizeText from 'vue-resize-text'

export default {
  name: 'HomeHero',
  directives: {
    ResizeText
 },
  computed: {
    options() {
      return {
        duration: 600,
        offset: 5,
        easing: 'easeInOutCubic'
      }
    }
  }
}
</script>

<style scoped>
.home-hero {
  background: url('../assets/img/bg.jpg') center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
