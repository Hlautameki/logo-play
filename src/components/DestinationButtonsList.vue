<template>
  <div class="row q-col-gutter-md">
    <div
      class="col-6 col-md-2 col-sm-4 row items-stretch"
      v-for="(item, index) in syllables"
      v-bind:key="index"
    >
      <destination-button
        class="col-12"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import DestinationButton from 'components/DestinationButton.vue'

const { syllables } = defineProps(['syllables'])
</script>
