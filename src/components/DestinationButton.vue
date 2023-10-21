<template>
  <container
    :class="buttonClass"
    style="display: flex"
    :style="{ ...style }"
    orientation="horizontal"
    @drag-enter="onDragEnter"
    group-name="2"
    :should-animate-drop="shouldAnimateDrop"
    :behaviour="behaviour"
    @drop-not-allowed="dropNotAllowed"
    @drag-leave="dragLeave"
    @drop="onDrop"
    :should-accept-drop="(src, payload) => getShouldAcceptDrop(1, src, payload)"
  >
    <q-btn
      @click="clicked"
      class="full-width full-height"
      :class="item.matched ? 'bg-secondary' : ''"
      :color="btnColor"
    >
      <div>
        <span class="text-h3">{{ item.syllable }}</span>
      </div>
    </q-btn>
  </container>
</template>

<script setup>
import { useSoundPlayer } from '../reusable/soundPlayer'
import { ref } from 'vue'
import { Container } from 'vue-dndrop'

const { playSound } = useSoundPlayer(props.item.path)
let behaviour = 'drop-zone'

const props = defineProps({
  item: Object,
  buttonClass: {
    type: String,
    default: '',
  },
})

function clicked() {
  playSound()
}

const getShouldAcceptDrop = (index, sourceContainerOptions, payload) => {
  return payload.syllable == props.item.syllable
}

const style = {}
const shouldAnimateDrop = (sourceContainerOptions, payload) => {
  return false
}

const dragOver = ref(false)

const onDragEnter = () => {
  dragOver.value = true
}
const dropNotAllowed = ({ payload, container }) => {
  return true
}

const onDrop = (dropResult) => {
  const { removedIndex, addedIndex, payload, element } = dropResult
  btnColor.value = 'green'
}

const dragLeave = () => {
  dragOver.value = false
}

const btnColor = ref()
</script>
