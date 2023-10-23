<template>
  <div
    class="box"
    :style="{ ...style }"
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

// emit('childDropOnSourceEvent', dropResult.testProp)

const emit = defineEmits(['childDropOnSourceEvent'])
</script>

<style scoped>
.box {
  cursor: move;
}
</style>
