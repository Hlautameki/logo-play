<template>
  <q-page class="q-pa-md q-col-gutter-lg row content-start">
    <div
      :class="classArray"
      class="row"
    >
      <q-btn
        style="aspect-ratio: 1; min-width: 202px"
        class="col"
        to="listen"
        label="Słuchaj"
        color="primary"
        icon="volume_down"
        size="lg"
      />
    </div>
    <div
      :class="classArray"
      class="row"
    >
      <q-btn
        style="aspect-ratio: 1; min-width: 202px"
        class="col"
        to="Indicate"
        label="Wskaż"
        color="primary"
        size="lg"
        icon="touch_app"
      />
    </div>
    <div
      :class="classArray"
      class="row"
    >
      <q-btn
        style="aspect-ratio: 1; min-width: 202px"
        class="col"
        to="Sequences"
        label="Sekwencje"
        color="primary"
        size="lg"
        icon="swipe_right_alt"
      />
    </div>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'

const classArray = ['col-xs-12', 'col-sm-4', 'col-md-2', 'col-lg-2', 'col-xl-2']
const btnRef = ref(null)
const btnHeight = computed(() => 300)
</script>
