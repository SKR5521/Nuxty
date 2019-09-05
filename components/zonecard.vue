<template>
  <v-layout row wrap fill-height >
    <v-flex xs12 class="py-1" >
      <v-card dark class="bord " height="100%">
        <v-card-title class="pb-0 justify-center" >
          <h6 class="fontz2 mb-0">Team {{ Tname }}</h6>
        </v-card-title>
        <v-card-text>
          <p class="fontz pb-1">
            Team ID:
            <span class="fontzd">{{ Tid }}</span>
          </p>
          <p class="fontzd pb-1 text-capitalize">
            {{ member1 }}
            <span class="fontz">&amp;</span>
            {{ member2 }}
          </p>
          <!-- <p class="fontz  mb-0 py-1">Member 2 : <span class="fontzd ">{{ member2 }}</span></p> -->
          <p class="fontzd text-capitalize pb-1">{{ college }}</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['Tname', 'Tid', 'member1', 'member2', 'college']
}
</script>

<style scoped>
p {
  margin-bottom: 0px;
}
.fontz {
  font-size: calc(15px + 0.5 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  text-align: left !important;
}
.fontzd {
  font-size: calc(15px + 0.5 * ((100vw - 320px) / 880));
  font-family: '3ds';
  text-align: left !important;
}
.bord {
  border-radius: 14px;
  background-color: #044B7C;
  border-bottom: 10px solid #3098e1;
}

.fontz2 {
  font-size: calc(20px + 3 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 400;
  text-align: center !important;
}
</style>