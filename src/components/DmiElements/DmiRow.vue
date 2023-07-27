<template>
  <div class="row">
    <span v-for="y in fill(height)" class="line">
      <dmi-pixel v-for="x in fill(width)" />
      <br/>
    </span>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiPixel from "@/components/DmiElements/DmiPixel.vue";

export default defineComponent({
  name: "DmiRow",
  components: {DmiPixel},
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
    fill(max) {
      return Array(max).fill().map((_, i) => i + 1);
    }
  }
})
</script>

<style scoped>
.row {
  line-height: 0;
}
</style>