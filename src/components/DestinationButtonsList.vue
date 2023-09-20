<template>
  <container
    style="display: flex"
    class="row q-col-gutter-md"
    orientation="horizontal"
    @drag-enter="onDragEnter"
    group-name="1"
    :should-animate-drop="shouldAnimateDrop"
    :behaviour="behaviour"
  >
    <draggable
      class="col-6 col-md-2 col-sm-4 row items-stretch"
      style="display: flex; height: auto"
      v-for="(item, index) in syllables"
      v-bind:key="index"
      :drag-not-allowed="true"
    >
      <destination-button
        class="col-12"
        :item="item"
      />
    </draggable>
  </container>
</template>

<script setup>
import DestinationButton from 'components/DestinationButton.vue'
import { Container, Draggable } from 'vue-dndrop'

const { syllables } = defineProps(['syllables'])

const onDragEnter = () => {
  console.log(`onDragEnter`)
}
let behaviour = 'drop-zone'
const shouldAnimateDrop = (sourceContainerOptions, payload) => {
  return false
}
</script>
