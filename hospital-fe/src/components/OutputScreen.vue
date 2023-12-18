<script setup>
import { ref } from 'vue'

    const props = defineProps({
        data: Array,
        size: String
    })

    const reactiveData = ref(props);
</script>

<template>
  <div :class="'output-display-screen ' + size + '-size'">
    <div class="screen-content">
      <span v-for="line in reactiveData.data" class="screen-line">
        <span class="line-content" v-html="line"></span>
      </span>
    </div>
  </div>
</template>
  

<style scoped>
    .output-display-screen {
      margin: 1rem;
    }
    .screen-content {
      display: flex;
      flex-direction: column;
    }

    .output-display-screen.normal-size {
      max-width: 150px;
      min-height: 150px;
    }

    .output-display-screen.big-size {
      min-height: 500px;
    }

    .output-display-screen.big-size .screen-line {
      border: 1px solid rgb(240, 240, 240);
      margin: 8px;
      border-radius: 7px;
      box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.1);
      padding: 0.6rem;
      min-height: 100px;
    }

    .output-display-screen .screen-content {
    max-height: 500px;
    overflow-y: scroll;
  }
</style>
