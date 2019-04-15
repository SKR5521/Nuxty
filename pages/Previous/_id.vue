<template>
  <div class="akprevious grey">
    <v-container>
      <Title :topic="'AAKRUTI20' + this.$route.params.id"/>
      <v-container>
        <v-layout py-4 row wrap>
          <v-flex xs6 md3 v-for="stat in states" :key="stat.st" pa-3>
            <v-img
              contain
              :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/' + stat.st + '.png')"
            ></v-img>
          </v-flex>
        </v-layout>
        <v-layout py-4 row wrap>
          <v-flex xs6 v-for="(stat, index) in states" :key="stat.st" pa-3>
            <v-img
              contain
              :src="require('~/assets/img/PreviousYear/'+ $route.params.id + '/' + (index+1) + '.png')"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
      <Subtitle :subtopic="'Themes'"/>

      <v-container>
        <v-layout row justify-space-around>
          <v-flex xs10 xl8>
            <v-carousel hide-delimiters height="auto" width="auto">
              <v-carousel-item v-for="i in 10" height="auto" width="auto" :key="i">
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
