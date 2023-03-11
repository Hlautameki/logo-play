<template>
  <q-btn @click="clicked">
    <div>
      <span class="text-h3">{{ item.syllable }}</span>
    </div>
  </q-btn>
</template>

<script setup>
import { useSound } from '@vueuse/sound'
import { useQuasar } from 'quasar'
import { toRefs } from 'vue'

const $q = useQuasar()
const props = defineProps({
  item: Object,
})

let syllable

try {
  syllable = useSound(require(`../${props.item.path}.mp3`))
} catch (e) {
  console.log(e)
}

function clicked() {
  if (syllable) {
    syllable.play()
  } else {
    $q.notify({
      message: `There is no sound file for \"${props.item.syllable}\"`,
      color: 'negative',
    })
  }
}
</script>
