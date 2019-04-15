<template>
  <div>
    <Homehero/>

    <v-container id="first">
      <v-layout row>
        <v-flex xs>
          <v-icon>fas fa-quote-left</v-icon>
          <!-- <p class="grey--text subheading font-weight-regular">{{about}}</p> -->
          <blockquote class="blockquote">{{ about }}</blockquote>
          
          <v-layout>
            <v-spacer></v-spacer>
              <v-icon >fas fa-quote-right</v-icon>
          </v-layout>
          
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <Title topic="Themes"/>
    </v-container>

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

export default {
  components: {
    Homehero,
    Timeline,
    Title
  },

  data: () => ({
    about:
      'AAKRUTI is Dassault Systèmes Foundation Nationwide Product Design Contest. AAKRUTI was launched in 2011 and has received tremendous response from all over India in the last 7 years. Each year brings forth a different theme with students surpassing the expectations with their innovative designs and ideas.' +
      'The objective of AAKRUTI is to reach out to the engineering colleges and universities across India and make them aware about latest trends in the Product Design and Manufacturing domain. AAKRUTI encourages students to showcase their design skills, creativity and innate talent and to use this contest as a platform to design a product that can be commercially manufactured which can eventually benifit the nation.' +
      'AAKRUTI is well amalgamated with Dassault Systèmes Foundation’s vision to promote the advancement of excellence and skill enhancement in all aspects of engineering, technology and design while fostering innovation.' +
      'Participating students can use any product design applications of their choice, Dassault Systèmes will offer a limited period license of SOLIDWORKS education edition to all the registered teams to design and simulate their product ideas.'
  })
}
</script>

<style>
</style>
