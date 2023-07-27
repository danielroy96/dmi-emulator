<template>
  <div class="row">
    <dmi-pixel-line :data="fillBlank(240)"/>
    <dmi-pixel-line v-for="line in data" :data="line"/>
    <dmi-pixel-line :data="fillBlank(240)"/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiPixel from "@/components/DmiElements/DmiPixel.vue";
import DmiPixelLine from "@/components/DmiElements/DmiPixelLine.vue";
import {fillBlank} from "@/js/util";

export default defineComponent({
  name: "DmiRow",
  components: {DmiPixelLine, DmiPixel},
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  methods: {
    fillBlank,
  }
})
</script>

<style scoped>
.row {
  line-height: 0;
}
</style>