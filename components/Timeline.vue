<template>
  <v-timeline align-top v-resize="onResize" :dense="den" >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
      :small="den"
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
        <v-card-text class="grey lighten-3 text--primary">
          <p class="black--text">Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outline
          >
            Button
          </v-btn>
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
          color: 'red lighten-2',
          icon: 'mdi-star'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer'
        }
      ],
      den: false
    }),
    mounted () {
      this.onResize()
    },

    methods: {
      onResize () {
        if (window.innerWidth < 700) {
            return this.den = true
        }
        else {
            return this.den = false
        }
      }
    }
  }
</script>