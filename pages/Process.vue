<template>
  <div>
    <v-container>
      <Title topic="Process" />

      <v-layout row wrap>
        <Subtitle subtopic="Registration" />
        
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'

export default {
  components: {
    Title,
    Subtitle
  }
  
  }
</script>
