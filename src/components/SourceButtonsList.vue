<template>
  <div
    class="row"
    :class="classObject"
  >
    <div class="col column justify-between">
      <container
        style="display: flex; touch-action: none"
        class="row col q-col-gutter-md"
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
        :should-accept-drop="
          (src, payload) => getShouldAcceptDrop(1, src, payload)
        "
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
    </div>
  </div>
</template>

<script setup>
import SourceButton from 'components/SourceButton.vue'
import { reactive, ref } from 'vue'
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

  if (syllables.value?.length < 5) {
    classObject['col-xs-6'] = false
    classObject['col-xs-4'] = true
  }

  if (syllables.value?.length < 3) {
    classObject['col-xs-4'] = false
    classObject['col-xs-2'] = true
  }

  if (syllables.value?.length < 4) {
    classObject['col-sm-4'] = false
    classObject['col-sm-2'] = true
  }
  console.log(classObject)
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

const classObject = reactive({
  'col-xs-6': true,
  'col-md-2': true,
  'col-sm-4': true,
  'col-xs-4': false,
  'col-xs-2': false,
  'col-sm-2': false,
})
</script>
