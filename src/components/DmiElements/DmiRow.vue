<template>
  <div class="row">
    <dmi-pixel-line v-for="line in data" :data="line"/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiPixel from "@/components/DmiElements/DmiPixel.vue";
import {fill} from "@/js/util";
import DmiPixelLine from "@/components/DmiElements/DmiPixelLine.vue";

export default defineComponent({
  name: "DmiRow",
  components: {DmiPixelLine, DmiPixel},
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
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
.row {
  line-height: 0;
}
</style>