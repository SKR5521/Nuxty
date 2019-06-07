<template>
  <div class="akprevious">
    <v-container>
      <Title :topic="'AAKRUTI20' + this.$route.params.id"/>
      <v-container>
        <!-- <v-layout py-4 row wrap>
          <v-flex xs6 md3 v-for="stat in states" :key="stat.st" pa-3>
            <v-img
              class="elevation-10"
              contain
              :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/' + stat.st + '.png')"
            ></v-img>
          </v-flex>
        </v-layout>-->

        <div v-for="st in stats" :key="st">
          <v-layout text-uppercase row wrap v-if="(st.year == $route.params.id)">
            <v-flex class="px-1 py-1" xs6 md3 justify-center text-xs-center>
              <v-card class="bord">
                <v-icon class="iconsize mt-4">fas fa-university</v-icon>
                <v-card-text text-xs-center>
                  <h1 class="fontz2">{{st.college}}</h1>
                  <h1 class="fontz">Colleges</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="px-1 py-1" xs6 md3 justify-center text-xs-center>
              <v-card class="bord">
                <v-icon class="iconsize mt-4">fas fa-map-marker-alt</v-icon>
                <v-card-text text-xs-center>
                  <h1 class="fontz2">{{st.state}}</h1>
                  <h1 class="fontz">States</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="px-1 py-1" xs6 md3 justify-center text-xs-center>
              <v-card class="bord">
                <v-icon class="iconsize mt-4">fas fa-user-graduate</v-icon>
                <v-card-text text-xs-center>
                  <h1 class="fontz2">{{st.student}}</h1>
                  <h1 class="fontz">Students</h1>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex class="px-1 py-1" xs6 md3 justify-center text-xs-center>
              <v-card class="bord">
                <v-icon class="iconsize mt-4">fas fa-users</v-icon>
                <v-card-text text-xs-center>
                  <h1 class="fontz2">{{st.teams}}</h1>
                  <h1 class="fontz">Teams</h1>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </div>

        <v-layout py-4 row wrap>
          <v-flex xs6 v-for="(stat, index) in states" :key="stat.st" pa-3>
            <v-img
              class="elevation-10"
              contain
              :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/' + (index+1) + '.png')"
            ></v-img>
          </v-flex>
        </v-layout>

        <Subtitle :subtopic="'Themes'"/>

        <div v-for="item in themes" :key="item.year">
          <template v-if=" $route.params.id == item.year">
            <v-layout justify-center row wrap>
              <v-flex xs12 md5 v-for="th in item.subthems" :key="th">
                <v-card class="text-xs-center bord elevation-10  ma-1">
                  <v-card-text class="para">{{ th }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </template>
        </div>

        <Subtitle :subtopic="'Jury Members'"/>

        <template v-if="this.$route.params.id == 16">
          <v-layout py-4 row wrap>
            <v-flex xs6 md3 v-for="(stat, index) in 6" :key="index" pa-3>
              <v-img
                class="elevation-10"
                contain
                :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/jury/' + (index+1) + '.jpg')"
              ></v-img>
            </v-flex>
          </v-layout>
        </template>
        <template v-if="this.$route.params.id == 17 ">
          <v-layout py-4 row wrap>
            <v-flex xs6 md3 v-for="(stat, index) in 8" :key="index" pa-3>
              <v-img
                class="elevation-10"
                contain
                :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/jury/' + (index+1) + '.jpg')"
              ></v-img>
            </v-flex>
          </v-layout>
        </template>
        <template v-if="this.$route.params.id == 18 ">
          <v-layout py-4 row wrap>
            <v-flex xs6 md3 v-for="(stat, index) in 7" :key="index" pa-3>
              <v-img
                class="elevation-10"
                contain
                :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/jury/' + (index+1) + '.jpg')"
              ></v-img>
            </v-flex>
          </v-layout>
        </template>
      </v-container>

      <v-container>
        <v-layout row justify-space-around>
          <v-flex xs10 xl8>
            <v-carousel hide-delimiters height="auto" width="auto">
              <v-carousel-item
                class="elevation-10"
                v-for="i in 10"
                height="auto"
                width="auto"
                :key="i"
              >
                <v-img
                  :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/top10/' + i + '.jpg')"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Title from '~/components/Title'
import Subtitle from '~/components/Subtitle'

export default {
  components: { Title, Subtitle },
  data() {
    return {
      themes: [
        {
          year: '18',
          subthems: [
            'Innovative Products to Boost Rural Economy',
            'Agriculture Tools and Devices',
            'Reduce-Reuse-Recycle-Purify',
            'Solar/Wind Energy based usful Equipments'
          ]
        },
        {
          year: '17',
          subthems: [
            'Transforming Existing Products with Future Technology',            
            'Innovative Products for Transforming Rural Economy',
            'Smart Products for Specially Abled Citizens',
            'Products for Waste Management and Reuse'
          ]
        },
        {
          year: '16',
          subthems: [
            'Conservation and Smart usage of Natural resources',
            'Divyaang (Specially Abled People) and Senior Citizens',
            'Futuristic Agriculture'
          ]
        },
        {
          year: '15',
          subthems: [
            'Smart Products for Smart Cities',
            'Smart Products for Smart Villages'
          ]
        }
      ],
      stats: [
        {
          year: '18',
          student: '2240',
          state: '24',
          college: '218',
          teams: '1120'
        },
        {
          year: '17',
          student: '1700',
          state: '21',
          college: '196',
          teams: '850'
        },
        {
          year: '16',
          student: '1632',
          state: '19',
          college: '146',
          teams: '816'
        },
        {
          year: '15',
          student: '1406',
          state: '17',
          college: '129',
          teams: '703'
        }
      ],
      states: [
        { st: 'collage' },
        { st: 'state' },
        { st: 'student' },
        { st: 'team' }
      ]
      //
    }
  }
}
</script>

<style scoped>
.para {
  font-size: calc(14px + 3 * ((100vw - 320px) / 880));
}
.iconFont {
  font-size: 100px;
  border: 4px solid rgb(206, 28, 230);
  border-radius: 100px;
}
.bord {
  border: 2px solid #005386;
  border-radius: 30px;
  opacity: 0.9;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
}

.fontz2 {
  font-size: calc(20px + 16 * ((100vw - 320px) / 880));
  font-family: '3ds-SemiBold';
  color: #012D52;
}
.iconsize {
  font-size: calc(35px + 25 * ((100vw - 320px) / 880)) !important;
  color: #E31818;
}
.fontz {
  font-size: calc(14px + 14 * ((100vw - 320px) / 880));
  font-family: '3ds-light' !important;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: #012D52;
  /* 757575 424242*/
}
</style>