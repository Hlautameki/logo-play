<template>
  <q-page class="flex flex-center column q-gutter-md">
    <q-btn
      to="listen"
      label="Słuchaj"
      color="primary"
      icon="volume_down"
      size="15px"
      style="width: 160px"
    ></q-btn>
    <q-btn
      to="Indicate"
      label="Wskaż"
      color="primary"
      icon="touch_app"
      size="15px"
      style="width: 160px"
    ></q-btn>
    <q-btn
      to="Sequences"
      label="Sekwencje"
      color="primary"
      icon="swipe_right_alt"
      size="15px"
      style="width: 160px"
    ></q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
})
</script>
