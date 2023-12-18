<script setup>
import { ref, watch } from 'vue'

    const props = defineProps({
        data: Array,
        size: String
    })

    const reactiveData = ref(props);

    // Scrolling to the bottom when new line is inserted in the screen
    watch(props, () => {
      const scrollableDivs = document.querySelectorAll('.screen-content-big');
      scrollableDivs.forEach(div => {
        
        console.log('Scrolling down..', div.scrollHeight);
        setTimeout(() => {
          div.scrollTop = div.scrollHeight;
        }, 10)
      }),
      { immediate: true }
    });
</script>

<template>
  <div :class="'output-display-screen ' + size + '-size'">
    <div :class="'screen-content ' + 'screen-content-' + size">
      <span v-for="line in reactiveData.data" class="screen-line">
        <span class="line-content" v-html="line"></span>
      </span>
    </div>
  </div>
</template>
  

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display&display=swap');

    .screen-content {
      display: flex;
      flex-direction: column;
      font-family: 'Noto Sans Display', sans-serif;
    }

    .output-display-screen.normal-size {
      height: 100%;
    }

    .output-display-screen {
      margin-top: 1rem;
      border-radius: 3px;
      border: 1px solid rgb(234, 234, 234);
      background-color: rgb(248, 248, 248);
    }
    .output-display-screen.big-size {
      height: 500px;
    }

    .output-display-screen.big-size .screen-line {
      border-bottom: 1px solid rgb(240, 240, 240);
      padding: 0.6rem;
      min-height: 100px;
      background-color: white;
    }
    .output-display-screen.big-size .screen-line:first-child {
      margin-top: auto;
    }

    .output-display-screen .screen-content {
    height: 100%;
    overflow-y: scroll;
  }
</style>
