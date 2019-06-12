<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title style="background-color: #E31818 !important;">
        <v-layout wrap align-center row fill-height class="hidden-sm-and-down">
          <v-flex xs3>
            <v-img height="33px" width="180px" class :src="require('../assets/img/SWX.png')"></v-img>
          </v-flex>
          <v-flex xs6 class="ml-3 py-2">
            <v-btn
              v-for="item in items"
              :key="item.icon"
              class="mx-3 white--text"
              dark
              target="_blank"
              icon
              :href="item.ref"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout wrap align-center row fill-height class="hidden-md-and-up">
          <v-flex xs12 md6>
            <v-img
              height="33px"
              width="180px"
              class="py-2"
              style=" margin: 5px auto; display: block;"
              :src="require('../assets/img/SWX.png')"
            ></v-img>
          </v-flex>
          <v-flex xs12 md6 text-xs-center>
            <v-btn
              v-for="item in items"
              :key="item.icon"
              class="mx-3 white--text py-2"
              dark
              target="_blank"
              icon
              :href="item.ref"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card-title>

      <v-card-actions class="grey darken-4 subheading justify-center">
        <v-layout row wrap text-xs-center align-center fill-height>
          <v-flex xs12 md6 align-center>
            <p
              class="mb-0 py-1"
              style="color: rgba(255, 255, 255, .64);"
            >©2019 Dassault Systèmes SOLIDWORKS Corporation</p>
          </v-flex>
          <v-flex xs12 md6>
            <ul class="list-inline">
              <li>
                <a href="https://www.solidworks.com/terms-use" target="_blank">Terms of Use</a>
              </li>
              <li>
                <a href="https://www.solidworks.com/privacy-policy" target="_blank">Privacy Policy</a>
              </li>
              <li>
                <a href="https://www.3ds.com/piracy/" target="_blank">Piracy Prevention</a>
              </li>
              <li>
                <a
                  href="https://www.solidworks.com/license-agreement"
                  target="_blank"
                >License Agreement</a>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-card-actions>
    </v-card>

    <!-- <v-container fluid py-2 >
      
        <v-layout row align-center color="red">
        <v-flex xs4>
          <a target="_blank" href="https://www.3ds.com/">
            <v-img max-width="120px" :src="require('../assets/img/DS1.png')"></v-img>
          </a>
        </v-flex>
      </v-layout>
      
      <v-layout row wrap text-xs-center align-center fill-height color="grey" >
        <v-flex xs12 md6 align-center>
          <p
            class="mb-0 py-2"
            style="color: rgba(255, 255, 255, .64);"
          >©2019 Dassault Systèmes SOLIDWORKS Corporation</p>
        </v-flex>
        <v-flex xs12 md6>
          <ul class="list-inline">
            <li>
              <a href="https://www.solidworks.com/terms-use" target="_blank">Terms of Use</a>
            </li>
            <li>
              <a href="https://www.solidworks.com/privacy-policy" target="_blank">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.3ds.com/piracy/" target="_blank">Piracy Prevention</a>
            </li>
            <li>
              <a
                href="https://www.solidworks.com/license-agreement"
                target="_blank"
              >License Agreement</a>
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>-->
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'fab fa-facebook',
        ref: 'https://www.facebook.com/AakrutiContest/'
      },
      {
        icon: 'fab fa-linkedin',
        ref: 'https://www.linkedin.com/showcase/solidworks/'
      },
      {
        icon: 'fab fa-twitter',
        ref: 'https://twitter.com/solidworks'
      },
      {
        icon: 'fab fa-youtube',
        ref: 'https://www.youtube.com/solidworks'
      }
    ]
  })
}
</script>

<style scoped>
.subheading {
  font-family: '3ds' !important;
  font-size: calc(12px + 3 * ((100vw - 320px) / 880)) !important;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.64);
}
a:hover {
  color: rgba(255, 255, 255, 0.9);
}

.list-inline li {
  position: relative;
  color: rgba(255, 255, 255, 0.64);
  display: inline-block !important;
  margin: 0 5px;
}
</style>
