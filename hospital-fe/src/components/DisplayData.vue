<script setup>
import OutputScreen from './OutputScreen.vue'
import FetchDataBtn from './FetchDataBtn.vue'
import { ref } from 'vue'
import { processPatientsData, processDrugsData } from '../utils/utils'

let patientsData = ref([])
let drugsData = ref([])

const injectData = (fetchedData) => {
  patientsData.value = processPatientsData(fetchedData.patientsData)
  drugsData.value = processDrugsData(fetchedData.drugsData)
}
</script>

<template>
  <div class="display-data-wrapper">
    <div class="output-display-wrapper">
      <div class="output-display-screen-wrapper patients-screen">
        <h2>Patients</h2>
        <div class="output-display-screen-wrapper">
          <OutputScreen v-bind:data="patientsData" v-bind:size="'normal'"></OutputScreen>
        </div>
      </div>
      <div class="output-display-screen-wrapper drugs-screen">
        <h2>Drugs</h2>
        <div class="output-display-screen-wrapper">
          <OutputScreen v-bind:data="drugsData" v-bind:size="'normal'"></OutputScreen>
        </div>
      </div>
    </div>
    <div class="output-btn-wrapper">
      <FetchDataBtn :label="'Fetch data'" :injectData="injectData"></FetchDataBtn>
    </div>
  </div>
</template>

<style scoped>
.display-data-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.output-display-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.output-display-screen-wrapper h2 {
  font-weight: bold;
}

.output-display-screen {
  padding: 0.8rem;
  font-size: 20px;
  font-weight: bold;
}

.output-display-screen-wrapper {
  width: 100%;
  height: 75%;
}
</style>
