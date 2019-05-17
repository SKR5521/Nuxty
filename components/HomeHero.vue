<template>
  <v-container fluid class="home-hero" style="height: 100vh;">
    <v-layout class="mt-5">
      <v-spacer></v-spacer>
      <v-flex xs4 sm3 md2>
        <v-img class="animated fadeInRight img-fluid" :src="require('../assets/img/DS.png')"></v-img>
      </v-flex>
    </v-layout>

    <v-layout justify-center align-center column style="margin-top: 12vh;">
      <div justify-center text-xs-center class="white--text animated fadeInDown">
        <h1 class="fontz">AAKRUTI<span class="font-weight-light lightfont">2019</span></h1>
        <h2 class="fontz2 px-auto">Shaping Imagination</h2>
      </div>

      <v-btn outline large class="mt-5 animated fadeInDown" color="red">Register Here</v-btn>
      <v-btn
        fab
        dark
        class="mt-5 animated infinite bounce"
        color="indigo"
        @click="$vuetify.goTo('#first', options)"
      >
        <v-icon dark>fas fa-angle-down</v-icon>
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

.fontz {
  font-size: calc(50px + 32 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-SemiBold';
  font-weight: 300;
  /* line-height: 1.5; */
  letter-spacing: -0.2px;
}
.fontz2 {
  font-size: calc(28px + 18 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-light';
  font-weight: 300;
  /* line-height: 1.5; */
  letter-spacing: -0.2px;
  text-align: center !important;
}
.lightfont {
  font-family: '3ds-light';
  font-weight: 300;
}
</style>
