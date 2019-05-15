<template>
  <v-container fluid fill-height class="home-hero" style="height: 100vh;">
    <!-- <v-layout row >
      <v-flex xs1>
        <v-card width="130px" color="#005386" :to="Home.route">
          <v-img contain :src="require('../assets/img/logo.png')"></v-img>
        </v-card>
      </v-flex>
    </v-layout> -->

    <v-layout justify-center align-center column  >
      <div justify-center text-xs-center class="white--text">
        <h1 class="fontz">AAKRUTI<span class="font-weight-light lightfont">2019</span></h1>
        <h2 class="fontz2 px-auto" >Shaping Imagination</h2>
      </div>
      <!-- <div class="font-weight-bold white--text fontz text-xs-center pa-0 ma-0" >AAKRUTI<span class="font-weight-light">2019</span>
      </div>
      
      <div class="font-weight-light white--text fontz2 text-xs-center pa-0 ma-0">Shaping Imagination</div>
       -->
      <v-btn outline large class="mt-5" color="red darken-2">Register Here</v-btn>
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

.fontz {
  font-size: calc(52px + 32 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-SemiBold';
  font-weight: 300;
  /* line-height: 1.5; */
  letter-spacing: -.2px;

}
.fontz2 {
  font-size: calc(28px + 18 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-light';
  font-weight: 300;
  /* line-height: 1.5; */
  letter-spacing: -.2px;
  text-align: center !important;
}
.lightfont {
  font-family: '3ds-light';
  font-weight: 300;
}

</style>
