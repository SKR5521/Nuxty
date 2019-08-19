<template>
  <div>
    <v-container>
      <Title topic="Process" />

      <v-layout row wrap>
        <!-- <Subtitle id="register" subtopic="HOW can I Register?" />
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <div v-for="item in reg" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <v-btn
                outline
                round
                :small="onResize()"
                color="blue darken-2"
                router
                to="/DownloadInstruction"
              >
                <span class="fontzd">Download SOLIDWORKS</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>-->

        <!-- <Subtitle id="themesel" subtopic="HOW to choose a Theme?" />
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12 class="py-2">
              <p class="fontz22 grey--text text--darken-3">
                <span class="black--text fontz2">Small is BIG</span> : Research, Refine and Redesign to Optimize
              </p>
              <p
                class="fontz font-weight-regular"
              >Even a small mobile connected the whole world. Think, Re-engineer, simulate and validate existing product and optimize it. The optimized product should be smaller, lighter, faster and efficient and makes life easy.</p>
              <v-flex offset-xs1>
                <p class="fontz" v-for="i in th1" :key="i">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ i }}
                </p>
              </v-flex>
            </v-flex>

            <v-flex xs12 class="py-2">
              <p class="fontz22 grey--text text--darken-3">
                <span class="black--text fontz2">Smart ENERGY</span> : Power the Future
              </p>
              <p
                class="fontz font-weight-regular"
              >In the age of Smart Gadgets, let’s think of Smart Energy Designs. Can we create/convert products which uses only renewable energy in smarter way and be champions of green energy? These products could be for Offices, homes, villages and remote areas.</p>
              <v-flex offset-xs1>
                <p class="fontz" v-for="i in th2" :key="i">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ i }}
                </p>
              </v-flex>
            </v-flex>

            <v-flex xs12 class="py-2">
              <p class="fontz22 grey--text text--darken-3">
                <span class="black--text fontz2">Water is LIFE</span> : Harness and Protect for Future
              </p>
              <p
                class="fontz font-weight-regular"
              >While water is viewed as next big challenge for the world, can we explore ways to use water for energy generation and transportation to create green and sustainable environment? Think how to protect ocean and aquatic life from contamination and harmful plants. Can we design a product to design to achieve this? Can we design products for villages and remote communities to avail clean /drinkable water?</p>
              <v-flex offset-xs1>
                <p class="fontz" v-for="i in th3" :key="i">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ i }}
                </p>
              </v-flex>
            </v-flex>

            <v-flex xs12 class="py-2">
              <p class="fontz22 grey--text text--darken-3">
                <span class="black--text fontz2">Waste to Wealth to Wonder</span> : REDUCE - REUSE - RECYCLE
              </p>
              <p
                class="fontz font-weight-regular"
              >Can we look at ‘waste’ in a different perspective to create greener and sustainable environment? Trigger your imagination and device a mechanism, which can convert solid, liquid, organic waste, recyclable waste & hazardous waste in a meaningful way to generate wealth for country and wonder for world.</p>
              <v-flex offset-xs1>
                <p class="fontz" v-for="i in th4" :key="i">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ i }}
                </p>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>-->

        <Subtitle id="msubmit" subtopic="HOW can I submit my Entry?" />
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <div v-for="item in contest" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
              
            </v-flex>
            <v-btn
                outline
                round
                :small="onResize()"
                color="blue darken-2"
                router
                to="/ProductSubmission"
              >
                <span class="fontzd">Product Submission Guide</span>
              </v-btn>
          </v-layout>
        </v-container>

        <Subtitle id="eval" subtopic="Evaluation Criteria" />
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <p class="fontz22 grey--text text--darken-3">
                <span class="fontz2 black--text">Design Content Criteria</span> – Design of the product will be evaluated on the basis of :
              </p>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <div v-for="item in eval1" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
            <v-flex xs12>
              <p class="fontz22 grey--text text--darken-3">
                <span class="fontz2 black--text">DIY Manufacturing Content Criteria</span> – (Do It Yourself – Ready for manufacturing Digital content of designed Product) :
              </p>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <div v-for="item in eval2" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
          </v-layout>

          <v-layout class="py-4" column justify-center text-xs-center>
            <div class="bord pa-3">
              <v-flex xs12>
                <blockquote
                  class="para font-italic grey--text text--darken-1"
                >How YOUR innovative ideas can be taken to masses and provide them in a form so that it can be even manufactured at any village. Any artisan in a rural area should be able to manufacture the innovative product and make it available for local community.</blockquote>
              </v-flex>
              <v-flex xs12>
                <blockquote
                  class="para font-italic grey--text text--darken-1"
                >Hence we request all the innovators to come forward and contribute for the betterment of community and utilize your creativity, knowledge and skills to help a needy.</blockquote>
              </v-flex>
            </div>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs12>
              <p class="fontz font-weight-regular">
                <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>Team needs to submit their Design, Presentations and supporting manufacturing details aligned with themes before last week of August.
              </p>
            </v-flex>
            <v-flex xs12>
              <div v-for="item in eval3" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>

            <v-flex xs10 offset-xs1>
              <p class="fontz grey--text">Note :</p>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <div v-for="item in evalnote" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>

      <Subtitle id="idzone" subtopic="HOW AAKRUTI is different this year?" />
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12>
            <p
              class="fontz22 grey--text text--darken-3"
            >This year we have received an overwhelming response for AAKRUTI from across the country. To make the contest more exciting and give more students an opportunity to present their ideas, we have divided the contest into 3 Zones.</p>
            <div v-for="item in zone" :key="item">
              <p class="fontz font-weight-regular">
                <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
                {{ item }}
              </p>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex class="px-1 py-2" xs12 md4 justify-center>
            <v-card class="bord" height="100%">
              <v-card-text>
                <h1 class="fontz22 pb-3">ZONE 1 - CENTER- DELHI</h1>
                <p class="fontz black--text">
                  <span class="fontz">DATE :</span> 13th September 2019
                </p>

                <p class="fontz black--text">
                  <span class="fontz">VENUE :</span> Pearl Academy, Rajouri Garden, New Delhi
                </p>
                <p
                  class="fontz"
                >UT-Delhi, Jammu & Kashmir, Haryana, Punjab, Himachal Pradesh, Uttar Pradesh, Uttrakhand, Rajasthan, West Bengal, Bihar, UT-Chandigarh, Arunachal Pradesh, Assam, Meghalaya, Manipur, Nagaland, Tripura, Jharkhand, Sikkim, Odisha</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex class="px-1 py-2" xs12 md4 justify-center>
            <v-card class="bord" height="100%">
              <v-card-text>
                <h1 class="fontz22 pb-3">ZONE 2 - CENTER- CHENNAI</h1>
                <p class="fontz black--text">
                  <span class="fontz">DATE :</span> 16th September 2019
                </p>

                <p class="fontz black--text">
                  <span class="fontz">VENUE :</span> SRM Institute Of Science And Technology, City Campus, Chennai
                </p>
                <p
                  class="fontz"
                >Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Karnataka, UT-Andaman and Nicobar Islands, UT-Pondicherry-Puducherry, UT-Lakshadweep</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex class="px-1 py-2" xs12 md4 justify-center>
            <v-card class="bord" height="100%">
              <v-card-text>
                <h1 class="fontz22 pb-3">ZONE 3 - CENTER- AHMEDABAD</h1>
                <p class="fontz black--text">
                  <span class="fontz">DATE :</span> 24th September 2019
                </p>

                <p class="fontz black--text">
                  <span class="fontz">VENUE :</span> Gujarat Technological University, Ahmedabad
                </p>
                <p
                  class="fontz"
                >Maharashtra, Gujarat, Madhya Pradesh, Goa, UT-Daman and Diu, UT-Dadra and Nagar Haveli, Chhattisgarh</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center text-xs-center>
          <v-flex xs10 class="pa-2">
            <v-img contain :src="require('~/assets/img/india.png')"></v-img>
          </v-flex>
        </v-layout>
      </v-container>

      <Finalday id="finalday" />
    </v-container>

    <v-container fluid class="hidden-xs-only">
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <fbtn />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Finalday from '@/components/Finalday'
import fbtn from '@/components/floatbtn'

export default {
  components: {
    Title,
    Subtitle,
    Finalday,
    fbtn
  },
  mounted() {
    this.onResize()
  },

  methods: {
    onResize() {
      if (window.innerWidth < 700) {
        return true
      } else {
        return false
      }
    }
  },

  data() {
    return {
      zone: [
        '10 Teams will be shortlisted from each zone and will get an opportunity to present their ideas to an eminent Jury panel.',
        'Winning teams from each zone will be selected for the final event of AAKRUTI 2019 which will be held in Pune.'
      ],
      th1: [
        '“Re-engineer” an existing product and reduce weight, thereby improving output / performance ',
        'Product should be made smaller, lighter, or more efficient so that it can be used in beneficial ways which was not possible in current product ',
        'Product must be specifically re-designed to derive benefits of ‘Additive Manufacturing’, Topology Optimization ',
        'Improvement should benefit manual workers or labor by reducing effort and providing safety '
      ],
      th2: [
        'Renewable energy powered products for homes and offices in Urban and Rural areas (for example “Solar Operated pump for agriculture”)',
        'To make cities cleaner and more energy efficient, reduce pollution and create sustainable and great places to Live ',
        'Innovative, efficient and faster recharging solutions for Electric Vehicles'
      ],
      th3: [
        'Harnessing Ocean, Rivers for betterment of human life (e.g. Products to utilize tidal wave energy, under water farming, water transport) ',
        'Protecting oceans and rivers from pollution, Oil spills, plastic, harmful hyacinth ',
        'Innovative products for villages and remote communities to avail clean /drinkable water'
      ],
      th4: [
        'Products designed by utilizing/reusing/recycling waste (including e-waste)',
        'Products which can recycle biodegradable (Bio-waste) & non-biodegradable Waste for better use'
      ],

      reg: [
        'Register using the Registration link.',
        'Students from all engineering and design colleges can participate and submit their innovative designs. ',
        'Each participating team should have ONLY two students. ',
        'Once registered, you will receive an email with your Team_ID which should be used for all further communications.',
        'Dassault Systèmes will offer a license of SOLIDWORKS education edition to all the registered teams for the necessary time period.'
      ],

      contest: [
        'Submission of ideas will be done in two phases "Initial Design Concept" phase and "Final Model Submission" phase. ',
        'Teams need to provide products Synopsis & design concept during "Initial Design Concept" phase. Submission date will be announced separately.',
        'Teams need to submit their complete design with details to pass the evaluation criteria before last date of Final Model submission phase.',
        'Only teams submitting detailed design will be considered as qualifying entries. Details for model submission will be communicated through e-mail. ',
        'Any duplicate/existing product design/idea or Copyright ideas/design will stand for rejection. ',
        'The design can either be an improved existing product, a brand new product or a machine or an entire solution architecture itself. ',
        'The Product Design Idea must be compatible for Manufacturing and ready to use'
      ],
      eval1: [
        'Creativity, originality of design concept.',
        'Feasibility of design, design validations, design calculations.',
        'Any workable/minimum viable prototype made.',
        'Simulations done (CAE/CFD/Kinematic Analysis etc.',
        'Use of Product Design application tools for Modelling, Visualization, rendering of the product and modelling design integrity.'
      ],
      eval2: [
        'Creativity, originality of design concept.',
        'Feasibility of design, design validations, design calculations.',
        'Any workable/minimum viable prototype made.',
        'Simulations done (CAE/CFD/Kinematic Analysis etc.',
        'Use of Product Design application tools for Modelling, Visualization, rendering of the product and modelling design integrity.'
      ],
      eval3: [
        'Any duplicate/existing product design/idea or Copyright ideas/design will stand for rejection.',
        'The design can either be an improved existing product, a brand new product or a machine or an entire solution architecture itself.',
        'The Product Design Idea must be compatible for Manufacturing and ready to use.',
        'Team agrees to share this digital content on an open forum for utilization by masses (if feasible). We will ensure that due credits are given to respective teams.'
      ],
      evalnote: [
        'A ‘Certificate of Participation” will be given to all the qualified entries who will submit the complete models and product report.',
        'A ‘Certificate of Excellence’ will be given to top ten teams.',
        'Juries decisions and results will be final and binding on all.'
      ]
    }
  }
}
</script>
<style scoped>
.para {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880)) !important;
}
.bord {
  border: 2px solid #005386;
  border-radius: 30px;
  opacity: 0.9;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
}
.fontz2 {
  font-size: calc(16px + 5 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds-SemiBold';
}
.fontz22 {
  font-size: calc(14px + 4 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
}
.fontz {
  font-size: calc(13px + 2.5 * ((100vw - 320px) / 880)) !important;
  font-family: '3ds';
  margin-bottom: 12px;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: #757575;
  /* 757575 424242*/
}

.fontzd {
  font-size: calc(10px + 3 * ((100vw - 320px) / 880));
  font-family: '3ds';
  letter-spacing: -0.2px;
}
</style>
