<template>
  <v-container class="mt-4 pb-0 mb-4">
    <v-layout row align-center justify-center >
      <transition name="fade">
      <v-flex xs10 text-xs-center>
        <h1 class="text-uppercase font-weight-light purple--text fontz" >{{ topic }}</h1>
        <div> <span class="break-small"></span></div>
      </v-flex>
      </transition>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  props: ['topic']

}
</script>

<style scoped>
/* v-resize-text="{ratio: '1.2',minFontSize: '20px', maxFontSize: '50px'}" */
.break-small {
    background: #8f108f;
    border: 0;
    display: inline-block;
    height: 3px;
    margin: 4px 0 10px;
    width: 70px;
}

.fontz {
  font-size: calc(28px + 10 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: -.2px
}
</style>

