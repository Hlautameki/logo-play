<template>
  <q-page
    padding
    class="row items-stretch"
  >
    <div class="col column justify-between">
      <destination-buttons-list
        class="col-6 col-md-2 col-sm-4"
        v-model:syllables="syllables"
      />
      <source-buttons-list
        class="col-6 col-md-2 col-sm-4"
        :syllables="sourceSyllables"
        @dropOnSourceEvent="handleDropOnSourceEvent"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSyllablesWithPathBuilder } from 'src/reusable/syllablesWithPathBuilder'
import DestinationButtonsList from 'components/DestinationButtonsList.vue'
import SourceButtonsList from 'components/SourceButtonsList.vue'
import { ref } from 'vue'

const route = useRoute()
const consonant = route.params.consonant
const { getSyllablesWithPath } = useSyllablesWithPathBuilder()
const syllables = ref(getSyllablesWithPath(consonant))
let sourceSyllables = [...syllables.value]
sourceSyllables = sourceSyllables.sort((a, b) => 0.5 - Math.random())
const handleDropOnSourceEvent = (arg) => {
  syllables.value.forEach((syll) => {
    if (syll.syllable === arg) {
      syll.matched = true
    }
  })
}
</script>
