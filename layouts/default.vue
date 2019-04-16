<template>
  <div class="body-all">
    <navbar />
    <!-- <v-container mt-5>
    <v-card class="elevation-15" style="border-radius:50px;">  -->
    <nuxt/>
    <!-- </v-card>
    </v-container> -->
    <Footer />
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components:{
    Navbar, Footer
  }
}
</script>
<style>

.body-all {
  font-size: 16px;
  font-family: '3ds', sans-serif;
  text-align: justify!important;
  letter-spacing: 0.01rem;
  background-color: #FAFAFA;
}
@font-face {
  font-family: "3ds" ;
  src: url("/assets/3DS_fonts/3ds Regular.otf") format('otf');
}

</style>
