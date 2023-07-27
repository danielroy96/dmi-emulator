<template>
    <span class="line">
      <dmi-pixel v-for="pixel in data" :data="pixel"/>
      <br/>
    </span>
</template>

<script>
import {defineComponent} from 'vue'
import DmiPixel from "@/components/DmiElements/DmiPixel.vue";
import {fill} from "@/js/util";

export default defineComponent({
  name: "DmiPixelLine",
  components: {DmiPixel},
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  methods: {
    fill,
  }
})
</script>

<style scoped>

</style>