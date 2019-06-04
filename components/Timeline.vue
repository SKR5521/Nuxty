<template>
  <v-timeline align-top v-resize="onResize" :dense="den">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      :large="!den"
    >
      <v-card text-xs-left class="elevation-10">
        <v-card-title class="fontz2">{{ item.title}}</v-card-title>
        <v-card-text class="grey--text">
          <div v-for="it in item.content" :key="it">
            <p text-xs-left class="fontz grey--text">{{ it }}</p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <p class="fontz grey--text text--darken-2">Last Date - {{ item.date }}</p>
            </v-flex>
            <v-flex xs12 md6>
              <v-btn :color="item.color" round outline router :to="item.link">More..</v-btn>
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
          'Use the Registration link.',
          'Download SOLIDWORKS student version. Download link and installation instructions will be sent to all the registered teams.'
        ],
        link: '/Process'
      },
      {
        title: 'Theme Selection',
        color: 'purple darken-1',
        icon: 'fas fa-cog',
        date: '31st July 2019',
        link: '/Process/#contest'
      },
      {
        title: 'Modal Submission',
        color: 'green lighten-1',
        icon: 'fas fa-upload',
        date: '31st July 2019',
        content: [
          'Submit your complete design with details to pass the evaluation criteria before last date of model submission.',
          'Only teams which submit detailed design will be considered as Qualifying Entries. Details for model submission will be communicated via e-mail.'
        ],
        link: '/Process/#contest'
      },
      {
        title: 'Final Presentation',
        color: 'indigo',
        icon: 'fas fa-award',
        date: '31st July 2019',
        content: [
          'Submit your complete design with details to pass the evaluation criteria before last date of model submission.',
          'Only teams which submit detailed design will be considered as Qualifying Entries. Details for model submission will be communicated via e-mail.'
        ],
        link: '/Process/#contest'
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
  line-height: 1.5;
  letter-spacing: -0.2px;
}
.fontz {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  line-height: 1.5;
  letter-spacing: -0.2px;
}
</style>
