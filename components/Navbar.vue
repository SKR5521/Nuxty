<template>
  <nav>
    <v-toolbar flat dark :color="col">
      <v-toolbar-side-icon @click="drawer=!drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text ml-0">
        <!-- <a router :to="Home.route"><span class="font-weight-bold">AAKRUTI</span><span class="font-weight-light">2019</span></a>        -->
        <v-card width="180px" color="transparent" :to="Home.route">
          <v-img contain :src="require('../assets/img/SWX.png')"></v-img>
        </v-card>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router :to="Home.route">
          <v-icon small left>{{Home.icon}}</v-icon>
          <span>{{Home.text}}</span>
        </v-btn>
        <v-btn flat router :to="Process.route" disabled>
          <v-icon small left>{{Process.icon}}</v-icon>
          <span>{{Process.text}}</span>
        </v-btn>

        <v-menu
          open-on-hover                
          bottom          
          close-delay="150"
          origin="center center"
          transition="scale-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">
              <v-icon small left>{{Oldak.icon}}</v-icon>
              <span>{{Oldak.text}}</span>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-btn>
          </template>

          <v-list dense >
            <v-list-tile             
              class="bg "
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

      <v-btn round @click="top" color="#182952">
        Winners Are
      </v-btn>
    </v-toolbar>

    <!-- Dialog code here  -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="fontz2 darken-2 white--text">Event Updates</v-card-title>

        <v-card-text>
          <div v-for="it in updateText" :key="it">
            <p class="fontz py-1">
              <v-icon class="grey--text text--darken-2 para pr-1 ma-0">fas fa-caret-right</v-icon>
              {{ it }}
            </p>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" small round class="white--text" @click="dialog = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-navigation-drawer class="navtogglebg" v-model="drawer" app temporary dark>
      <div class="text-uppercase white--text text-xs-center py-1 mt-4 mb-5">
        <span class="font-weight-bold display-1">AAKRUTI</span>
        <span class="thin">2019</span>
        <br />
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

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  methods: {
    top() {
      if (this.$route.path == '/') {
        // $vuetify.goto('#zonefinalist')
        var el = document.getElementById('zonefinalist')
        console.log(el)
         window.scrollTo({  top: el.offsetTop , left: 0,  behavior: 'smooth'  })
      }
      else
      {
        this.$router.push({  path: '/#zonefinalist' })
      }
      
    }
  },
  data() {
    return {
      col: '#E31818',
      drawer: false,
      dialog: false,
      un: 3,
      updateText: [
        'Final product submission has been started. Submissions links has been emailed to all the participants.',
        'Final product submission ends on 31st August 2019.',
        'Announcing Zonal Rounds - Zonal qualifier rounds will happen in three zones Delhi, Ahmedabad and Chennai. For more details checkout Process section.'
      ],
      Home: { icon: 'fas fa-home', text: 'Home', route: '/' },
      Process: { icon: 'fas fa-cogs', text: 'Process', route: '/Process' },
      Oldak: {
        icon: 'fas fa-location-arrow',
        text: 'Journey So Far',
        items: [
          { text: 'AAKRUTI2019', route: '/Previous/19' },
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

.bg:hover {
  color: white;
  background-color:#012d52;
}
.para {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880)) !important;
}
.fontz {
  font-size: calc(14px + 2.5 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
  margin-bottom: 12px;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: #012d52;
  /* 757575 424242*/
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
.fontz2 {
  font-size: calc(16px + 5 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-SemiBold';
  background-color: #014a7d;
}
.v-dialog__content--active {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
