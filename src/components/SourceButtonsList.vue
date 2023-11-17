<template>
  <container
    style="display: flex; touch-action: none"
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
    :drag-begin-delay="0"
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
  return true
}

const onDrop = (dropResult) => {
  syllables.value = applyDrag(syllables.value, dropResult)
}

const getGhostParent = () => {
  return document.body
}

const onDropReady = (dropResult) => {}

const dropNotAllowed = ({ payload, container }) => {
  return false
}

const onDragEnter = () => {}

const onDragLeave = () => {}

const onDragStart = (dragResult) => {
  const { isSource, payload, willAcceptDrop } = dragResult
}

const getChildPayload = (index) => {
  return syllables.value[index]
}

const handleCustomEvent = (arg) => emit('dropOnSourceEvent', arg)

const emit = defineEmits(['dropOnSourceEvent'])
</script>
