<template>
  <div
    :ref="drop"
    :style="{ ...style, backgroundColor }"
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
import { useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'

const { playSound } = useSoundPlayer(props.item.path)

const props = defineProps({
  item: Object,
})

function clicked() {
  playSound()
}

const style = {}

const [collect, drop] = useDrop(() => ({
  accept: 'syllable',
  drop: () => ({ name: 'Dustbin' }),
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

const isActive = computed(
  () => unref(collect.value.canDrop) && unref(collect.value.isOver)
)
const backgroundColor = computed(() =>
  unref(isActive)
    ? 'darkgreen'
    : unref(collect.value.canDrop)
    ? 'darkkhaki'
    : ''
)
</script>
