<template>
  <v-container fluid class="py-0 ma-0">
    <v-carousel  hide-controls height="95vh" hide-delimiters>
      <v-carousel-item>
        <v-layout column fill-height justify-center text-xs-center>
          <v-flex xs11 class="white--text animated fadeInDown pt-3">
            <h1 class="fontz">AAKRUTI<span class="lightfont">2019</span></h1>
            <h2 class="fontz2 px-auto" style="line-height: 0.5;">Shaping Imagination</h2>
            <h2 class="fontz2 px-auto pb-4 pt-4">Thanks for the Overwhelming Response</h2>
            <v-layout row wrap justify-center class="my-3 px-3">
              <v-flex xs6 md2 text-xs-center class="pa-1">
                <v-icon class="iconsize">fas fa-university</v-icon>
                <p class="fontzstat mb-0">332</p>
                <p class="fontzstat2">Colleges</p>
              </v-flex>
              <v-flex xs6 md2 text-xs-center class="pa-1">
                <v-icon class="iconsize">fas fa-map-marker-alt</v-icon>
                <p class="fontzstat mb-0">26</p>
                <p class="fontzstat2">States</p>
              </v-flex>
              <v-flex xs6 md2 text-xs-center class="pa-1">
                <v-icon class="iconsize">fas fa-user-graduate</v-icon>
                <p class="fontzstat mb-0">4932</p>
                <p class="fontzstat2">Students</p>
              </v-flex>
              <v-flex xs6 md2 text-xs-center class="pa-1">
                <v-icon class="iconsize">fas fa-users</v-icon>
                <p class="fontzstat mb-0">2466</p>
                <p class="fontzstat2">Teams</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-carousel-item>

      <v-carousel-item>
        <h2 class="fontz2 white--text px-auto pb-4 pt-4">Zonal Events</h2>
        <v-layout column justify-center text-xs-center>          
          <v-flex xs11 class="white--text animated fadeInDown px-auto" >
            <v-layout row wrap text-xs-left justify-center >
              <v-flex xs12 md3 class="ma-3" style="border-bottom: 5px solid #34ABFE !important;">
                <div  >
                  <p class="zonetitle">ZONE 1-CENTER-DELHI</p>
                  <p class="fontz2venue white--text">
                    <span class="grey--text fontzdate">DATE :</span> 13th September 2019
                  </p>

                  <p class="fontz2venue white--text">
                    <span class="grey--text fontzdate">VENUE :</span> Pearl Academy, Rajouri Garden, New Delhi
                  </p>
                </div>
              </v-flex>
              <v-flex xs12 md3 class="ma-3" style="border-bottom: 5px solid #34ABFE !important;">
                <div >
                  <p class="zonetitle">ZONE 2-CENTER-CHENNAI</p>
                  <p class="fontz2venue white--text">
                    <span class="grey--text fontzdate">DATE :</span> 16th September 2019
                  </p>

                  <p class="fontz2venue white--text">
                    <span class="grey--text fontzdate">VENUE :</span> SRM Institute Of Science And Technology, City Campus, Chennai
                  </p>
                </div>
              </v-flex>
              <v-flex xs12 md3 class="ma-3" style="border-bottom: 5px solid #34ABFE !important;">
                <div >
                  <p class="zonetitle">ZONE 3-CENTER-AHMEDABAD</p>
                  <p class="fontz2venue white--text">
                    <span class="grey--text fontzdate">DATE :</span> 24th September 2019
                  </p>

                  <p class="fontz2venue white--text">
                    <span class="grey--text fontzdate">VENUE :</span> Gujarat Technological University, Ahmedabad
                  </p>
                </div>
              </v-flex>
            </v-layout>

            <v-btn
              class="fontzd mt-3"
              color="primary"
              round
              outline
              router
              to="/process/#idzone"
            >Read More</v-btn>
          </v-flex>
        </v-layout>
      </v-carousel-item>

      <!-- <v-carousel-item>
        <v-layout row wrap text-xs-left>
          <v-flex xs12>
            <h2 class="fontz2 white--text px-auto pb-5 pt-5">Product Submission</h2>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap justify-center>
              <v-flex xs10 text-xs-left>
                <p class="zonetitle white--text">Final Product Submission ends : 31st September 2019</p>
                <p class="zonetitle white--text">Initial Design Submission has been closed.</p>
                <p class="zonetitle white--text">Checkout evaluation criteria at Process Page.</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-carousel-item> -->

    </v-carousel>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
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
  font-size: calc(30px + 25 * ((100vw - 320px) / 880)) !important;
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

.fontz2venue {
  font-size: calc(14px + 3 * ((100vw - 320px) / 880));
  font-family: '3ds-SemiBold';
}
.fontzdate {
  font-size: calc(13px + 2 * ((100vw - 320px) / 880));
  font-family: '3ds';
  color: #757575;
}
.zonetitle {
  font-size: calc(15px + 4 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
}
</style>