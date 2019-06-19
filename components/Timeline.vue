<template>
  <v-timeline text-xs-left align-top v-resize="onResize" :dense="den">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      :large="!den"
    >
      <v-card  class="elevation-10 py-1">
        <v-card-title class="fontz2">{{ item.title}}</v-card-title>
        <v-card-text class="grey--text">
          <div v-for="it in item.content" :key="it">
            <p class="fontz grey--text text--darken-1">{{ it }}</p>
          </div>
        </v-card-text>
        <v-card-actions >
          <v-layout row wrap justify-center align-center>
            <v-flex xs12 md6>
              <p class="fontzd grey--text text--darken-2 mb-0 py-2">Last Date - {{ item.date }}</p>
            </v-flex>
            <v-flex xs12 md6>
              <v-btn :color="item.color" :small="den" class="fontzd" round outline router :to="item.link">Read More</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Registration',
        color: 'red lighten-2',
        icon: 'fas fa-user-edit',
        date: '31st July 2019',
        content: [
          'This is first step to participate in this contest.', 
          'Students from all Engineering & Design colleges are eligible. Use registration link to get more details. '
        ],
        link: '/Process'
      },
      {
        title: 'Theme Selection',
        color: 'purple darken-1',
        icon: 'fas fa-cog',
        content: [
          'AAKRUTI is always aligned with different themes every year. Participants can select any theme/themes to submit models.',
          'Click on the link to know more about themes for AAKRUTI2019 contest.'
        ],
        date: 'Till registration ends',
        link: '/Process/#themesel'
      },
      {
        title: 'Final Design Submission',
        color: 'green lighten-1',
        icon: 'fas fa-upload',
        date: 'Will be announced shortly',
        content: [
          'This is the beginning of the first phase of the contest. Only teams which submit models before the last date will be considered for next phase.',
          'Detailed information can be found here.'
        ],
        link: '/Process/#msubmit'
      },
      {
        title: 'Contest Finale',
        color: 'indigo',
        icon: 'fas fa-award',
        date: '3rd Oct 2019 (Tentative)',
        content: [
          'This is the final stage of  the contest. AAKRUTI 2019 winners will be announced after the final presentation.',
          'Selected teams will be announced will be invited for the Final Presentation before our esteemed Jury. '
        ],
        link: '/Process/#finalday'
      }
    ],
    den: false
  }),
  mounted() {
    this.onResize()
  },

  methods: {
    onResize() {
      if (window.innerWidth < 700) {
        return (this.den = true)
      } else {
        return (this.den = false)
      }
    }
  }
}
</script>

<style scoped>
.back {
  /* background-color: #7e7e7e; */
  background-color: rgb(141, 139, 139);
}
.fontz2 {
  font-size: calc(16px + 6 * ((100vw - 320px) / 880));
  font-family: '3ds';
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
}
.fontz {
  font-size: calc(14px + 3 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  line-height: 1.2;
  letter-spacing: -0.2px;
  text-align: left !important;
}
.fontzd {
  font-size: calc(12px + 2 * ((100vw - 320px) / 880));
  font-family: '3ds';
  line-height: 1.2;
  letter-spacing: -0.2px;
}
</style>
