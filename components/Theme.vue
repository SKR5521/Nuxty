<template>
  <div id="theme">
    <Title topic="Themes"/>

    <v-container class="hidden-sm-and-up">
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="stat in cont" :key="stat.id" pa-1>
          <v-layout row wrap justify-center align-center fill-height class=" pa-2" style="border-bottom: 4px solid #005386;">
            <v-flex xs12 md3 justify-space-around>
              <v-img
                contain
                max-width="200px"
                :src="require('~/assets/img/Themes/' + stat.id + '.png')"
              ></v-img>
            </v-flex>
            <v-flex xs12 md7>
              <div v-for="it in stat.desc" :key="it">
                <p text-xs-left class="fontz grey--text text--darken-2">{{ it }}</p>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="hidden-xs-only">
      <v-layout row wrap>
        <v-flex xs6 md3 v-for="stat in 4" :key="stat" pa-3>
          <v-img
            class="image-hover-highlight"
            contain
            v-on:click.stop="diaClick(stat)"
            :src="require('~/assets/img/Themes/' + stat + '.png')"
          ></v-img>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card class="pa-5 bord2">
              <v-template v-for="stat in cont" :key="stat.id">
                <v-layout row wrap justify-center text-xs-center v-if="stat.id == it">
                  <v-flex xs12>
                    <v-img
                      contain
                      max-height="330px"
                      :src="require('~/assets/img/Themes/' + stat.id + '.png')"
                    ></v-img>
                  </v-flex>
                  <v-flex xs12>
                    <div v-for="it in stat.desc" :key="it">
                      <p text-xs-left class="fontz grey--text text--darken-2">{{ it }}</p>
                    </div>
                  </v-flex>
                </v-layout>
              </v-template>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'

export default {
  components: {
    Title,
    Subtitle
  },
  methods: {
    diaClick(st) {
      this.it = st
      this.dialog = !this.dialog
    }
  },

  data: () => {
    return {
      dialog: false,
      it: 1,
      cont: [
        {
          id: 1,
          desc: [
            '“Re-engineer” an existing product and reduce weight, thereby improving output / performance',
            'Product should be made smaller, lighter, or more efficient so that it can be used in beneficial ways not possible today',
            'Product must be specifically re-designed to derive benefits of ‘Additive Manufacturing’, Topology Optimization',
            'Improvement should benefit manual workers or labor by reducing effort and providing safety'
          ]
        },

        {
          id: 2,
          desc: [
            'Renewable energy powered products for homes and offices in Urban and Rural areas ',
            'To make cities cleaner and more energy efficient, reduce pollution and create sustainable and great places to Live',
            'Innovative, efficient and faster recharging solutions for Electric Vehicles'
          ]
        },

        {
          id: 3,
          desc: [
            'Harnessing Seas for betterment of human life (Products to utilize tidal wave energy, farming under water, water transport)',
            'Protecting oceans and rivers from pollution, Oil spills, plastic, harmful hyacinth'
          ]
        },

        {
          id: 4,
          desc: [
            'Products which can Utilize /reuse/recycle e-waste',
            'Products which can recycle biodegradable (Bio-waste) & non-biodegradable Waste'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.fontz {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  /* 757575 424242*/
}
.bord {
  border: 2px solid #005386;
  border-radius: 30px;
  opacity: 0.9;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
}
.v-dialog__content--active {
  background-color: rgba(0, 0, 0, 0.2) !important;
}

.bord2 {
  border: 5px solid #005386;
  /* border-radius: 30px!important; */
  opacity: 0.9;
  /* box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3); */
}

.image-hover-highlight {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.image-hover-highlight:hover {
  border: 2px solid #005386;
  border-radius: 30px;
  background-color: white;
  cursor: pointer;
  opacity: 0.9;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  filter: brightness(130%);
  -webkit-filter: brightness(130%);
  -moz-filter: brightness(130%);
  -o-filter: brightness(130%);
  -ms-filter: brightness(130%);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
</style>
