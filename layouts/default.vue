<template>
  <div >
    <v-app class="body-all" id="body">
      <navbar />
      <nuxt />

      <v-container class="hidden-sm-and-up pt-0">
        <v-layout row wrap justify-center text-xs-center>
          <v-flex xs12>
            <v-btn color="#012D52" class="fontzd" round small dark @click="top">
              <v-icon class="mr-1">fas fa-angle-up</v-icon>Top
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <Footer />
    </v-app>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style>
.body-all {
  font-size: 16px;
  font-family: '3ds', sans-serif;
  text-align: justify !important;
  letter-spacing: 0.01rem;
  /* DCDCDC   dbdbdb */
  background-color: #f5f5f5;
}
.img-fluid {
  max-width: 100% !important ;
  height: auto !important;
}
@font-face {
  font-family: '3ds';
  src: url('https://ui.3ds.com/fonts/3ds/3ds-Regular-v2.woff2') format('woff2');
}

@font-face {
  font-family: '3ds-light';
  src: url('https://ui.3ds.com/fonts/3ds/3ds-Light-v2.woff2') format('woff2');
}

@font-face {
  font-family: '3ds-SemiBold';
  src: url('https://ui.3ds.com/fonts/3ds/3ds-SemiBold-v2.woff2') format('woff2');
}
</style>
