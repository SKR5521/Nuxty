<template>
  <nav>
    <v-toolbar flat app dark fixed :color="col">
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text ml-1" justify-center>
        <!-- <a router :to="Home.route"><span class="font-weight-bold">AAKRUTI</span><span class="font-weight-light">2019</span></a>        -->
        <v-card width="130px" color="transparent" :to="Home.route">
          <v-img contain :src="require('../assets/img/logo.png')"></v-img>
        </v-card>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router :to="Home.route">
          <v-icon small left>{{Home.icon}}</v-icon>
          <span>{{Home.text}}</span>
        </v-btn>
        <v-btn flat router :to="Process.route">
          <v-icon small left>{{Process.icon}}</v-icon>
          <span>{{Process.text}}</span>
        </v-btn>

        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">
              <v-icon small left>{{Oldak.icon}}</v-icon>
              <span>{{Oldak.text}}</span>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-tile
              color="#012D52"
              v-for="(item, index) in Oldak.items"
              :key="index"
              route
              :to="item.route"
            >
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat router :to="Gallery.route">
          <v-icon small left>{{Gallery.icon}}</v-icon>
          <span>{{Gallery.text}}</span>
        </v-btn>
      </v-toolbar-items>
      <v-btn
        class="hidden-sm-and-down"
        outline
        round
        target="_blank"
        href="https://www.surveymonkey.com/r/7T7D2VH"
        color="red"
        style="border: 2px solid !important;"
      >Register Here</v-btn>
    </v-toolbar>

    <v-navigation-drawer class="navtogglebg" v-model="drawer" temporary app dark>
      <div class="text-uppercase white--text text-xs-center py-1 mt-4 mb-5">
        <span class="font-weight-bold display-1">AAKRUTI</span>
        <span class="thin">2019</span>
        <br>
        <span class="font-weight-light body-1">Shaping Imagination</span>
      </div>

      <v-list class="pa-0">
        <v-list-tile active-class="blue darken-2" avatar router :to="Home.route">
          <v-list-tile-avatar>
            <v-icon small class="white--text">{{ Home.icon }}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{Home.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile active-class="blue darken-2" avatar router :to="Process.route">
          <v-list-tile-avatar>
            <v-icon small class="white--text">{{ Process.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{Process.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-avatar>
                <v-icon small class="white--text">{{ Oldak.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="white--text">{{ Oldak.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in Oldak.items"
            :key="subItem.title"
            router
            :to="subItem.route"
            active-class="blue darken-2"
          >
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ subItem.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-divider></v-divider>

        <v-list-tile active-class="blue darken-2" avatar router :to="Gallery.route">
          <v-list-tile-avatar>
            <v-icon small class="white--text">{{ Gallery.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{Gallery.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-layout text-xs-center row wrap>
        <v-flex xs12>
          <v-btn outline class="fontbtn" target="_blank"
        href="https://www.surveymonkey.com/r/7T7D2VH" round color="red" style="border: 2px solid !important; font">Register Here</v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      col: '#012D52',
      drawer: false,
      Home: { icon: 'fas fa-home', text: 'Home', route: '/' },
      Process: { icon: 'fas fa-cogs', text: 'Process', route: '/Process' },
      Oldak: {
        icon: 'fas fa-location-arrow',
        text: 'Journey So Far',
        items: [
          { text: 'AAKRUTI2018', route: '/Previous/18' },
          { text: 'AAKRUTI2017', route: '/Previous/17' },
          { text: 'AAKRUTI2016', route: '/Previous/16' }
        ]
      },
      Gallery: { icon: 'fas fa-image', text: 'Gallery', route: '/Gallery' }
    }
  }
}
</script>
<style scoped>
.thin {
  font-family: '3ds-light';
  font-size: 34px;
}
.navtogglebg {
  background: #00345c;
  background: linear-gradient(
    180deg,
    #00345c 0%,
    rgba(2, 44, 67, 0.7) 100%
  ) !important;
  font-family: '3ds';
}
.hover {
  background-color: #1e6794;
}
.display-1 {
  font-family: '3ds' !important;
}
.fontbtn {
  font-family: '3ds' !important;
  font-size: 13px !important;
}
</style>
