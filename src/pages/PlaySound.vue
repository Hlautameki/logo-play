<template>
  <q-page padding>
    <div class="q-gutter-md fit row wrap q-mx-auto q-my-auto">
      <play-button
        style="width: 150px; height: 80px"
        v-for="item in syllables"
        v-bind:key="item"
        :label="item"
      >
      </play-button>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import PlayButton from 'components/PlayButton.vue'

const syllables = ref(['pa', 'pe', 'pi', 'po', 'pu', 'py'])
</script>
