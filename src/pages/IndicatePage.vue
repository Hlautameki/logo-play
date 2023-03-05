<template>
  <q-page padding>
    <buttons-list :syllables="syllables" />
    <div class="row justify-center fixed-bottom">
      <q-btn
        class="q-mb-xl"
        style="width: 150px; height: 80px"
        @click="pressClick"
      >
        <q-icon
          name="question_mark"
          size="xl"
        />
      </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import ButtonsList from 'components/ButtonsList.vue'
import { useSound } from '@vueuse/sound'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const syllables = ref(['pa', 'pe', 'pi', 'po', 'pu', 'py'])

let pressSound
let paSound
let peSound
let piSound
let poSound
let puSound
let pySound

try {
  pressSound = useSound(require(`../assets/lori/press.mp3`), {
    onend: () => {
      playSyllable()
      console.info('Sound ended!')
    },
  })

  paSound = useSound(require(`../assets/lori/pa.mp3`))
  peSound = useSound(require(`../assets/lori/pe.mp3`))
  piSound = useSound(require(`../assets/lori/pi.mp3`))
  poSound = useSound(require(`../assets/lori/po.mp3`))
  puSound = useSound(require(`../assets/lori/pu.mp3`))
  pySound = useSound(require(`../assets/lori/py.mp3`))
} catch (e) {
  console.log(e)
}
const sounds = [paSound, peSound, piSound, poSound, puSound, pySound]

function pressClick() {
  if (pressSound) {
    pressSound.play()
  } else {
    $q.notify({
      message: `There is no sound file for \"press.mp3"`,
      color: 'negative',
    })
  }
}

function playSyllable() {
  let item = sounds[Math.floor(Math.random() * sounds.length)]
  item.play()
}
</script>
