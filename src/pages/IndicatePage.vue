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
import ButtonsList from 'components/ButtonsList.vue'
import { useRoute } from 'vue-router'
import { useSyllablesWithPathBuilder } from 'src/reusable/syllablesWithPathBuilder'
import { useSoundPlayer } from '../reusable/soundPlayer'

const { getSyllablesWithPath } = useSyllablesWithPathBuilder()

const route = useRoute()
const consonant = route.params.consonant
const syllables = getSyllablesWithPath(consonant)

const { playSound: pressSound } = useSoundPlayer(
  `assets/lori/press`,
  playSyllable
)
const { playSound: paSound } = useSoundPlayer(
  `assets/lori/${consonant}/${consonant}a`
)
const { playSound: peSound } = useSoundPlayer(
  `assets/lori/${consonant}/${consonant}e`
)
const { playSound: piSound } = useSoundPlayer(
  `assets/lori/${consonant}/${consonant}i`
)
const { playSound: poSound } = useSoundPlayer(
  `assets/lori/${consonant}/${consonant}o`
)
const { playSound: puSound } = useSoundPlayer(
  `assets/lori/${consonant}/${consonant}u`
)
const { playSound: pySound } = useSoundPlayer(
  `assets/lori/${consonant}/${consonant}y`
)

const sounds = [paSound, peSound, piSound, poSound, puSound, pySound]

function pressClick() {
  pressSound()
}

function playSyllable() {
  let item = sounds[Math.floor(Math.random() * sounds.length)]
  item()
}
</script>
