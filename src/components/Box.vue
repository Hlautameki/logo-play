<template>
  <div
    class="box"
    :ref="drag"
    :style="{ ...style, opacity }"
  >
    Box
  </div>
</template>

<script setup>
import { useDrag } from 'vue3-dnd'
import {
  computed,
  unref,
  toRefs,
  isProxy,
  isRef,
  reactive,
  isReactive,
  toRef,
} from 'vue'
const props = defineProps({
  name: String,
})

const style = {
  border: '1px dashed gray',
  backgroundColor: 'red',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

const [collect, drag] = useDrag(() => ({
  type: 'box',
  item: () => ({
    name: 'box-item',
  }),
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult()
    if (item && dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
}))
console.log('is collect ref: ' + isRef(collect))
console.log('is collect reactive: ' + isReactive(collect))

console.log('collect:')
console.dir(collect)
console.log('collect value:')
console.dir(collect.value)
const obj = reactive({ test: collect.value })
console.log('is obj reactive: ' + isReactive(obj))
console.log()
console.log('obj: ' + obj)
console.dir(obj)
// const { isDragging } = toRef(obj, 'test')
console.log('isDragging:')
// console.dir(isDragging)

// console.log('collect: ' + collect)
// console.log(isProxy(collect))
// console.log('isRef: ' + isRef(collect.value))
// const { collectValue } = toRefs(collect.value)
// const { isDragging } = toRefs(collectValue.value)
// console.log('isDragging unref: ' + unref(isDragging))
// console.log('isDragging is ref: ' + isRef(isDragging))
// console.log('isDragging value is ref: ' + isRef(isDragging))
// console.log(isDragging)
// console.log(collect.value.isDragging)
// const { isDragging } = toRef(collect.value, 'isDragging')
//
// const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
// const opacity = computed(() => {
//   console.log(`computed: ${collect.value.isDragging}`)
//   return unref(collect.value.isDragging) ? 0.4 : 1
// })
// const opacity = computed(() => {
//   console.log(`computed: ${unref(collect.value.isDragging)}`)
//   return unref(collect.value.isDragging) ? 0.4 : 1
// })

// console.log(isDragging)
const opacity = computed(() => {
  // console.log(`computed: ${collect.value.isDragging}`)
  // console.log('isDragging: ' + isDragging.value)
  console.log(`computed: ${collect.value.isDragging}`)
  return unref(collect.value.isDragging) ? 0.4 : 1
})
</script>

<style scoped>
.box {
  float: left;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid gray;
  cursor: move;

  &.dragging {
    opacity: 0.4;
  }
}
</style>
