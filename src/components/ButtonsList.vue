<template>
  <!--  <div class="row q-col-gutter-x-md">-->
  <!--    <play-button-->
  <!--      style="height: 80px"-->
  <!--      v-for="item in syllables"-->
  <!--      v-bind:key="item"-->
  <!--      :label="item"-->
  <!--      class="col-2"-->
  <!--    >-->
  <!--    </play-button>-->
  <!--  </div>-->
  <div class="row q-col-gutter-md">
    <div
      class="col-4 col-md-2"
      v-for="n in 6"
      :key="`none-${n}`"
    >
      <!--      <div style="background: #26a69a">&nbsp;</div>-->
      <div
        style="background: #26a69a"
        class="row"
      >
        <q-btn
          class="col-12"
          label="PA"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayButton from 'components/PlayButton.vue'

const props = defineProps({
  syllables: [],
})
</script>

<style></style>
