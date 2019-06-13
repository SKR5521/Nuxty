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
              <v-btn :color="item.color" round  outline router :to="item.link">Read More</v-btn>
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
          'This is first & very important step to participate in this contest. Entry to this contest only granted by Registration. Students from all engineering & Design colleges can register in contest. Use Registration link to get more insights.'
        ],
        link: '/Process'
      },
      {
        title: 'Theme Selection',
        color: 'purple darken-1',
        icon: 'fas fa-cog',
        content: [
          'AAKRUTI contest is always aligned with different themes every year. To make contest more interesting & learning, we have provided themes. Participants have to select any theme/themes to submit models.',
          'Use below link to know more about themes for AAKRUTI2019 contest.'
        ],
        date: 'Till registration ends',
        link: '/Process/#themesel'
      },
      {
        title: 'Final Design Submission',
        color: 'green lighten-1',
        icon: 'fas fa-upload',
        date: 'Will be anounced later',
        content: [
          'Here we start first phase of contest. Model submission is very important phase of contest. Teams which submits models before last date will only be considered for next phase.',
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
          'Here comes last & final stage of contest. AAKRUTI winners are announced after Final presentation.',
          'Selected teams after evaluation are announced & gets invitation for Final Presentation in front of our esteemed juries.'
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
  font-size: calc(12px + 3 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  line-height: 1.2;
  letter-spacing: -0.2px;
  text-align: left !important;
}
.fontzd {
  font-size: calc(11px + 2 * ((100vw - 320px) / 880));
  font-family: '3ds';
  line-height: 1.2;
  letter-spacing: -0.2px;
}
</style>
