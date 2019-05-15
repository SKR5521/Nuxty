<template>
  <div class="body-all">
    <navbar/>
    <!-- <v-container mt-5>
    <v-card class="elevation-15" style="border-radius:50px;">-->
    <nuxt/>
    <!-- </v-card>
    </v-container>-->
    <Footer/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
.body-all {
  font-size: 16px;
  font-family: '3ds', sans-serif;
  text-align: justify !important;
  letter-spacing: 0.01rem;
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
