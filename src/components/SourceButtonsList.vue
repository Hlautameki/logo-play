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
    @drag-enter="onDragEnter"
    group-name="1"
    @drag-start="onDragStart"
    @drag-leave="onDragLeave"
    :should-accept-drop="(src, payload) => getShouldAcceptDrop(1, src, payload)"
  >
    <draggable
      style="display: flex; height: auto"
      class="col-6 col-md-2 col-sm-4 row items-stretch"
      v-for="item in syllables"
      v-bind:key="item.syllable"
      :drag-not-allowed="false"
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

const getShouldAcceptDrop = (index, sourceContainerOptions, payload) => {
  // this.log("should-accept-drop", sourceContainerOptions, payload);
  // return this.flags[index].drop;
  console.log('should-accept-drop')
  return true
}

const onDrop = (dropResult) => {
  // console.log('drop result ', dropResult)
  // You can access and modify reactive data here
  console.log(dropResult)
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
  return false
}

const onDragEnter = () => {
  console.log(`onDragEnter`)
}

const onDragLeave = () => {
  console.log(`onDragLeave`)
}

const onDragStart = (dragResult) => {
  console.log('onDragStart')
  const { isSource, payload, willAcceptDrop } = dragResult
  console.log(payload)
}

const getChildPayload = (index) => {
  return syllables.value[index]
}

const handleCustomEvent = (arg) => emit('dropOnSourceEvent', arg)

const emit = defineEmits(['dropOnSourceEvent'])
</script>
