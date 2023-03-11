<template>
  <q-page class="flex flex-center column q-gutter-md">
    <q-btn
      :to="pPath"
      label="PA"
      color="primary"
      size="15px"
      style="width: 140px"
    ></q-btn>
    <q-btn
      :to="mPath"
      label="MA"
      color="primary"
      size="15px"
      style="width: 140px"
    ></q-btn>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const mode = route.params.mode
const pPath = `${mode}/p`
const mPath = `${mode}/m`
console.log(mode)
</script>
