<template>
  <div>
    <div class="display">
      <dmi-row :data="departureBits[0]"/>
      <dmi-row :data="departureBits[1]"/>
    </div>
    <div class="controls" data-bs-theme="dark">
      <form>
        <div class="row">
          <div class="col-auto">
            <label for="lineInput" class="col-form-label">Line</label>
          </div>
          <div class="col-auto">
            <select v-model="line" id="lineInput" class="form-select form-select-sm3" @change="updateStops">
              <option v-for="item in lines" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
          <div class="col-auto">
            <label for="stopInput" class="col-form-label">Stop</label>
          </div>
          <div class="col-auto">
            <select v-model="stop" id="stopInput" class="form-select form-select-sm3" @change="updateDmiWithDepartures">
              <option v-for="item in stops" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import DmiRow from "@/components/DmiElements/DmiRow.vue";
import {departuresToDmi, stringToDmi} from "@/js/dmi";
import {getDepartures, getLines, getStops} from "@/js/tfl";

export default defineComponent({
  name: "DmiDisplay",
  components: {DmiRow},
  async mounted() {
    this.lines = await getLines();
    this.updateStops();
    this.updateDmiWithDepartures();
    setInterval(async () => {
      this.updateDmiWithDepartures()
      console.log("Refreshed data " + new Date())
    }, 10000)
  },
  data() {
    return {
      lines: [],
      stops: [],
      departures: [],
      departureBits: [],
      line: "victoria",
      stop: "940GZZLUSVS",
      trainApproachingBits: stringToDmi("**** STAND BACK - TRAIN APPROACHING ****"),
      emptyBits: stringToDmi(""),
    }
  },
  methods: {
    async updateStops() {
      this.stops = await getStops(this.line);
    },
    async updateDmiWithDepartures() {
      this.departures = await getDepartures(this.line, this.stop);
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
      this.sleep(5000);
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
})
</script>

<style scoped>
.display {
  background-color: dimgray;
  display: block;
  width: fit-content;
  border: 1em solid #262626;
  margin: 20vh auto;
}

.controls {
  width: fit-content;
  margin: auto;
}

label {
  color: gray;
}
</style>