<template>
  <v-container>
    <v-layout row justify-space-around>
      <v-flex xs8 py-1 text-xs-center>
        <h1 class="display-1 darken-3 purple--text">{{ subtopic }}</h1>
        <div> <span class="break-small"></span></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['subtopic']
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