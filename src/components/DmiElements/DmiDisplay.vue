<template>
  <div class="display">
    <dmi-row :data="departureBits[0]"/>
    <dmi-row :data="departureBits[1]"/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiRow from "@/components/DmiElements/DmiRow.vue";
import {departuresToDmi} from "@/js/dmi";
import {getDepartures} from "@/js/tfl";

export default defineComponent({
  name: "DmiDisplay",
  components: {DmiRow},
  async mounted() {
    this.updateDmiWithDepartures();
    setInterval(async () => {
      this.updateDmiWithDepartures()
      console.log("Refreshed data " + new Date())
    }, 10000)

  },
  data() {
    return {
      departures: [],
      departureBits: [],
    }
  },
  methods: {
    async updateDmiWithDepartures() {
      this.departures = await getDepartures();
      this.departureBits = await departuresToDmi(this.departures);
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