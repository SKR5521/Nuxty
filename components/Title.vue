<template>
  <v-container class="mt-4">
    <v-layout row align-center justify-center >
      <v-flex xs10 text-xs-center>
        <h1 class="text-uppercase purple--text" v-resize-text="{ratio: '1.2',minFontSize: '20px', maxFontSize: '50px'}">{{ topic }}</h1>
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

.break-small {
    background: #8f108f;
    border: 0;
    display: inline-block;
    height: 5px;
    margin: 5px 0 10px;
    width: 85px;
}
</style>

