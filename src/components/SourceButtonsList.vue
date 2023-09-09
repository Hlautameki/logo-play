<template>
  <container
    style="display: flex"
    class="row q-col-gutter-md"
    orientation="horizontal"
  >
    <draggable
      style="display: flex; height: auto"
      class="col-6 col-md-2 col-sm-4 row items-stretch"
      v-for="item in syllables"
      v-bind:key="item.syllable"
    >
      <source-button
        class="col-12"
        :item="item"
        @childDropOnSourceEvent="handleCustomEvent"
      />
    </draggable>
  </container>
</template>

<script setup>
import SourceButton from 'components/SourceButton.vue'
import { defineEmits } from 'vue'
import { Container, Draggable } from 'vue-dndrop'

const props = defineProps({
  syllables: Array,
})

const handleCustomEvent = (arg) => emit('dropOnSourceEvent', arg)

const emit = defineEmits(['dropOnSourceEvent'])
</script>
