<template>
  <div id="finalday">
    <Subtitle id="contest" subtopic="Final day event AAKRUTI2019"/>
    <v-container>
      <v-layout row wrap>
          <v-flex xs12 md6>
              
          </v-flex>
        <v-flex xs12 md6>
          <p class="fontz black--text">
            <span class="grey--text fontz2">Venue</span> – Dassault Systèmes R&D Center, Pune
          </p>

          <p class="fontz black--text">
            <span class="grey--text fontz2">Participants</span> – Top 10 zonal finalist teams
          </p>

          <p
            class="grey--text text--darken-1 fontz"
          >Each team will get 15 minutes to present their design to the AAKRUTI2019 jury panel, followed by a round of questions</p>
          <p
            class="grey--text text--darken-1 fontz"
          >Results will be announced during the prize distribution ceremony after the presentation round.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Subtitle from '@/components/Subtitle'

export default {
  components: {
    Subtitle
  }
}
</script>

<style scoped>
.fontz2 {
  font-size: calc(15px + 5 * ((100vw - 320px) / 880));
  font-family: '3ds-SemiBold';
}
.fontz {
  font-size: calc(14px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: #757575;
  /* 757575 424242*/
}
</style>
