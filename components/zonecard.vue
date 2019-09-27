<template>
  <v-layout row wrap fill-height>
    <v-flex xs12 class="py-1">
      <v-card  :class="cls" height="100%">
        <v-card-title class="pb-0 justify-center">
          <!-- fas fa-trophy -->
          <h6 class="fontz2 mb-0"><v-icon v-if="zwin" left color="#FFBF00">fas fa-plane-departure</v-icon> Team {{ Tname }}  </h6>
          <h6 class="wc-th" >{{ wc }} </h6>
        </v-card-title>
        
        <v-card-text>
          <p class="fontz white--text pb-1">
            Team ID:
            <span class="fontzd">{{ Tid }}</span>
          </p>
          <p class="fontzd pb-2 text-capitalize">
            {{ member1 }}
            <span class="fontz">&amp;</span>
            {{ member2 }}
          </p>
          <p class="fontzd text-capitalize pb-1">{{ college }}</p>
        </v-card-text>

        
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['Tname', 'Tid', 'member1', 'member2', 'college','cls','zwin', 'wc']
}
</script>

<style scoped>
p {
  margin-bottom: 0px;
}
.fontz {
  font-size: calc(14px + 0.5 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  text-align: left !important;
}
.fontzd {
  font-size: calc(14px + 0.5 * ((100vw - 320px) / 880));
  font-family: '3ds';
  color: #aeffff;
  text-align: left !important;
}
.blue-th {
  border-radius: 14px;
  background-color: #044b7c;
  border-bottom: 10px solid #3098e1;
}

.win-th {
  border-radius: 14px;
  background-color: #182952;
  border-bottom: 10px solid #FFBF00;
}
.win-th2 {
  border-radius: 14px;
  background-color: rgb(5, 96, 170);
  border-bottom: 10px solid #FFBF00;
}
.wc-th {
  color: #FFBF00;
  font-size: calc(16px + 3 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 400;  
  text-align: center !important;
}

.fontz2 {
  font-size: calc(18px + 3 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 400;
  color: #00ffcc;
  text-align: center !important;
}
</style>