<template>
  <q-page class="q-pa-md q-col-gutter-lg row content-start">
    <div
      :class="classArray"
      class="row"
    >
      <q-btn
        style="aspect-ratio: 1; min-width: 202px"
        class="col q-pa-none"
        to="listen"
        color="primary"
        size="lg"
      >
        <q-img src="../assets/categories/listening.jpg">
          <div class="absolute-bottom text-subtitle text-center">Słuchaj</div>
        </q-img>
      </q-btn>
    </div>
    <div
      :class="classArray"
      class="row"
    >
      <q-btn
        style="aspect-ratio: 1; min-width: 202px"
        class="col q-pa-none"
        to="Indicate"
        color="primary"
        size="lg"
      >
        <q-img src="../assets/categories/answering.jpg">
          <div class="absolute-bottom text-subtitle text-center">
            Odpowiadaj
          </div>
        </q-img></q-btn
      >
    </div>
    <div
      :class="classArray"
      class="row"
    >
      <q-btn
        style="aspect-ratio: 1; min-width: 202px"
        class="col q-pa-none"
        to="Sequences"
        color="primary"
        size="lg"
      >
        <q-img src="../assets/categories/drag-and-drop.jpg">
          <div class="absolute-bottom text-subtitle text-center">Przesuwaj</div>
        </q-img>
      </q-btn>
    </div>
  </q-page>
</template>

<script setup>
const classArray = ['col-xs-12', 'col-sm-4', 'col-md-3', 'col-lg-2', 'col-xl-2']
</script>
