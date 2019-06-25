<template>
  <div>
    <v-container>
      <Subtitle subtopic="Download Instructions"/>
      <p class="my-font">
        <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>Dassault Systèmes SOLIDWORKS Corp will offer a limited period license of SOLIDWORKS Student version to all participant teams after successful registration.
      </p>
      <!-- 
      <p class="my-font">
        <i class="fas fa-chevron-circle-right white-text mr-2 fa-1x"></i>You will need to submit in detailed Product report containing Design content and DIY Manufacturing content on or before
        <b
          class="my-font-cyan font-weight-light"
        >20th September, 2019 (Registered teams will be informed about the model submission details through e-mail).</b>
      </p>

      <ul class="my-font">
        <li>Presentation providing details of design/concept/mechanism behind the design.</li>
        <li>Details of the Design Calculations/Hand Calculations (if any).</li>
        <li>CAD Model and drawing of the Innovative Design.</li>
        <li>Simulation files/Rendering files.</li>
        <li>A complete DIY Manual having the Manufacturing content.</li>
      </ul>-->

      <p class="my-font">
        <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>
        License serial number will be provided through separate email communication to all registered teams.
      </p>

      <p class="my-font">
        <v-icon class="black--text para pr-2 ma-0">fas fa-caret-right</v-icon>Please follow below instructions to download and install SOLIDWORKS 2019-2020 Student version:
      </p>

      <ol class="my-font ml-4" style="font-size: 1rem !important;">
        <li>
          Use the link:
          <a
            href="https://www.solidworks.com/sw/education/SDL_form.html"
            target="_blank"
          >www.solidworks.com/SEK</a>
        </li>
        <li>On the form enter<span class="my-font-cyan">SEK-ID</span> as <span class="my-font-cyan">XSEK12</span> and fill other information.
        </li>
        <li>
          Choose version as
          <span class="my-font-cyan">2019-2020.</span>
        </li>
        <li class="mb-3">Please check below images for reference:</li>
        <img class="img-fluid" :src="require('~/assets/img/down-inst1.jpg')">

        <li class="my-3">
          On the next page select “<span class="my-font-cyan">Accept Agreement and continue</span>”. Read the download and installation instructions and also ensure to check the security settings required for your browser for correctly downloading application using “
          <span
            class="my-font-cyan"
          >Click here</span>” link.
        </li>

        <img class="img-fluid" :src="require('~/assets/img/down-inst2.jpg')">
      </ol>
      <v-layout class="py-3" row justify-center wrap>
        <v-flex xs12 text-xs-center>
          <v-btn dark round outline color="blue darken-2" router to="/Process">Back to Process</v-btn>
        </v-flex>
        <v-flex text-xs-center>
          <p class="my-font mt-3">
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
import Subtitle from '@/components/Subtitle'
export default {
  components: {
    Subtitle
  }
}
</script>
<style scoped>
.my-font-cyan {
  font-family: '3ds-SemiBold' !important;
  color: #3DA9EB;
}
.my-font {
  font-size: calc(12px + 5 * ((100vw - 320px) / 880));
  font-family: '3ds' !important;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.2px;
  color: #757575;
}
.round {
  border-radius: 40px !important;
  padding: 0 25px 0 25px;
}
.para {
  font-size: calc(13px + 4 * ((100vw - 320px) / 880)) !important;
}
</style>
