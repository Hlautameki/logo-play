<template>
  <q-page padding>
    <buttons-list :syllables="syllables" />
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ButtonsList from 'components/ButtonsList.vue'
import { useSyllablesWithPathBuilder } from 'src/reusable/syllablesWithPathBuilder'

const { getSyllablesWithPath } = useSyllablesWithPathBuilder()
const route = useRoute()
const consonant = route.params.consonant
const syllables = getSyllablesWithPath(consonant)
</script>
