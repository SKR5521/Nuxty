<template>
  <div id="finalday">
    <Subtitle id="contest" subtopic="Final day event AAKRUTI2019"/>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <iframe class="mb-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.5837275625954!2d73.73431225131753!3d18.58972184111044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc2fd4fb3a9%3A0x9b341d59f96f8609!2sDassault+Syst%C3%A8mes!5e0!3m2!1sen!2sin!4v1559633575350!5m2!1sen!2sin"
            width="100%"
            height="300"
            frameborder="0"
            style="border:2"
            allowfullscreen
          ></iframe>
        </v-flex>

        <v-flex xs12 md6 class="pl-2">
          <p class="fontz2 black--text">
            <span class="grey--text fontz">Venue</span> – Dassault Systèmes R&D Center, Pune
          </p>

          <p class="fontz2 black--text">
            <span class="grey--text fontz">Participants</span> – Top 10 zonal finalist teams
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
