<template>
  <div class="display">
    <dmi-row :data="departureBits[0]"/>
    <dmi-row :data="departureBits[1]"/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiRow from "@/components/DmiElements/DmiRow.vue";
import {departuresToDmi, stringToDmi} from "@/js/dmi";
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
      trainApproachingBits: stringToDmi("**** STAND BACK - TRAIN APPROACHING ****"),
      emptyBits: stringToDmi(""),
    }
  },
  methods: {
    async updateDmiWithDepartures() {
      this.departures = await getDepartures();
      this.departureBits = await departuresToDmi(this.departures);
      if (this.departures[0].minutes < 0.5) {
        await this.trainApproachingSequence();
      }
    },
    async trainApproachingSequence() {
      for (let i = 0; i < 5; i++) {
        this.departureBits[1] = this.emptyBits;
        await this.sleep(500);
        this.departureBits[1] = this.trainApproachingBits;
        await this.sleep(500)
      }
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
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