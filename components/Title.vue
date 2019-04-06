<template>
  <v-container mt-3>
    <v-layout row justify-space-around>
      <v-flex xs10 text-xs-center>
        <h1 class="display-3 darken-3 purple--text">{{ topic }}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["topic"]
};
</script>
