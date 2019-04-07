<template>
  <v-container fluid fill-height class="home-hero" style="height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">AAKRUTI2019</div>
      <!-- <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div> -->
      <div class="display-3 font-weight-bold white--text text-xs-center">Shaping Imagination</div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HomeHero'
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
