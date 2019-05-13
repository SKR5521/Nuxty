<template>
  <v-container class="pt-3">
    <v-layout  row justify-space-around>
      <v-flex xs8 py-1 text-xs-center>
        <h1 class="darken-3 purple--text" v-resize-text="{minFontSize: '16px', maxFontSize: '40px'}" >{{ subtopic }}</h1>
        <div> <span class="break-small"></span></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ResizeText from 'vue-resize-text'

export default {
  props: ['subtopic'] ,

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
    height: 4px;
    margin: 10px 0 15px;
    width: 50px;
}
</style>