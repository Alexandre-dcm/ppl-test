<script setup>

import DisplayData from '../components/DisplayData.vue'
import History from '../components/History.vue'
</script>

<template>
  <main>
    <div class="home-title-container">
      <div class="line line-left"></div>
      <h1>Dashboard</h1>
      <div class="line line-right"></div>
    </div>
    <div class="simulation-container">
      <div class="simulation-container-item display-data-container">
        <DisplayData></DisplayData>
      </div>
      <div class="simulation-container-item history-container">
        <History></History>
      </div>
    </div>
  </main>
  <hr>
</template>

<style scoped>
  .simulation-container{
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
  }

  .simulation-container h2{
    font-weight: bold;
  }

  .simulation-container-item {
    padding: 0.9rem;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 9px;
    box-shadow: 3px 3px 8px rgb(0, 0, 0, 0.1);
    margin: 0 0.5rem;
  }

  .home-title-container {
    position: relative;
  }

  .display-data-container {
    width: 50%;
    min-height: 100%;
  }

  .history-container {
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
    background-color: lightgrey;
    top: 25px;
    position: absolute
  }

  .line.line-left {
    left: 50px;
  }

  .line.line-right {
    right: 50px;
  }

  hr {
    border-top: 1px solid lightgrey;  }
</style>