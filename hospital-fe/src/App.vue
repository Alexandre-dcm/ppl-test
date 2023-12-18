<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'

import {Quarantine} from 'hospital-lib'

</script>

<template>
    <header>
        <TopBar />
    </header>
  <div id="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
  #app-container {
    min-width: 60%;
    padding: 2rem;
    height: 100vh;
    background-color: white;
  }

  header {
    width: 100%;
  }
</style>
