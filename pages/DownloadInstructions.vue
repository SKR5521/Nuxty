<template>
  <div>
    <v-container>
      <Title topic="Download Instructions"/>
      <p class="font-weight-normal">
        <i class="fas fa-chevron-circle-right white-text mr-3 fa-1x"></i>Participating students can use product design applications of their choice, Dassault Systèmes will offer a license of SOLIDWORKS education edition to all the registered teams for the necessary time, to all participants asking for it to design and simulate their product ideas.
      </p>

      <p class="font-weight-normal">
        <i class="fas fa-chevron-circle-right white-text mr-3 fa-1x"></i>You will need to submit in detailed Product report containing Design content and DIY Manufacturing content on or before
        <b
          class="my-font-cyan font-weight-light"
        >20th September, 2019 (Registered teams will be informed about the model submission details through e-mail).</b>
      </p>

      <ul class="font-weight-normal">
        <li>Presentation providing details of design/concept/mechanism behind the design.</li>
        <li>Details of the Design Calculations/Hand Calculations (if any).</li>
        <li>CAD Model and drawing of the Innovative Design.</li>
        <li>Simulation files/Rendering files.</li>
        <li>A complete DIY Manual having the Manufacturing content.</li>
      </ul>

      <p class="font-weight-normal">
        <i class="fas fa-chevron-circle-right white-text mr-3 fa-1x"></i>
        <span class="my-font-cyan">Serial Number:</span>On request, students will be provided with SOLIDWORKS serial number through separate e-mail communication following the successful registration.
      </p>

      <p class="font-weight-normal">
        <i class="fas fa-chevron-circle-right white-text mr-3 fa-1x"></i>Please follow below instructions to download and Install SOLIDWORKS 2017-2018 Education Version:
      </p>

      <ol class="font-weight-normal" style="font-size: 0.9rem !important;">
        <li>
          Use the link:
          <a
            href="https://www.solidworks.com/sw/education/SDL_form.html"
            target="_blank"
          >www.solidworks.com/SEK</a>
        </li>
        <li>
          On the form enter
          <span class="my-font-cyan">SEK-ID</span> as
          <span class="my-font-cyan">XSEK12</span> and fill other information.
        </li>
        <li>
          Choose version as
          <span class="my-font-cyan">2018-2019.</span>
        </li>
        <li class="mb-3">Please check below images for reference:</li>
        <img class="img-fluid" :src="require('~/assets/img/down-inst1.jpg')">

        <li class="my-3">
          On the next page select “
          <span class="my-font-cyan">Accept Agreement and continue</span>”. Read the download and installation instructions and also ensure to check the security settings required for your browser for correctly downloading application using “
          <span
            class="my-font-cyan"
          >Click here</span>” link.
        </li>

        <img class="img-fluid" :src="require('~/assets/img/down-inst2.jpg')">
      </ol>
      <v-layout class="py-3" row justify-center wrap>
        <v-flex xs12 text-xs-center>
          <v-btn dark class="indigo round" router to="/Process">Back to Process</v-btn>
        </v-flex>
        <v-flex text-xs-center>
          <p class="font-weight-normal mt-3">
            Let us know if you have any query related to installation on
            <span
              class="my-font-cyan"
            >aakruti.contests@3ds.com</span>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Title from '@/components/Title'

export default {
  components: {
    Title
  }
}
</script>
<style scoped>
.my-font-cyan {
  font-family: '3ds-SemiBold' !important;
  color: #8f108f;
}

.round {
    border-radius: 40px !important;
    padding: 0 25px 0 25px ;
}
</style>

