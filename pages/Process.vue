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
            <v-flex xs11>
              <div v-for="item in contest" :key="item">
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
        'Final Day Event will be held at Dassault Systèmes R&D Center, Pune.',
        'Top 10 teams will be shortlisted for the Final Day Event. Their names will be announced in last week of September 2018, on the website and the teams will also be informed by e-mail.',
        'These shortlisted teams will have to present their innovative design in front of eminent jury panel. 15 minutes time will be provided to each team to present their designs. The Jury’s questions round will also have weightage while compiling the results for the Top three winning teams.',
        'The results will be declared by the jury panel followed by the prize distribution ceremony on the same day.',
        'All the shortlisted teams, travelling to Pune for final day event, can claim a travel expense reimbursement maximum or equivalent to second AC train fare by providing the original tickets. The teams should reach Pune on one day before the Final Day Event. Accommodation for the night (Final Day Event) will be provided by Dassault Systèmes Foundation.',
        'The shortlisted teams will have to carry their College Identity Card/Bonafide Certificate from their college when they report for the Final Day Event along with registration e-mail.'
      ]
    }
  }
}
</script>
<style scoped>
.para {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
}
.fontz {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: #424242;
}
</style>
