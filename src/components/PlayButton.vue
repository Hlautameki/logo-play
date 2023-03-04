<template>
  <q-btn @click="clicked">
    <div>
      <span class="text-h3">{{ label }}</span>
    </div>
  </q-btn>
</template>

<script setup>
import { useSound } from '@vueuse/sound'
const props = defineProps({
  label: String,
})
let syllable
try {
  syllable = useSound(require(`../assets/${props.label}.mp3`))
} catch (e) {
  console.log(e)
}

function clicked() {
  if (syllable) {
    syllable.play()
  }
}
</script>
