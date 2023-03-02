<template>
  <q-page padding>
    <div class="q-gutter-md fit row wrap q-mx-auto q-my-auto">
      <q-btn
        style="width: 150px; height: 80px"
        v-for="item in syllables"
        v-bind:key="item"
        @click="clicked"
      >
        <div>
          <span class="text-h3">{{ item }}</span>
        </div>
      </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import paSound from '../assets/pa.mp3'
import { useSound } from '@vueuse/sound'

const paSyllable = useSound(paSound, { volume: 1 })
const syllables = ref([
  'PA',
  'PO',
  'PE',
  'PI',
  'PU',
  'PY',
  'PA',
  'PO',
  'PE',
  'PI',
  'PU',
  'PY',
])

function clicked() {
  paSyllable.play()
}
</script>
