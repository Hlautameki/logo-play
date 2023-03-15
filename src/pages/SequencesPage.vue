<template>
  <q-page
    padding
    class="row items-stretch"
  >
    <div class="col column justify-between">
      <buttons-list
        class="col-6 col-md-2 col-sm-4"
        :syllables="syllables"
      />
      <buttons-list
        class="col-6 col-md-2 col-sm-4"
        :syllables="syllables"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSyllablesWithPathBuilder } from 'src/reusable/syllablesWithPathBuilder'
import ButtonsList from 'components/ButtonsList.vue'

const route = useRoute()
const consonant = route.params.consonant
const { getSyllablesWithPath } = useSyllablesWithPathBuilder()
const syllables = getSyllablesWithPath(consonant)
</script>
