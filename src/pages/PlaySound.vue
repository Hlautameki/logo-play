<template>
  <q-page padding>
    <buttons-list :syllables="syllables" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import ButtonsList from 'components/ButtonsList.vue'

const syllables = ref(['pa', 'pe', 'pi', 'po', 'pu', 'py'])
</script>
