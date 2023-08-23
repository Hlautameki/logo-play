<template>
  <div
    :ref="drop"
    :style="{ ...style }"
    :class="isActive ? 'bg-accent' : collect.canDrop ? 'bg-info' : ''"
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
  drop: () => ({ name: 'Dustbin2', testProp: props.item.syllable }),
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

const isActive = computed(
  () => unref(collect.value.canDrop) && unref(collect.value.isOver)
)
</script>
