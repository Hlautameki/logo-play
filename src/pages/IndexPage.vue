<template>
  <q-page class="flex flex-center">
    <q-btn
      to="PlaySound"
      label="Listen"
      color="primary"
      icon="volume_down"
    ></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>
