<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 md3 class="pa-1" v-for="item in delhi" :key="item">
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
      [
        'GearHeads',
        '10885386219',
        'Ankush Sharma',
        'Aayush Srivastava',
        'ABES Engineering College, Ghaziabad , UttarPradesh'
      ],
      [
        'GenBrains',
        '10882803577',
        'BISWAJIT TRIPATHY',
        'SIDHI SAGAR MISHRA',
        'Veer Surendra Sai University of Technology, Burla, Odisha'
      ],
      [
        'Aavishkaar',
        '10889533219',
        'ADITYA KUMAR',
        'AYUSH CHATURVEDI',
        'University Of Petroleum And Energy Studies, Dehradun, Uttarakhand'
      ],
      [
        'Poseidon',
        '10892061433',
        'Souradeep Bhowmick',
        'Anik Das',
        'Birla Institute of Technology, Mesra, Jharkhand'
      ],
      [
        'Aavishkaar',
        '10913729315',
        'ADITYA KUMAR',
        'AYUSH CHATURVEDI',
        'University Of Petroleum And Energy Studies, Dehradun, Uttarakhand'
      ],
      [
        'Hybrix',
        '10915485193',
        'Nikhil Sharma',
        'Aaishwarika Raj Sharma',
        'Chitkara University, Chandigarh, Punjab'
      ],
      [
        '1729',
        '10916357890',
        'KALPIT RAJAPATI',
        'PRAKHAR YADAV',
        'J.S.S. Academy of Technical Education, Noida, Uttar Pradesh'
      ],
      [
        'Stormbreakers',
        '10916544676',
        'Hemant Garg',
        'Chandan Gupta',
        'University Institute of Engineering and Technology , Punjab University , Chandigarh'
      ],
      [
        'Srijan',
        '10916479101',
        'Sachin Arya',
        'Kamal Kant',
        'JC Bose University of Science and Technology, YMCA ,Faridabad'
      ],
      [
        'Enigma',
        '10918287990',
        'Biswajit Tripathy',
        'Jaya Jasomati Bir',
        'Veer Surendra Sai University of Technology,Burla, Odisha'
      ]
    ],
    chennai: []
  })
}
</script>