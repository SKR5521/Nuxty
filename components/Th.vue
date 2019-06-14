<template>
  <div>
    <Title topic="Themes"/>

    <v-container class="hidden-sm-and-up">
      <v-layout column wrap>
        <v-flex xs12 md6 v-for="stat in cont" :key="stat.id" pa-1>
          <v-layout
            row
            wrap
            justify-center
            align-center
            fill-height
            class="pa-2"
            style="border-bottom: 4px solid #005386;"
          >
            <v-flex xs12 md3 justify-space-around>
              <v-img
                contain
                max-width="180px"
                :src="require('~/assets/img/Themes/' + stat.id + '.png')"
              ></v-img>
              <p class="fontz2">{{ stat.tag }}</p>
            </v-flex>
            <v-flex xs12 md7>
              <div v-for="it in stat.desc" :key="it">
                <p text-xs-left class="fontz grey--text text--darken-2">{{ it }}</p>
              </div>
            </v-flex>
            <v-flex xs12 text-xs-right>
              <v-spacer></v-spacer>
              <v-btn color="#3DA9EB" round outline router to="/Process/#themesel">Read More</v-btn>
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
          <v-dialog v-model="dialog" max-width="600px">
            <v-card class="pa-5 bord2">
              <div v-for="stat in cont" :key="stat.id">
                <v-layout row wrap justify-center text-xs-center v-show="stat.id == it">
                  <v-flex xs12>
                    <v-img
                      contain
                      max-height="300px"
                      :src="require('~/assets/img/Themes/' + stat.id + '.png')"
                    ></v-img>
                  </v-flex>
                  <v-flex xs12>
                    <p class="fontz2">{{ stat.tag }}</p>
                    <div v-for="it in stat.desc" :key="it">
                      <p class="fontz grey--text text--darken-2">{{ it }}</p>
                    </div>
                  </v-flex>
                </v-layout>
              </div>
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
    },
    dialbtn() {
      this.dialog = !this.dialog
      this.$route.push({ path: '/Process/#themesel' })
    }
  },

  data: () => {
    return {
      dialog: false,
      it: 1,
      cont: [
        {
          id: 1,
          tag: 'Research, Refine and Redesign to Optimize',
          desc: [
            'Even a small mobile connected the whole world.',
            'Think, Re-engineer, simulate and validate existing product and optimize it.',
            'The optimized product should be smaller, lighter, faster and efficient & makes life easy.'
          ]
        },

        {
          id: 2,
          tag: 'Power the Future',
          desc: [
            'In the age of Smart Gadgets, let’s think of Smart Energy Designs.',
            'Can we create/convert products which uses only renewable energy in smarter way and be champions of green energy?',
            'These products could be for Offices, homes, villages & remote areas.'
          ]
        },

        {
          id: 3,
          tag: 'Harness and Protect for Future',
          desc: [
            'While water is viewed as next big challenge for the world, can we explore ways to use water for energy generation and transportation to create green and sustainable environment?',
            'Think how to protect ocean and aquatic life from contamination and harmful plants. Can we design a product to design to achieve this?',
            'Can we design products for villages and remote communities to avail clean /drinkable water?'
          ]
        },

        {
          id: 4,
          tag: 'REDUCE - REUSE - RECYCLE',
          desc: [
            'Can we look at ‘waste’ in a different perspective to create greener and sustainable environment?',
            'Trigger your imagination and device a mechanism, which can convert solid, liquid, organic waste, recyclable waste & hazardous waste in a meaningful way to generate wealth for country and wonder for world.'
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
.fontz2 {
  font-size: calc(16px + 5 * ((100vw - 320px) / 880));
  font-family: '3ds-SemiBold';
  color: #3098e1;
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
