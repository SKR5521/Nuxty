<template>
  <div>
    <Homehero/>

    <div class="py-5 back">
      <v-container id="first">
        <v-layout row>
          <v-flex xs12>
            <p
            data-aos="zoom-in-up"
              class="fontz  py-1 mb-0 font-italic"
              v-for="item in about"
              :key="item"
            >{{ item }}</p>
            <v-layout></v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

  <Theme />
    <!-- <v-container>
      <Title topic="Themes"/>
      <v-layout row wrap>
        <v-flex xs6 md3 v-for="stat in 4" :key="stat" pa-3>
          <v-img
            class="image-hover-highlight"
            contain
            :src="require('~/assets/img/Themes/' + stat + '.png')"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container> -->

    <!-- <v-container>
      <Title topic="Prizes"/>
      <v-layout row wrap>
        <v-flex xs6 md3  v-for="stat in 4" :key="stat" pa-3>
          <v-img  contain :src="require('~/assets/img/Prizes/' + stat + '.png')"></v-img>
        </v-flex>
      </v-layout>
    </v-container> -->

    <v-container>
      <v-layout text-xs-center wrap justify-center>
        <v-flex xs12 xl10 mb-4>
          <Title topic="Process"></Title>
          <Timeline/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Homehero from '@/components/HomeHero'
import Timeline from '@/components/Timeline'
import Title from '@/components/Title'
import Theme from '@/components/Theme'


export default {
  components: {
    Homehero,
    Timeline,
    Title,
    Theme
  },

  data: () => ({
    about: [
      'AAKRUTI is Dassault Systèmes SOLIDWORKS Corporation Nationwide Product Design Contest. AAKRUTI was launched in 2011 and has received tremendous response from all over India in the last 8 years. Each year brings forth a different theme with students surpassing the expectations with their innovative designs and ideas.',
      'The objective of AAKRUTI is to reach out to the engineering colleges and universities across India and make them aware about latest trends in the Product Design and Manufacturing domain. AAKRUTI encourages students to showcase their design skills, creativity and innate talent and to use this contest as a platform to design a product that can be commercially manufactured which can eventually benifit the nation.',      
      'Dassault Systèmes will offer a limited period license of SOLIDWORKS education edition to all the registered teams to design and simulate their product ideas.'
    ]
  })
}
</script>

<style scoped>
.back {
  background-color: white;
  color: #01406C;
  /* background-color: rgb(119, 119, 119); */
}

.fontz {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.2px;
  /* color: white; */
  /* 3f3d3d */
}

.image-hover-highlight {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.image-hover-highlight:hover {
  border: 2px solid #005386;
  border-radius: 30px;
  opacity: 0.9;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  filter: brightness(130%);
  -webkit-filter: brightness(130%);
  -moz-filter: brightness(130%);
  -o-filter: brightness(130%);
  -ms-filter: brightness(130%);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
</style>
