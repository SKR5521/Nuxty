<template>
  <v-timeline align-top v-resize="onResize" :dense="den">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      :large="!den"
    >
      <v-card  dark class="elevation-10 ">
        <v-card-title  class="fontz2 ">{{ item.title}}</v-card-title>
        <v-card-text class=" white--text">
          <p class="fontz white--text">Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
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
  letter-spacing: -.2px;
  
}
.fontz {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  line-height: 1.5;
  letter-spacing: -.2px;

}
</style>
