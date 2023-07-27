<template>
  <div class="display">
    <dmi-row :data="departures[0]" :height="7" :width="200"/>
    <dmi-row :data="departures[1]" :height="7" :width="200"/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiRow from "@/components/DmiElements/DmiRow.vue";
import {buildData} from "@/js/dmi";

export default defineComponent({
  name: "DmiDisplay",
  components: {DmiRow},
  async mounted() {
    this.departures = await buildData();
  },
  data() {
    return {
      departures: [],
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