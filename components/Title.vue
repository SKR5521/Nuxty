<template>
  <v-container mt-3>
    <v-layout row align-center justify-center >
      <v-flex xs10 text-xs-center>
        <h1 class="fontSize darken-3 py-2 purple--text">{{ topic }}</h1>
        <div> <span class="break-small"></span></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['topic']
}
</script>

<style scoped>
.fontSize {
  /* font-size: calc(26px + 2 * ((100vw - 320px) / 880)); */
  font-size: calc( 2px + (1141/6000) * 100vw - (681/10) );
}
.break-small {
    background: #8f108f;
    border: 0;
    display: inline-block;
    height: 5px;
    margin: 5px 0 10px;
    width: 85px;
}
</style>

