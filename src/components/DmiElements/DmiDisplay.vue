<template>
  <div class="display">
    <dmi-row :data="data" :height="8" :width="130"/>
    <dmi-row :data="data" :height="8" :width="130"/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiRow from "@/components/DmiElements/DmiRow.vue";
import {getDepartures} from "@/js/tfl";

export default defineComponent({
  name: "DmiDisplay",
  components: {DmiRow},
  async mounted() {
    this.departures = await getDepartures();
  },
  data() {
    return {
      departures: [],
      data: [
        [0, 0, 0, 0],
        [0, 1, 0, 1],
      ]
    }
  }
})
</script>

<style scoped>
.display {
  background-color: white;
  display: block;
}
</style>