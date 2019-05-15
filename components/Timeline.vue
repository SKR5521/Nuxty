<template>
  <v-timeline align-top v-resize="onResize" :dense="den">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      :large="!den"
    >
      <v-card :color="item.color" dark class="elevation-10">
        <v-card-title class="title">{{ item.title}}</v-card-title>
        <v-card-text class="grey lighten-3 text--primary">
          <p class="black--text">Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn :color="item.color" class="mx-0" outline router :to="item.link">More...</v-btn>
        </v-card-text>
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
        link: '/Process'
      },
      {
        title: 'Theme Selection',
        color: 'purple darken-1',
        icon: 'fas fa-cog',
        link: '/Process/#contest'
      },
      {
        title: 'Modal Submission',
        color: 'green lighten-1',
        icon: 'fas fa-upload',
        link: '/Process/#contest'
      },
      {
        title: 'Final Presentation',
        color: 'indigo',
        icon: 'fas fa-award',
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