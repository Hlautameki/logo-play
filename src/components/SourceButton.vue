<template>
  <div
    class="box"
    :ref="drag"
    :style="{ ...style, opacity }"
  >
    <q-btn
      @click="clicked"
      class="full-width full-height"
      :class="matched ? 'bg-secondary' : ''"
    >
      <div>
        <span class="text-h3">{{ item.syllable }}</span>
      </div>
    </q-btn>
  </div>
</template>

<script setup>
import { useSoundPlayer } from '../reusable/soundPlayer'
import { useDrag } from 'vue3-dnd'
import { computed, defineEmits, onMounted, unref } from 'vue'
import { getEmptyImage } from 'react-dnd-html5-backend'

const { playSound } = useSoundPlayer(props.item?.path)

const props = defineProps({
  item: Object,
})

function clicked() {
  playSound()
}

const style = {
  cursor: 'move',
}

const [collect, drag, preview] = useDrag(() => ({
  type: 'syllable',
  item: () => ({
    name: props.item.syllable,
  }),
  end: (draggedItem, monitor) => {
    const dropResult = monitor.getDropResult()
    if (draggedItem && dropResult) {
      if (dropResult.testProp === draggedItem.name) {
        matched = true
        emit('childDropOnSourceEvent', dropResult.testProp)
      }
    }
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
  canDrag: (monitor) => {
    return !matched
  },
}))
onMounted(() => {
  preview(getEmptyImage(), { captureDraggingState: true })
})
let matched = false

const opacity = computed(() => {
  return unref(collect.value.isDragging) ? 0 : 1
})

const emit = defineEmits(['childDropOnSourceEvent'])
</script>

<style scoped>
.box {
  cursor: move;
}
</style>
