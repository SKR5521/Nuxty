<template>
  <v-container fluid class="py-0 ma-0">
    <v-carousel height="85vh" hide-delimiters>
      <v-carousel-item>
        <v-layout column fill-height justify-center text-xs-center>
          <v-flex xs11 class="white--text animated fadeInDown pt-5">
            <h1 class="fontz">AAKRUTI<span class="lightfont">2019</span>
            </h1>
            <h2 class="fontz2 px-auto" style="line-height: 0.5;">Shaping Imagination</h2>
            <h2 class="fontz2 px-auto pb-5 pt-5">Registrations has been clsoed now..</h2>

            <v-layout row wrap class="my-4 px-3">
              <v-flex xs6 md3 text-xs-center class="pa-2">
                <v-icon class="iconsize">fas fa-university</v-icon>
                <p class="fontzstat mb-0">152</p>
                <p class="fontzstat2">Colleges</p>
              </v-flex>
              <v-flex xs6 md3 text-xs-center class="pa-2">
                <v-icon class="iconsize">fas fa-map-marker-alt</v-icon>
                <p class="fontzstat mb-0">27</p>
                <p class="fontzstat2">States</p>
              </v-flex>
              <v-flex xs6 md3 text-xs-center class="pa-2">
                <v-icon class="iconsize">fas fa-user-graduate</v-icon>
                <p class="fontzstat mb-0">4600</p>
                <p class="fontzstat2">Students</p>
              </v-flex>
              <v-flex xs6 md3 text-xs-center class="pa-2">
                <v-icon class="iconsize">fas fa-users</v-icon>
                <p class="fontzstat mb-0">2300</p>
                <p class="fontzstat2">Teams</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-carousel-item>

      <v-carousel-item>
        <v-layout column fill-height justify-center text-xs-center>
          <v-flex xs11 class="white--text px-2">
            <p
              class="zonetitle px-auto pb-5 pt-5"
            >This year we have recieved an overwhelming response for AAKRUTI from across the country. To make the contest more exciting and give more students an opportunity to present their ideas, we have divided the contest into 3 Zones.</p>

            <v-layout row wrap>
              <v-flex xs12 md4 class="pa-2">
                <div style="border-bottom: 4px solid #34ABFE;">
                  <p class="zonetitle px-auto">ZONE1-NORTH-DELHI</p>
                  <p>Venue :</p>
                </div>
              </v-flex>
              <v-flex xs12 md4 class="pa-2">
                <div style="border-bottom: 4px solid #34ABFE;">
                  <p class="zonetitle px-auto">ZONE2-SOUTH-CHENNAI</p>
                  <p>Venue :</p>
                </div>
              </v-flex>
              <v-flex xs12 md4 class="pa-2">
                <div style="border-bottom: 4px solid #34ABFE;">
                  <p class="zonetitle px-auto">ZONE3-CENTRAL-AHMEDABAD</p>
                  <p>Venue :</p>
                </div>
              </v-flex>
            </v-layout>

            <v-btn
              class="fontzd"
              color="primary"
              round
              outline
              router
              to="/process/#idzone"
            >Read More</v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>
      <v-carousel-item>
        <v-layout row wrap>
          <v-flex xs12 text-xs-center>
            <h2
              class="fontz2 white--text px-auto pb-5 pt-5"
            >Final Product Submission have started...</h2>
            <p class="zonetitle white--text px-auto">Last Date : 31st Aug 2019</p>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.zonetitle {
  font-size: calc(14px + 4 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
}
.zonecontent {
  font-size: calc(13px + 2.5 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
  margin-bottom: 12px;
  line-height: 1.2;
}
.v-carousel__controls {
  background: none !important;
}
.fontz {
  font-size: calc(50px + 32 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-SemiBold';
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: -0.2px;
}
.fontz2 {
  font-size: calc(24px + 12 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-light';
  font-weight: 300;
  letter-spacing: -0.2px;
  text-align: center !important;
}
.lightfont {
  font-family: '3ds-light';
  font-weight: 300;
}

.iconsize {
  font-size: calc(35px + 25 * ((100vw - 320px) / 880)) !important;
  color: #34abfe;
}

.fontzstat {
  font-size: calc(20px + 16 * ((100vw - 320px) / 880));
  font-family: '3ds-SemiBold';
}

.fontzstat2 {
  font-size: calc(14px + 14 * ((100vw - 320px) / 880));
  font-family: '3ds-light' !important;
  font-weight: 500;
}
</style>