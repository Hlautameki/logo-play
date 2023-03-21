<template>
  <div class="row q-col-gutter-md">
    <div
      class="col-6 col-md-2 col-sm-4 row items-stretch"
      v-for="item in syllables"
      v-bind:key="item.syllable"
    >
      <source-button
        class="col-12"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import SourceButton from 'components/SourceButton.vue'
const props = defineProps({
  syllables: Array,
})
</script>
