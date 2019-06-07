<template>
  <div class="body-all" >
    <navbar/>

    <nuxt />

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
  /* DCDCDC   dbdbdb */
  background-color: #F5F5F5;
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
