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
          :cls="item[5]"
          :zwin="item[6]"
        />
      </v-flex>
    </v-layout>

    <Subtitle id="chennai" class="pt-3" subtopic="Zone 2-CHENNAI" />
    <v-layout row wrap justify-center>
      <v-flex xs12 md3 class="pa-1" v-for="item in chennai" :key="item[1]">
        <zonecard
          :Tname="item[0]"
          :Tid="item[1]"
          :member1="item[2]"
          :member2="item[3]"
          :college="item[4]"
          :cls="item[5]"
          :zwin="item[6]"
        />
      </v-flex>
    </v-layout>

    <Subtitle id="ahm" class="pt-3" subtopic="Zone 3-AHMEDABAD" />
    <v-layout row wrap justify-center>
      <v-flex xs12 md3 class="pa-1" v-for="item in ahm" :key="item[1]">
        <zonecard
          :Tname="item[0]"
          :Tid="item[1]"
          :member1="item[2]"
          :member2="item[3]"
          :college="item[4]"
          :cls="item[5]"
          :zwin="item[6]"
          :wc="item[7]"
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
        'GenBrains',
        '10882803577',
        'Biswajit Tripathy',
        'Sidhi Sagar Mishra',
        'Veer Surendra Sai University of Technology, Burla, Odisha',
        'win-th',
        true
      ],
      [
        'Hybrix',
        '10915485193',
        'Nikhil Sharma',
        'Aaishwarika Raj Sharma',
        'Chitkara University, Chandigarh, Punjab',
        'win-th',
        true
      ],
      [
        '1729',
        '10916357890',
        'Kalpit Prajapati',
        'Prakhar Yadav',
        'J.S.S. Academy of Technical Education, Noida, Uttar Pradesh',
        'win-th',
        true
      ],
      [
        'GearHeads',
        '10885386219',
        'Ankush Sharma',
        'Aayush Srivastava',
        'ABES Engineering College, Ghaziabad, UttarPradesh',
        'blue-th',
        false
      ],
      [
        'Aavishkaar',
        '10889533219',
        'Aditya Kumar',
        'Ayush Chaturvedi',
        'University Of Petroleum And Energy Studies, Dehradun, Uttarakhand',
        'blue-th',
        false
      ],
      [
        'Poseidon',
        '10892061433',
        'Souradeep Bhowmick',
        'Anik Das',
        'Birla Institute of Technology, Mesra, Jharkhand',
        'blue-th',
        false
      ],
      [
        'Aavishkaar',
        '10913729315',
        'Aditya Kumar',
        'Ayush Chaturvedi',
        'University Of Petroleum And Energy Studies, Dehradun, Uttarakhand',
        'blue-th',
        false
      ],
      [
        'Stormbreakers',
        '10916544676',
        'Hemant Garg',
        'Chandan Gupta',
        'University Institute of Engineering and Technology, Punjab University, Chandigarh',
        'blue-th',
        false
      ],
      [
        'Srijan',
        '10916479101',
        'Sachin Arya',
        'Kamal Kant',
        'JC Bose University of Science and Technology, YMCA, Faridabad',
        'blue-th',
        false
      ],
      [
        'Enigma',
        '10918287990',
        'Biswajit Tripathy',
        'Jaya Jasomati Bir',
        'Veer Surendra Sai University of Technology, Burla, Odisha',
        'blue-th',
        false
      ]
    ],
    chennai: [
      [
        'Runoff Generation',
        '10887987420',
        'Kartik Dhadwal',
        'Shilpa Thakur',
        'Banglore Institute Of Science and Technology, Bengaluru, Karnataka',
        'win-th',
        true
      ],
      [
        'Facile Fabricators',
        '10927327401',
        'Vignesh S',
        'Subasre S R',
        'Bannari Amman Institute Of Technology, Sathyamangalam, Tamil Nadu',
        'win-th',
        true
      ],
      [
        'A-Team',
        '10891776774',
        'Ravi Maurya',
        'Ashutosh Pandey',
        'Dayananda Sagar College of Engineering, Bengaluru, Karnataka',
        'win-th',
        true
      ],
      [
        'Rachna',
        '10892967891',
        'Shreyash Shankar',
        'Satrudhan Kumar Sah',
        'SRM Institute of Science and Technology, Chennai, Tamil Nadu',
        'blue-th',
        false
      ],
      [
        'T-REX',
        '10931331308',
        'Ishan jain',
        'Amit Chowdhary',
        'SRM Institute of Science and Technology, Chennai, Tamil Nadu',
        'blue-th',
        false
      ],
      [
        'Mech Spartans',
        '10906970543',
        'Venkatesh R',
        'Jagasirpiyan K',
        'Sri Eshwar college of engineering, Kondampatti, Tamil Nadu',
        'blue-th',
        false
      ],
      [
        'Phantasie',
        '10894677912',
        'Jeevaa JB',
        'Naveen K',
        'Central Institute of Plastics Engineering & Technology, Chennai, Tamil Nadu',
        'blue-th',
        false
      ],
      [
        'Tour Billion',
        '10916954025',
        'Bhavesh Dadhich',
        'Chitransh yadav',
        'SRM Institute of Science and Technology, Chennai, Tamil Nadu',
        'blue-th',
        false
      ],
      [
        'Spark robotics',
        '10893146474',
        'Mridul Ranjan Upadhyay',
        'Mihirkumar Patel',
        'SRM Institute of Science and Technology, Chennai, Tamil Nadu',
        'blue-th',
        false
      ],

      [
        'Godspeed-Alpha',
        '10849579630',
        'Pranay Kotagiri',
        'Chimmani Sri Harsh',
        'Rajiv Gandhi University of Knowledge Technologies, Basar, Telangana',
        'blue-th',
        false
      ]
    ],
    ahm: [
      [
        'Thermo',
        '10860304495',
        'Ayush Agrawal',
        'Revati Bohra',
        'Dr. D.Y. Patil Institute of Engineering, Management and Research, Pune, Maharashtra',
        'win-th',
        true
      ],
      [
        'Crio',
        '10892239886',
        'Sumedh Manjrekar',
        'Nilesh Gandhi',
        'K. J. Somaiya College of Engineering, Mumbai, Maharashtra',
        'win-th',
        true
      ],
      [
        'TechAngels',
        '10916864785',
        'Shreyan Shastri',
        'Anuj Goyal',
        'Vishwakarma Institute of Technology, Pune, Maharashtra',
        'win-th',
        true
      ],
      [
        'Agrobots',
        '10887378734',
        'Kunal Bharat Aglave',
        'Sakshi Rajshekhar Bhuse',
        'Sanjivani College of Engineering, Kopergaon, Maharashtra',
        'win-th',
        true,
        '(Wild Card Entry)'
      ],
      [
        'Designwale',
        '10917616486',
        'Rishav Ranjeet Sharma',
        'Ruchi Nilesh Pourana',
        'Thakur College of Engineering and Technology, Mumbai, Maharashtra',
        'blue-th',
        false
      ],
      [
        'Technovus',
        '10869839098',
        'Abhishek Chaudhari',
        'Kalpesh Narendra Patil',
        'Pimpri Chinchwad College of Engineering, Pune, Maharashtra',
        'blue-th',
        false
      ],

      [
        'Trailblazers',
        '10892847455',
        'Utkarsh Urkade',
        'Rijul Jain',
        'National Institute of Technology, Raipur, Chhattisgarh',
        'blue-th',
        false
      ],
      [
        'R S Energy',
        '10840536103',
        'Onkar Narharshettiwar',
        'Virag Umathe',
        'Pimpri Chinchwad College of Engineering, Pune, Maharashtra',
        'blue-th',
        false
      ],
      [
        'Unoya',
        '10894505330',
        'Sourabh Vijay Katare',
        'Parmeshwar Bansode',
        'N K Orchid College of Engineering & Technology, Solapur, Maharashtra',
        'blue-th',
        false
      ],
      [
        'Rahi',
        '10885707970',
        'Atharva Mahesh Shirsath',
        'Vaishnav Shelke',
        'Visvesvaraya National Institute of Technology, Nagpur, Maharashtra',
        'blue-th',
        false
      ]
    ]
  })
}
</script>