<template>
  <v-footer dark height="auto">
    <v-card class="flex " flat tile>
      <v-card-title style="background-color: #00345C !important;" >
        <v-layout wrap align-center row fill-height class="text-xs-center ">
          <v-flex xs12 md6 class="justify-center">
            <strong class="subheading">Get connected with us on social networks!</strong>
          </v-flex>
          <v-flex xs12 md6 class="justify-center">
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
      </v-card-title>
      <v-layout style="background-color: #00345C !important;" row justify-center text-xs-center>
        <v-flex xs3 sm2 md1>
        <v-img class="img-fluid" :src="require('../assets/img/DS.png')"></v-img>
      </v-flex>
      </v-layout>

      <v-card-actions class="grey darken-3  subheading justify-center">
        &copy;2018 —
        <strong class="subheading">Dassault Systems La Fondation</strong>
      </v-card-actions>
    </v-card>
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
        ref: 'https://community.vuetifyjs.com'
      },
      {
        icon: 'fab fa-twitter',
        ref: 'https://madewithvuetifyjs.com'
      },
      {
        icon: 'fab fa-instagram',
        ref: 'https://twitter.com/vuetifyjs'
      }
    ]
  })
}
</script>
<style scoped>
.subheading {
  font-family: '3ds' !important;
  font-size: calc(14px + 4 * ((100vw - 320px) / 880)) !important;
}
</style>
