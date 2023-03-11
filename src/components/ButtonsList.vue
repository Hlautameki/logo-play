<template>
  <div class="q-gutter-md fit row wrap q-mx-auto q-my-auto">
    <play-button
      style="width: 150px; height: 80px"
      v-for="item in syllables"
      v-bind:key="item.syllable"
      :item="item"
    >
    </play-button>
  </div>
</template>

<script setup>
import PlayButton from 'components/PlayButton.vue'
const props = defineProps({
  syllables: Array,
})
</script>
