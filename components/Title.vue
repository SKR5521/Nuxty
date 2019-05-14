<template>
  <v-container class="mt-4">
    <v-layout row align-center justify-center >
      <v-flex xs10 text-xs-center>
        <h1 class="text-uppercase purple--text fontz" >{{ topic }}</h1>
        <div> <span class="break-small"></span></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ResizeText from 'vue-resize-text'

export default {
  props: ['topic'],

   directives: {
    ResizeText
 }

}
</script>

<style scoped>
/* v-resize-text="{ratio: '1.2',minFontSize: '20px', maxFontSize: '50px'}" */
.break-small {
    background: #8f108f;
    border: 0;
    display: inline-block;
    height: 4px;
    margin: 4px 0 10px;
    width: 90px;
}

.fontz {
  font-size: calc(28px + 12 * ((100vw - 320px) / 880)) !important;
}
</style>

