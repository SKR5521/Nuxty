<template>
  <div>
    <Subtitle subtopic="Zone 1-DELHI" />
    <v-layout row wrap justify-center>
      <v-flex xs12 md3 class="pa-1" v-for="item in delhi" :key="item[1]">
        <zonecard
          :Tname="item[0]"
          :Tid="item[1]"
          :member1="item[2]"
          :member2="item[3]"
          :college="item[4]"
        />
      </v-flex>
    </v-layout>

    <Subtitle class="pt-3" subtopic="Zone 2-CHENNAI" />
    <v-layout row wrap justify-center>
      <v-flex xs12 md3 class="pa-1" v-for="item in chennai" :key="item[1]">
        <zonecard
          :Tname="item[0]"
          :Tid="item[1]"
          :member1="item[2]"
          :member2="item[3]"
          :college="item[4]"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import zonecard from '@/components/zonecard'
import Subtitle from '@/components/Subtitle'

export default {
  components: {
    zonecard,
    Subtitle
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
    chennai: [
      [
        'Runoff Generation',
        '10887987420',
        'Kartik Dhadwal',
        'Shilpa Thakur',
        'Banglore Institute Of Science and Technology, Bengaluru, Karnataka'
      ],
      [
        'Ørachna',
        '10892967891',
        'SHREYASH SHANKAR',
        'satrudhan kumar sah',
        'SRM Institute of Science and Technology, Chennai, Tamil Nadu'
      ],
      [
        'T-REX',
        '10931331308',
        'Ishan jain',
        'Amit Chowdhary',
        'SRM Institute of Science and Technology,Chennai, Tamil Nadu'
      ],
      [
        'Mech Spartans',
        '10906970543',
        'Venkatesh R',
        'Jagasirpiyan K',
        'Sri Eshwar college of engineering,Kondampatti, Tamil Nadu'
      ],
      [
        'Phantasie',
        '10894677912',
        'Jeevaa JB',
        'Naveen K',
        'Central Institute of Plastics Engineering & Technology, Chennai, Tamil Nadu'
      ],
      [
        'Tour Billion',
        '10916954025',
        'Bhavesh Dadhich',
        'Chitransh yadav',
        'SRM Institute of Science and Technology, Chennai, Tamil Nadu'
      ],
      [
        'Spark robotics',
        '10893146474',
        'Mridul Ranjan Upadhyay',
        'Mihirkumar Patel',
        'SRM Institute of Science and Technology, Chennai, Tamil Nadu'
      ],
      [
        'Facile Fabricators',
        '10927327401',
        'Vignesh S',
        'Subasre S R',
        'Bannari Amman Institute Of Technology, Sathmangalam, Tamil Nadu'
      ],
      [
        'Godspeed-Alpha',
        '10849579630',
        'Pranay Kotagiri',
        'Chimmani Sri Harsh',
        'Rajiv Gandhi University of Knowledge Technologies, Basar, Telangana'
      ],
      [
        'A-Team',
        '10891776774',
        'Ravi Maurya',
        'Ashutosh Pandey',
        'Dayananda Sagar College of Engineering,Bengaluru,Karnataka'
      ]
    ]
  })
}
</script>