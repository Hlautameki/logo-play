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
      class="col-6 col-md-2 col-sm-4 row items-stretch"
      v-for="n in 6"
      :key="`none-${n}`"
    >
      <!--      <div style="background: #26a69a">&nbsp;</div>-->
      <div
        style="background: #26a69a"
        class="row items-stretch col-12"
      >
        <q-btn
          class="col-12"
          label="PA"
          style="min-height: inherit"
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
