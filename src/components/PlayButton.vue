<template>
  <q-btn
    @click="clicked"
    :class="buttonClass"
  >
    <div>
      <span class="text-h3">{{ item?.syllable }}</span>
    </div>
  </q-btn>
</template>

<script setup>
import { useSoundPlayer } from '../reusable/soundPlayer'

const { playSound } = useSoundPlayer(props?.item?.path)

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
</script>
