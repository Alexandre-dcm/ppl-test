<script setup>
    import OutputScreen from './OutputScreen.vue'
    import SetDrugsBtn from './SetDrugsBtn.vue';
    import ActionBtn from './ActionBtn.vue';
    import { ref, onMounted } from 'vue'
    import {processPatientsData, processDrugsData} from '../utils/utils'
    import consts from '@/consts/consts'

    const existingHistory = localStorage.getItem(consts.localStorage.history);
    let history = ref([]);

    onMounted(() => {
      if (existingHistory) {
        injectData(existingHistory);
      }
    });

    const injectData = (fetchedData) => {
        const processHistory = parseHistory(JSON.parse(fetchedData));
        history.value = processHistoryIntoHtml(processHistory);
    }

    const parseHistory = (data) => {
      const result = [];

      for (const history of data) {  
        const line = [];

        const dataProcessors = {
          'patients': processPatientsData,
          'drugs': processDrugsData,
          'report': processPatientsData
        };

        for (const [key, value] of Object.entries(history)) {
          const processor = dataProcessors[key];
          if (processor) {
            line[key] = processor(value);
          }
        }

        result.push(line);
      }

      return result;
    }

    const processHistoryIntoHtml = (histories) => {
      const result = [];

      for (const history of histories) {  
        let line = '';

        for (const [key, value] of Object.entries(history)) {
          line += `<span class="history-${key}">${key.toUpperCase()} : </span><span class="history-${key}-content">${value}</span><br>`
        }

        result.push(line);
      }

      return result;
    }

    const clearHistory = () => {
      history.value = [];
      localStorage.removeItem(consts.localStorage.history, []);
    }
</script>

<template>
  <div class="output-display-wrapper">
        <div class="output-display-screen-wrapper history-screen">
            <h2>Output</h2>
            <div class="output-display-screen">
                <OutputScreen v-bind:data="history" v-bind:size="'big'"></OutputScreen>
            </div>
        </div>
        <div class="output-display-btns">
          <SetDrugsBtn :label="'Start simulation'" :injectData="injectData"></SetDrugsBtn>
          <ActionBtn :label="'Clear history'" :action="clearHistory" :use="'clearHistory'"></ActionBtn>
        </div>
  </div>
</template>

<style scoped>
.output-display-btns {
  display: flex;
  justify-content: space-between;
}


</style>
