<template>
  <div
    class="box"
    :ref="drag"
    :style="{ ...style, opacity }"
  >
    <q-btn
      @click="clicked"
      class="full-width full-height"
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
import { computed, defineEmits, unref } from 'vue'

const { playSound } = useSoundPlayer(props.item.path)

const props = defineProps({
  item: Object,
})

function clicked() {
  playSound()
}

const style = {
  cursor: 'move',
}

const [collect, drag] = useDrag(() => ({
  type: 'syllable',
  item: () => ({
    name: 'syllable-item',
  }),
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult()
    if (item && dropResult) {
      emit('childDropOnSourceEvent')
      alert(
        `You dropped ${item.name} into ${dropResult.name} and ${dropResult.testProp}!`
      )
    }
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
}))

const opacity = computed(() => {
  return unref(collect.value.isDragging) ? 0.4 : 1
})

const emit = defineEmits(['childDropOnSourceEvent'])
</script>

<style scoped>
.box {
  cursor: move;
}
</style>
