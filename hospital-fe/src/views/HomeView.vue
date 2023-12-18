<script setup>

import DisplayData from '../components/DisplayData.vue'
import History from '../components/History.vue'
</script>

<template>
  <main>
    <div class="home-title-container">
      <div class="line left"></div>
      <h1>Dashboard</h1>
      <div class="line right"></div>
    </div>
    <div class="simulation-container">
      <div class="display-data-container">
        <DisplayData></DisplayData>
      </div>
      <div class="history-container">
        <History></History>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .simulation-container{
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
  }

  .home-title-container {
    position: relative;
  }

  .display-data-container {
    width: 50%;
  }

  .home-title-container h1 {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
  }

  .line {
    width: 30%;
    height: 1px;
    background-color: lightgrey; /* Couleur de la ligne */
    top: 25px;
    position: absolute
  }

  .line.left {
    left: 90px;
  }

  .line.right {
    right: 90px;
  }
</style>