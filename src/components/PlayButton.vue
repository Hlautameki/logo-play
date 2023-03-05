<template>
  <q-btn @click="clicked">
    <div>
      <span class="text-h3">{{ label }}</span>
    </div>
  </q-btn>
</template>

<script setup>
import { useSound } from '@vueuse/sound'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const props = defineProps({
  label: String,
})

let syllable

try {
  syllable = useSound(require(`../assets/lori/${props.label}.mp3`))
} catch (e) {
  console.log(e)
}

function clicked() {
  if (syllable) {
    syllable.play()
  } else {
    $q.notify({
      message: `There is no sound file for \"${props.label}\"`,
      color: 'negative',
    })
  }
}
</script>
