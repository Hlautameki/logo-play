<template>
  <q-page padding>
    <buttons-list :syllables="syllables" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ButtonsList from 'components/ButtonsList.vue'

const route = useRoute()

const consonant = route.params.consonant
console.log(consonant)
const vowels = ['a', 'o', 'u', 'e', 'i', 'y']
const syllables = []
vowels.forEach((vowel) => {
  const syllable = `${consonant}${vowel}`
  const path = `assets/lori/${consonant}/${syllable}`
  syllables.push({
    syllable: syllable,
    path: path,
  })
})
</script>
