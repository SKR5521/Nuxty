<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 md3 class="pa-1"  v-for="item in delhi" :key="item">
      <zonecard
        :Tname="item[0]"
        :Tid="item[1]"
        :member1="item[2]"
        :member2="item[3]"
        :college="item[4]"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import zonecard from '@/components/zonecard'

export default {
  components: {
    zonecard
  },
  data: () => ({
    delhi: [
      ['ARG-Bots', '10913396847', 'gyan', 'bharat', 'Narsi Munji pune'],
      ['ARG-Bots2', '10913396834', 'gyancd', 'bharatet', 'Narsi Munji pmpl'],
      [
        'ARG-Bots3',
        '10913396345',
        'gyanwe',
        'bharatesa',
        'NarsiMunji chinchwad pindi'
      ],
      [
        'ARG-Bots4',
        '10913396322',
        'gyanwe',
        'bharatesa',
        'NarsiMunji chinchwad pindi Punjab'
      ],
       ['ARG-Bots', '10913396847', 'gyan', 'bharat', 'Narsi Munji pune'],
      ['ARG-Bots2', '10913396834', 'gyancd', 'bharatet', 'Narsi Munji pmpl'],
      [
        'ARG-Bots3',
        '10913396345',
        'gyanwe',
        'bharatesa',
        'NarsiMunji chinchwad pindi'
      ],
      [
        'ARG-Bots4',
        '10913396322',
        'gyanwe',
        'bharatesa',
        'NarsiMunji chinchwad pindi Punjab'
      ],
       ['ARG-Bots', '10913396847', 'gyan', 'bharat', 'Narsi Munji pune'],
      ['ARG-Bots2', '10913396834', 'gyancd', 'bharatet', 'Narsi Munji pmpl']


    ]


  })
}
</script>