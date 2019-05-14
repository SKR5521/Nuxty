<template>
  <nav>
    <v-toolbar flat app dark  color="#005386">
      <v-toolbar-side-icon  @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text ml-1" justify-center>
        <!-- <a router :to="Home.route"><span class="font-weight-bold">AAKRUTI</span><span class="font-weight-light">2019</span></a>        -->
        <v-card width="130px" color="#005386" :to="Home.route">
          <v-img contain :src="require('../assets/img/logo.png')"></v-img>
        </v-card>
        
          
        
      </v-toolbar-title>
     
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router :to="Home.route">
          <v-icon left>{{Home.icon}}</v-icon>
          <span>{{Home.text}}</span>
        </v-btn>
        <v-btn flat router :to="Process.route">
          <v-icon left>{{Process.icon}}</v-icon>
          <span>{{Process.text}}</span>
        </v-btn>

        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">
              <v-icon left>{{Oldak.icon}}</v-icon>
              <span>{{Oldak.text}}</span>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-tile v-for="(item, index) in Oldak.items" :key="index" route :to="item.route">
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat router :to="Gallery.route">
          <v-icon left>{{Gallery.icon}}</v-icon>
          <span>{{Gallery.text}}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" temporary app dark>
      <div class="text-uppercase  white--text text-xs-center py-2 my-4">
        <span class="font-weight-bold display-1">AAKRUTI</span><span class="font-weight-light display-1">2019</span><br/>
        <span class="font-weight-light body-1">Shaping Imagination</span>
        
      </div>

      <v-list>
        <v-list-tile active-class="blue darken-4" avatar  router :to="Home.route">
          <v-list-tile-avatar >
            <v-icon class="white--text">{{ Home.icon }}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{Home.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile active-class="blue darken-4" avatar router :to="Process.route">
          <v-list-tile-avatar>
            <v-icon class="white--text">{{ Process.icon }}</v-icon>
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
                <v-icon class="white--text">{{ Oldak.icon }}</v-icon>
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
            active-class="blue darken-4"
          >
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ subItem.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-divider></v-divider>

        <v-list-tile active-class="blue darken-4" avatar router :to="Gallery.route">
          <v-list-tile-avatar>
            <v-icon class="white--text">{{ Gallery.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{Gallery.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      Home: { icon: 'home', text: 'Home', route: '/' },
      Process: { icon: 'pages', text: 'Process', route: '/Process' },
      Oldak: {
        icon: 'bubble_chart',
        text: 'Journey So Far',
        items: [
          // { text: "AAKRUTI2018", route: "/Previous/18" },
          { text: 'AAKRUTI2017', route: '/Previous/17' },
          { text: 'AAKRUTI2016', route: '/Previous/16' }
        ]
      },
      Gallery: { icon: 'insert_photo', text: 'Gallery', route: '/Gallery' }
    }
  }
}
</script>
<style scoped>

</style>
