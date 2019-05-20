<template>
  <div class="akprevious">
    <v-container>
      <Title :topic="'AAKRUTI20' + this.$route.params.id"/>
      <v-container>
        <v-layout py-4 row wrap>
          <v-flex xs6 md3 v-for="stat in states" :key="stat.st" pa-3>
            <v-img
              class="elevation-10"
              contain
              :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/' + stat.st + '.png')"
            ></v-img>
          </v-flex>
        </v-layout>

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
                <v-card
                  class="text-xs-center bord elevation-10 pa-2 ma-2"
                  
                >
                  <v-card-text class="para font-weight-regular">{{ th }}</v-card-text>
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
            <v-flex xs6 md3 v-for="(stat, index) in 8" :key="index" pa-3>
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
            'Smart Products for Specially Abled Citizens',
            'Innovative Products for Transforming Rural Economy',
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
  font-size: calc(16px + 2 * ((100vw - 320px) / 880));
}
.iconFont {
  font-size: 100px;
  border: 4px solid rgb(206, 28, 230);
  border-radius: 100px;
}
.bord {
  border: 3px solid #005386;
  border-radius: 30px;
  opacity: 0.9;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
}
</style>