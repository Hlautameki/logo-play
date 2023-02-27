<template>
  <q-page padding>
    <q-btn
      v-for="item in syllables"
      v-bind:key="item"
      style="width: 150px; height: 80px"
    >
      <div>
        <span class="text-h3">{{ item }}</span>
      </div>
    </q-btn>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const syllables = ref(['PA', 'PO', 'PE', 'PI', 'PU', 'PY'])
</script>
