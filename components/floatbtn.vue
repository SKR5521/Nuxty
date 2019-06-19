<template>
  <div>
    <v-speed-dial v-model="fab" bottom right fixed transition="slide-y-reverse-transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon>keyboard_arrow_up</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="green" to="/gallery">
        <v-icon >photo</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" to="/process">
        <v-icon >games</v-icon>
      </v-btn>
      <v-btn fab dark small color="red" to="/">
        <v-icon >home</v-icon>
      </v-btn>
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


