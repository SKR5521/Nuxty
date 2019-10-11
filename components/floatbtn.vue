<template>
  <div>
    <v-speed-dial v-model="fab" bottom right fixed transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon>keyboard_arrow_up</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
      </template>
      <v-tooltip left open-delay="100">        
          <v-btn fab dark small color="green" to="/gallery" slot="activator">
            <v-icon>photo</v-icon>
          </v-btn>        
        <span>Gallery</span>
      </v-tooltip>
      <!-- <v-tooltip left open-delay="100">        
          <v-btn fab dark small color="indigo" to="/process" slot="activator">
            <v-icon>games</v-icon>
          </v-btn>        
        <span>Process</span>
      </v-tooltip> -->
      <v-tooltip left open-delay="100">
        <v-btn fab dark small color="red" to="/" slot="activator">
          <v-icon>home</v-icon>
        </v-btn>
        <span>Home</span>
      </v-tooltip>
      <!-- <v-btn fab dark small color="green" to="/gallery">
        <v-icon >photo</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" to="/process">
        <v-icon >games</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" to="/">
        <v-icon >home</v-icon>
      </v-btn>-->
    </v-speed-dial>
  </div>
</template>
<script>
export default {
  data: () => ({
    fab: false
  })
}
</script>


