<template>
  <v-container fluid class="home-hero px-0" style="height: 100vh;">
    <!-- <HomeSlides/> -->
    <v-layout justify-center align-center column style="margin-top: 15vh;">

      <div justify-center text-xs-center class="white--text animated fadeInDown">
        <h1 class="fontz">
          AAKRUTI
          <span class="lightfont">2019</span>
        </h1>
        <h2 class="fontz2 px-auto pb-4">Shaping Imagination</h2>

        <h2 class="fontz2 white--text px-auto pt-4">And the WINNERS are...</h2>
      </div>
      
      <!-- <v-btn
        outline
        large
        class="mt-5 animated fadeInDown"
        target="_blank"
        href="https://www.surveymonkey.com/r/7T7D2VH"
        round
        color="#E31818"
        style="border: 2px solid !important;"
      >Register Here</v-btn> -->
      <v-btn
        fab
        dark
        small
        class="mt-5 animated infinite bounce"
        color="#3DA9EB"
        @click="$vuetify.goTo('#zonefinalist', options)"
      >
        <v-icon dark>fas fa-angle-down</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import * as easings from 'vuetify/es5/util/easing-patterns'
import HomeSlides from '@/components/HomeSlides'

export default {
  name: 'HomeHero',
  components: {
    HomeSlides
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

.fontz {
  font-size: calc(50px + 32 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-SemiBold';
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: -0.2px;
}
.fontz2 {
  font-size: calc(24px + 12 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-light';
  font-weight: 300;
  line-height: 0.5;
  letter-spacing: -0.2px;
  text-align: center !important;
}
.lightfont {
  font-family: '3ds-light';
  font-weight: 300;
}
</style>
