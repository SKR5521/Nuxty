<template>
  <div>
    <v-container class="gallery-css">
      <Title topic="Gallery"/>
      <div class="my-3" v-for="item in items" v-bind:key="item.folder">
        <Subtitle v-bind:subtopic="item.text"/>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3 data-aos="fade-down" class="pa-3" v-for="n in 8" :key="n">
            <v-img
              contain
              :src="require('~/assets/img/galleryImg/'+ item.folder + '/0' + n + '.jpg')"
            ></v-img>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'

export default {
  data() {
    return {
      items: [
        {folder: 18, text: "AAKRUTI2018"},
        { folder: 17, text: 'AAKRUTI2017' },
        { folder: 16, text: 'AAKRUTI2016' },
        { folder: 15, text: 'AAKRUTI2015' }
      ]
    }
  },
  components: { Title, Subtitle }
}
</script>
