<template>
  <span class="pixel" :class="{'active': data > 0}"></span>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DmiPixel",
  props: {
    data: {
      type: Number,
      required: true,
    }
  }
})
</script>

<style scoped>
.pixel {
  border-radius: 5px;
  width: 5px;
  height: 5px;
  background-color: #282828;
  display: inline-block;
}
.pixel.active {
  background-color: #ffdd00;
}
</style>