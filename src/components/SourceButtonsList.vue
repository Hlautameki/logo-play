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
        @childDropOnSourceEvent="handleCustomEvent"
      />
      <CustomDragLayer></CustomDragLayer>
    </div>
  </div>
</template>

<script setup>
import SourceButton from 'components/SourceButton.vue'
import { defineEmits } from 'vue'
import CustomDragLayer from 'components/CustomDragLayer.vue'
const props = defineProps({
  syllables: Array,
})

const handleCustomEvent = (arg) => emit('dropOnSourceEvent', arg)

const emit = defineEmits(['dropOnSourceEvent'])
</script>
