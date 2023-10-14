<template>
  <container
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
})

function clicked() {
  playSound()
}

// const onShouldAcceptDrop = (src, payload) => {
//   console.log('onShouldAcceptDrop')
//   return false
// }

const getShouldAcceptDrop = (index, sourceContainerOptions, payload) => {
  console.log('should-accept-drop', sourceContainerOptions, payload)
  // return this.flags[index].drop;
  console.log('getShouldAcceptDrop Destination')
  // console.log(payload.syllable)
  if (payload.syllable == props.item.syllable) {
    console.log('return false')
    return true
  }
  return false
}

// const getShouldAcceptDrop = (a, b) => {
//   console.log('getShouldAcceptDrop')
//   return false
// }

const style = {}
const shouldAnimateDrop = (sourceContainerOptions, payload) => {
  console.log('shouldAnimateDrop')
  console.log(payload)
  return false
}

// const [collect, drop] = useDrop(() => ({
//   accept: 'syllable',
//   drop: () => ({ name: 'Dustbin2', testProp: props.item.syllable }),
//   collect: (monitor) => ({
//     isOver: monitor.isOver(),
//     canDrop: monitor.canDrop(),
//   }),
// }))
const dragOver = ref(false)

const onDragEnter = () => {
  console.log(`onDragEnter - DestinationButton`)
  dragOver.value = true
  btnColor.value = 'pink'
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
  btnColor.value = 'red'
}

const dragLeave = () => {
  console.log('Drag Leave - DestinationButton')
  dragOver.value = false
  btnColor.value = 'green'
}

const btnColor = ref('green')
// const isActive = computed(
//   () => unref(collect.value.canDrop) && unref(collect.value.isOver)
// )
</script>
