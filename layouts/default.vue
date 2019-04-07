<template>
  <div>
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
