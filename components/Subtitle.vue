<template>
  <v-container>
    <v-layout row justify-space-around>
      <v-flex xs8 py-1 text-xs-center>
        <h1 class="display-1 darken-3 purple--text">{{ subtopic }}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["subtopic"]
};
</script>
