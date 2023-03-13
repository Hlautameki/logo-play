<template>
  <q-page
    padding
    class="row items-stretch"
  >
    <div class="col column">
      <buttons-list
        class="col-6 col-md-2 col-sm-4"
        :syllables="syllables"
      />
    </div>
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
