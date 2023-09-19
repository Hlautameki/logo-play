<template>
  <container
    style="display: flex"
    class="row q-col-gutter-md"
    orientation="horizontal"
    :get-ghost-parent="getGhostParent"
    :get-child-payload="getChildPayload"
    @drop="onDrop"
    @drop-ready="onDropReady"
    @drop-not-allowed="dropNotAllowed"
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
      />
    </draggable>
  </container>
</template>

<script setup>
import SourceButton from 'components/SourceButton.vue'
import { defineEmits, ref } from 'vue'
import { Container, Draggable } from 'vue-dndrop'
import { applyDrag } from '../utils/helpers'

const props = defineProps({
  syllablesProp: Array,
})

let syllables = ref(props.syllablesProp)

const onDrop = (dropResult) => {
  console.log('drop result ', dropResult)
  // You can access and modify reactive data here
  syllables.value = applyDrag(syllables.value, dropResult)
}

const getGhostParent = () => {
  return document.body
}

const onDropReady = (dropResult) => {
  console.log('drop ready', dropResult)
}

const dropNotAllowed = ({ payload, container }) => {
  console.log('drop not allowed')
}

const getChildPayload = (index) => {
  return syllables.value[index]
}

const handleCustomEvent = (arg) => emit('dropOnSourceEvent', arg)

const emit = defineEmits(['dropOnSourceEvent'])
</script>
