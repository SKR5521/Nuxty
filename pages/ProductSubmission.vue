<template>
  <div>
    <v-container>
      <Subtitle subtopic="AAKRUTI2019 – Product Submission Guide" />
      <p class="my-font">
        <span class="my-font-cyan">Final Product Report Content :</span> For final evaluation teams will need to submit following data in the format.
      </p>

      <p class="my-font black--text">1. Design CAD Data</p>
      <p class="my-font black--text">2. PowerPoint Presentation</p>
      <p class="my-font black--text">3. Additional Reports/Files</p>

      <p class="my-font">
        <span class="my-font-cyan">Folder Structure of Final Product Submission data :</span>
        Team should adhere the guidelines while uploading their product data. Follow below mention folder structure of your, add your all files and
        folders into a zip.
      </p>
      <ol class="my-font ml-2" >
        <li>
          On the form enter
          <span class="my-font-cyan">TeamID_FinalProduct.zip</span> (e.g. if your team id is “6XXXXXXXXXX” then your main zip folder should name as
          <span
            class="my-font-cyan"
          >6XXXXXXXXXX_FinalProduct.zip</span> ) This will be the main folder that teams will need to submit. All the required data as mentioned above should be kept in subfolders under this.
        </li>
        <li>
          To avoid confusion in finding the uploaded data by teams, teams are requested to not upload any other files or folders outside this. Following sub-folders should be added in main zip folder.
          <ul class="my-font">
            <li>CAD_Data (This will be a separate folder including all the Design CAD data as mentioned in the attached Final Product Report Content document)</li>
            <li>PowerPoint_Presentation (This will include the main presentation of your product along with video or any supporting files which are used in PPT.)</li>
            <li>Additional_Data (This will include the Rendering images, costing report, survey reports, external analysis reports etc. if any.)</li>
          </ul>
        </li>
        <li class="mb-3">Below is the folder structure image for your reference.</li>
        <img class="img-fluid" :src="require('~/assets/img/folder.jpg')" />
      </ol>

      <Subtitle class="pt-3" subtopic="Product submission round 1" />

      <p class="my-font">
        <span class="my-font-cyan">Final Product Report Content :</span> For final evaluation teams will need to submit following data in the format explained in the “Submission Folder Structure” section in this page. Note that this is the final evaluation round of the contest.
      </p>

      <p class="my-font">
        <span class="my-font-cyan">1. Design CAD Data :</span> Folder containing all the required CAD files e.g. parts, assemblies and drawings, standard components used from CAD library within CAD Software, Simulation Reports, CAD Costing reports if any.
      </p>

      <ul class="my-font">
        <li>This should include all the part files which are used in the assemblies. There should not be any missing reference of the part file in any assembly.</li>
        <li>All the assemblies including main assembly, sub-assemblies should be available. There should not be any missing reference of the sub-assembly or part file in the assembly.</li>
        <li>Drawing files of each and every individual part, assembly, sub-assemblies.</li>

        <li>All Simulation, Flow Simulation, Costing reports created within CAD using specific add-ins.</li>
        <li>All the standard components used from CAD library within CAD software. E.g. SOLIDWORKS has Toolbox components, Smart Fasteners, Standard components like Belts, pulleys, bearings etc.</li>
        <li>If you are using SOLIDWORKS application, then you can use “Pack and Go” function to keep all the components of the Assembly i.e. Parts, Sub-assemblies, drawings, standard components etc. at one place. So that there should not be any missing reference within assembly, when it will be open for evaluation by contest evaluators.</li>
      </ul>

      <p class="my-font pt-3">
        <span class="my-font-cyan">2. PowerPoint Presentation :</span> Presentation should well-structured to showcase your Product with easily understanding approach to the viewer. Use the PPT template attached to the email. There is no limit of slides to added to Presentation, but do not add any unwanted slides to just submit a big presentation. Presentation should have following details,
      </p>

      <ul class="my-font pb-3">
        <li>Product Title, Contest Theme, Team ID, Team Name, Team Members name, College Names on one slide.</li>
        <li>Problem Statement in detail</li>
        <li>Solutions available to problem statement</li>

        <li>Market Survey for problem and solution</li>
        <li>What is your solution product?</li>
        <li>How it suits best over other solutions, usability, feasibility etc.</li>
        <li>Describe your product with details e.g. Working principal, Mechanism, product structure, actual working simulation</li>
        <li>Benefits of your product overcoming drawback of existing solutions. Drawbacks of your products that can be optimize in future study.</li>
        <li>Simulation, motion videos, statistical data</li>

        <li>Costing, return on investment calculations, statistics, brief design calculations etc.</li>
        <li>References if any.</li>
      </ul>

      <p class="my-font-cyan">3. Additional Reports/Files :</p>

      <ul class="my-font">
        <li>Simulation or Flow Simulation Report</li>
        <li>Costing Report</li>
        <li>Design Calculations</li>
        <li>Good rendered images of the product in different angles, exploded views.</li>
      </ul>

      <Subtitle class="pt-3" subtopic="Product submission round 2" />

      <p class="my-font">
        <span class="my-font-cyan">DIY Report (Do It Yourself) :</span> <br> Teams who gets qualify for the zonal rounds, will need to submit DIY report along with their product designs. These teams will be communicated individually after results of Zonal rounds are declared.</p>

      <p
        class="my-font"
      >Please refer the DIY report sample format provided at the webpage under Product Submission section. DIY report should be in PDF file format and there is no page limitation for it. DIY report should content brief information about your product as per below categories,</p>

      <ul class="my-font pb-3">
        <li>Problem Statement</li>
        <li>Objective of the Product</li>
        <li>Detailed Bill of Material of entire product</li>
        <li>Raw material information required to build an entire product with Material type, raw sizes and Quantity.</li>

        <li>Assembly details – This section should include complete assembly information, sub-assemblies information which will indicate how the product is assembled. This can be easily explained with the exploded views showing exploded lines, numbering the parts and sub-assemblies as per assembly method.</li>
        <li>Manufacturing drawings of each and every part used in the assemblies (excluding bought out parts). All the drawings should efficiently include all the required dimensions, GD&T, Manufacturing Processes, weldment details, Bill of Material with material specification, material type, quantity of the component on each assembly drawings.</li>
        <li>Separate drawings for Sheet metal component development, Profile cutting parts etc. if needed as per part manufacturing requirement.</li>
      </ul>

      <v-layout class="py-3" row justify-center wrap>
        <v-flex xs12 text-xs-center>
          <v-btn dark round outline color="blue darken-2" router to="/Process">Back to Process</v-btn>
        </v-flex>
        <v-flex text-xs-center>
          <p class="my-font mt-3">
            For any queries please contact <span class="my-font-cyan">aakruti.contests@3ds.com</span>
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
  color: #3da9eb;
}
.my-font {
  font-size: calc(12px + 5 * ((100vw - 320px) / 880));
  font-family: '3ds' !important;
  font-weight: 300;
  line-height: 1.5;
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
