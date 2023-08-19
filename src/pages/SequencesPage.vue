<template>
  <q-page
    padding
    class="row items-stretch"
  >
    <div class="col column justify-between">
      <!--      <dustbin class="col-6 col-md-2 col-sm-4"> </dustbin>-->
      <!--      <div class="col-6 col-md-2 col-sm-4 row justify-center">-->
      <!--        <box class="col-2"></box>-->
      <!--      </div>-->
      <destination-buttons-list
        class="col-6 col-md-2 col-sm-4"
        :syllables="syllables"
      />
      <source-buttons-list
        class="col-6 col-md-2 col-sm-4"
        :syllables="syllables"
        @dropOnSourceEvent="handleDropOnSourceEvent"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSyllablesWithPathBuilder } from 'src/reusable/syllablesWithPathBuilder'
import ButtonsList from 'components/ButtonsList.vue'
import Dustbin from 'components/Dustbin.vue'
import Box from 'components/Box.vue'
import DestinationButtonsList from 'components/DestinationButtonsList.vue'
import SourceButtonsList from 'components/SourceButtonsList.vue'

const route = useRoute()
const consonant = route.params.consonant
const { getSyllablesWithPath } = useSyllablesWithPathBuilder()
const syllables = getSyllablesWithPath(consonant)

const handleDropOnSourceEvent = () => {
  console.log('Custom event received in ParentA')
}

// defineEmits(['customEvent'])
</script>
