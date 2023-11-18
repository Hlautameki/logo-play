<template>
  <q-page
    padding
    class="row items-stretch"
  >
    <div class="col column justify-between">
      <buttons-list
        class="col-6 col-md-2 col-sm-4"
        :syllables="syllables"
      >
        <template v-slot:button-slot="{ item, customClass }">
          <destination-button
            :item="item"
            :button-class="customClass"
          />
        </template>
      </buttons-list>
      <source-buttons-list :syllablesProp="sourceSyllables" />
    </div>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSyllablesWithPathBuilder } from 'src/reusable/syllablesWithPathBuilder'
import SourceButtonsList from 'components/SourceButtonsList.vue'
import { reactive, ref } from 'vue'
import ButtonsList from 'components/ButtonsList.vue'
import DestinationButton from 'components/DestinationButton.vue'

const route = useRoute()
const consonant = route.params.consonant
const { getSyllablesWithPath } = useSyllablesWithPathBuilder()
const syllables = ref(getSyllablesWithPath(consonant))
let sourceSyllables = [...syllables.value]
sourceSyllables = sourceSyllables.sort((a, b) => 0.5 - Math.random())
</script>
