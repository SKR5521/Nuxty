<template>
  <div>
    <Homehero/>

    <div class="py-5 back white--text">
      <v-container id="first">
        <v-layout row>
          <v-flex xs12>
            <p
              class="fontz white--text py-1 mb-0 font-italic"
              v-for="item in about"
              :key="item"
            >{{ item }}</p>
            <v-layout></v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container>
      <Title topic="Themes"/>
    </v-container>
    <h1>sample text</h1>

    <v-container>
      <Title topic="Prizes"/>
    </v-container>

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
import ResizeText from 'vue-resize-text'

export default {
  components: {
    Homehero,
    Timeline,
    Title
  },

  directives: {
    ResizeText
  },

  data: () => ({
    about: [
      'AAKRUTI is Dassault Systèmes Foundation Nationwide Product Design Contest. AAKRUTI was launched in 2011 and has received tremendous response from all over India in the last 8 years. Each year brings forth a different theme with students surpassing the expectations with their innovative designs and ideas.',
      'The objective of AAKRUTI is to reach out to the engineering colleges and universities across India and make them aware about latest trends in the Product Design and Manufacturing domain. AAKRUTI encourages students to showcase their design skills, creativity and innate talent and to use this contest as a platform to design a product that can be commercially manufactured which can eventually benifit the nation.',
      'AAKRUTI is well amalgamated with Dassault Systèmes Foundation’s vision to promote the advancement of excellence and skill enhancement in all aspects of engineering, technology and design while fostering innovation.',
      'Participating students can use any product design applications of their choice, Dassault Systèmes will offer a limited period license of SOLIDWORKS education edition to all the registered teams to design and simulate their product ideas.'
    ]
  })
}
</script>

<style scoped>
.block {
  justify-content: center;
  font-size: calc(12px + 2 * ((100vw - 320px) / 880)) !important;
  line-height: 1.5rem !important;
}

.back {
  /* background-color: #7e7e7e; */
  background-color: rgb(119, 119, 119);
}

.fontz {
  font-size: calc(12px + 4 * ((100vw - 320px) / 880));
  font-family: '3ds-light';
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: #3f3d3d;
}
</style>
