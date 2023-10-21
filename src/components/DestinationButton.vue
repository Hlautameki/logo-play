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
import { computed, ref, unref } from 'vue'
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
  console.log('should-accept-drop', sourceContainerOptions, payload)
  console.log('getShouldAcceptDrop Destination')
  if (payload.syllable == props.item.syllable) {
    console.log('return false')
    return true
  }
  return false
}

const style = {}
const shouldAnimateDrop = (sourceContainerOptions, payload) => {
  console.log('shouldAnimateDrop')
  console.log(payload)
  return false
}

const dragOver = ref(false)

const onDragEnter = () => {
  console.log(`onDragEnter - DestinationButton`)
  dragOver.value = true
}
const dropNotAllowed = ({ payload, container }) => {
  console.log('Drop Not Allowed')
  console.log(payload)
  return true
}

const onDrop = (dropResult) => {
  console.log('onDrop - DestinationButton')
  const { removedIndex, addedIndex, payload, element } = dropResult
  console.log(payload)
  console.log(props.item.syllable)
  btnColor.value = 'green'
}

const dragLeave = () => {
  console.log('Drag Leave - DestinationButton')
  dragOver.value = false
}

const btnColor = ref()
</script>
