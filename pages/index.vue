<template>
  <div>
    <Homehero/>

    <v-container>
      <v-layout text-xs-center wrap justify-center>
        <v-flex xs12 xl10 mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Process</h1>
          <Timeline/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Homehero from '@/components/HomeHero'
import Timeline from '@/components/Timeline'

export default {
  components: {
    Homehero,
    Timeline
  },

  data: () => ({})
}
</script>

<style>
</style>
