<script setup>
import ButtonDragPreview from 'components/ButtonDragPreview.vue'
import { useDragLayer } from 'vue3-dnd'
import { reactive, toRefs } from 'vue'

const collectedProps = useDragLayer((monitor) => ({
  item: monitor.getItem(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
}))
// const { isDragging, item } = toRefs(collect)
const styleObject = reactive({
  position: 'fixed',
  pointerEvents: 'none',
  left: collectedProps.value.currentOffset?.x,
  top: collectedProps.value.currentOffset?.y,
})
</script>

<template>
  <ButtonDragPreview
    v-if="collectedProps.item"
    :style="styleObject"
  />
  <!--  <div-->
  <!--    v-if="collectedProps.item"-->
  <!--    :style="styleObject"-->
  <!--  >-->
  <!--    {{ collectedProps.item }}-->
  <!--  </div>-->
</template>
