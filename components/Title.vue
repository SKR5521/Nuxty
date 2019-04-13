<template>
  <v-container mt-3>
    <v-layout row align-center justify-center >
      <v-flex xs10 text-xs-center>
        <h1 class="display-3 darken-3 purple--text">{{ topic }}</h1>
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
.break-small {
    background: #8f108f;
    border: 0;
    display: inline-block;
    height: 5px;
    margin: 10px 0 10px;
    width: 85px;
}
</style>

