<template>
  <div>
    <v-container>
      <Title topic="Process"/>

      <v-layout row wrap>
        <Subtitle id="register" subtopic="HOW can I Register?"/>
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <div v-for="item in reg" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row wrap text-xs-center>
            <!-- <v-flex xs12 md6>
              <v-btn outline color="indigo" router to="/DownloadInstructions">
                <p class="my-auto caption">SOLIDWORKS Download instruction</p>
              </v-btn>
            </v-flex>-->
            <v-flex xs12 md6>
              <v-btn
                outline
                round
                color="red"
                target="_blank"
                href="https://www.surveymonkey.com/r/7T7D2VH"
              >
                <p class="my-auto caption">Register Here</p>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>

        <Subtitle id="contest" subtopic="HOW to choose a Theme?"/>
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <p class="fontz grey--text">
                <span class="black--text fontz2">Small is BIG</span>
              </p>
              <p
                class="fontz font-weight-regular"
              >Product should be made smaller, lighter, or more efficient so that it can be used in beneficial ways not possible today. Product must be specifically re-designed to derive benefits of ‘Additive Manufacturing’, Topology Optimization</p>
            </v-flex>

            <v-flex xs12>
              <p class="fontz grey--text">
                <span class="black--text fontz2">Smart ENERGY</span>
              </p>
              <p
                class="fontz font-weight-regular"
              >Renewable energy powered products for homes and offices in Urban and Rural areas</p>
            </v-flex>

            <v-flex xs12>
              <p class="fontz grey--text">
                <span class="black--text fontz2">Water is LIFE</span>
              </p>
              <p
                class="fontz font-weight-regular"
              >Protecting oceans and rivers from pollution, Oil spills, plastic, harmful hyacinth</p>
            </v-flex>

            <v-flex xs12>
              <p class="fontz grey--text">
                <span class="black--text fontz2">Waste to Wealth to Wonder</span>
              </p>
              <p class="fontz font-weight-regular">Products which can Utilize /reuse/recycle e-waste</p>
            </v-flex>
          </v-layout>
        </v-container>

        <Subtitle id="contest" subtopic="HOW can I submit my Entry?"/>
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <div v-for="item in contest" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pa-0 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>

        <!-- <Subtitle id="contest" subtopic="Contest Process"/>
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <div v-for="item in contest" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pa-0 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>-->

        <Subtitle id="eval" subtopic="Evaluation Criteria"/>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <p class="fontz grey--text">
                <span class="black--text fontz2">Design Content Criteria</span> – Design of the product will be evaluated on the basis of :
              </p>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <div v-for="item in eval1" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pa-0 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
            <v-flex xs12>
              <p class="fontz grey--text">
                <span class="black--text fontz2">DIY Manufacturing Content Criteria</span> – (Do It Yourself – Ready for manufacturing Digital content of designed Product) :
              </p>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <div v-for="item in eval2" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pa-0 ma-0">fas fa-caret-right</v-icon>
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
                <v-icon class="black--text para pa-0 ma-0">fas fa-caret-right</v-icon>Team needs to submit their Design, Presentations and supporting manufacturing details aligned with themes before last week of August.
              </p>
            </v-flex>
            <v-flex xs12>
              <div v-for="item in eval3" :key="item">
                <p class="fontz font-weight-regular">
                  <v-icon class="black--text para pa-0 ma-0">fas fa-caret-right</v-icon>
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
                  <v-icon class="black--text para pa-0 ma-0">fas fa-caret-right</v-icon>
                  {{ item }}
                </p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
    <Finalday/>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Finalday from '@/components/Finalday'

export default {
  components: {
    Title,
    Subtitle,
    Finalday
  },
  data() {
    return {
      reg: [
        'Register using the Registration link.',
        'Students from all engineering and design colleges can participate and submit their innovative designs. ',
        'Each participating team should have ONLY two students. ',
        'Once registered, you will receive an email with your Team_ID which should be used for all further communications.',
        'Dassault Systèmes will offer a license of SOLIDWORKS education edition to all the registered teams for the necessary time period.'
      ],

      th: [],

      contest: [
        'Teams need to submit their complete design with details to pass the evaluation criteria before last date of Model submission',
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
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
}
.bord {
  border: 2px solid #005386;
  border-radius: 30px;
  opacity: 0.9;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
}
.fontz2 {
  font-size: calc(15px + 5 * ((100vw - 320px) / 880));
  font-family: '3ds-SemiBold';
}
.fontz {
  font-size: calc(14px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: #757575;
  /* 757575 424242*/
}
</style>
