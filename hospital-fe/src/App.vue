<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'

import {Quarantine} from 'hospital-lib'

</script>

<template>
  <header>
    <div class="wrapper">
      <TopBar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
