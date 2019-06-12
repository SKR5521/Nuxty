<template>
  <v-container class="pb-0 mb-4 pt-0">
    <v-layout row align-center justify-center>
      <v-flex xs12 text-xs-center>
        <h1 class="text-uppercase font-weight-light fontz">{{ topic }}</h1>
        <div>
          <span class="break-small"></span>
        </div>
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
/* v-resize-text="{ratio: '1.2',minFontSize: '20px', maxFontSize: '50px'}" #01548A; */
.break-small {
  background: #e31818;
  border: 0;
  display: inline-block;
  height: 3px;
  margin: 4px 0 10px;
  width: 70px;
}

.fontz {
  font-size: calc(24px + 10 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
  font-weight: 300;
  line-height: 1.5;
  color: #e31818;
  letter-spacing: -0.2px;
}
</style>

