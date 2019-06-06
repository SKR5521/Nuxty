<template>
  <div id="theme">
    <v-container>
      <Title topic="Themes"/>
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="stat in cont" :key="stat.id" pa-1>
          <v-layout row wrap justify-center align-center fill-height>
            <v-flex xs12 md3>
              <v-img                
                contain
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

  data: () => {
    return {
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
</style>
