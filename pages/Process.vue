<template>
  <div>
    <v-container>
      <Title topic="Process"/>

      <v-layout row wrap>
        <Subtitle id="register" subtopic="Registration Criteria"/>
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
            <v-flex xs12 md6>
              <v-btn outline color="indigo" router to="/DownloadInstructions">
                <p class="my-auto caption">SOLIDWORKS Download instruction</p>
              </v-btn>
            </v-flex>
            <v-flex xs12 md6>
              <v-btn outline color="red">
                <p class="my-auto caption">Register Here</p>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>

        <Subtitle id="contest" subtopic="Contest Process"/>
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
            <v-flex xs12>
              <blockquote
                class="para font-italic grey--text"
              >How YOUR innovative ideas can be taken to masses and provide them in a form so that it can be even manufactured at any village. Any artisan in a rural area should be able to manufacture the innovative product and make it available for local community.</blockquote>
            </v-flex>
            <v-flex xs12>
              <blockquote
                class="para font-italic grey--text"
              >Hence we request all the innovators to come forward and contribute for the betterment of community and utilize your creativity, knowledge and skills to help a needy.</blockquote>
            </v-flex>
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
  data() {
    return {
      reg: [
        'Students from all engineering and design colleges can participate and submit their innovative designs.',
        'Each participating team should have ONLY two student members (students from two different engineering discipline/College/State across India can form a team). Team members can be from different streams as well.',
        'There is NO limitation on the number of entries from a college. Colleges may send any number of teams to participate in the contest.',
        'The teams can be from any engineering/ design college across India.',
        'Team can submit multiple product designs by doing separate registrations for each design idea.',
        'Once the team registers, they will be provided with a unique registration code Team_ID by email within one business day. This Team_ID should be used in all further correspondences with Team Aakruti.',
        'While registering, the team needs to provide a brief write-up describing the product they want to design.',
        'Participating students can use product design applications of their choice, Dassault Systèmes will offer a license of SOLIDWORKS education edition to all the registered teams for the necessary time, to all participants asking for it to design and simulate their product ideas.'
      ],

      contest: [
        'Interested teams should register for the AAKRUTI2019 using the Registration link.',
        'After successful registration, students may download SOLIDWORKS student version. Download link and installation instructions will be sent to all the registered teams.',
        'Teams need to submit their complete design with details to pass the evaluation criteria before last date of Model submission.',
        'Teams submitting detailed design will only be considered as Qualifying Entries. Details for models submission will be communicated through e-mail.',
        'This year the competition is even more interesting, as first  time there is zone wise selection of contest entries.',
        'The zones are north ,east , west and south, centers/location for zonal selection will be announced later depending on number of registrations.',
        'Zonal finalists will be announced in 2nd week of September 2019.',
        'Top 10 team will be shortlisted and they have to present their innovative design in front of eminent jury panel. In this we will select top 3 teams and these teams will be presenting their design at the final day event.',
        'Final Day Event will be held at Dassault Systèmes R&D Center, Pune.',
        'Top 12 teams for the Final Day Event from zonal,  will be announced in last week of September 2019, on the website and the teams will also be informed by e-mail.',
        'Top 10 teams will be shortlisted for the Final Day Event. Their names will be announced in last week of September 2018, on the website and the teams will also be informed by e-mail.',
        'These shortlisted teams will have to present their innovative design in front of eminent jury panel. 15 minutes time will be provided to each team to present their designs. The Jury’s questions round will also have weightage while compiling the results for the Top three winning teams.',
        'The results will be declared by the jury panel followed by the prize distribution ceremony on the same day.',
        'All the shortlisted teams, travelling to Pune for final day event, can claim a travel expense reimbursement maximum or equivalent to second AC train fare by providing the original tickets. The teams should reach Pune on one day before the Final Day Event. Accommodation for the night (Final Day Event) will be provided by Dassault Systèmes Foundation.',
        'The shortlisted teams will have to carry their College Identity Card/Bonafide Certificate from their college when they report for the Final Day Event along with registration e-mail.'
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
