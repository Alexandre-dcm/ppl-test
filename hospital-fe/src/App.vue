<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import {Quarantine} from 'hospital-lib'


console.log(Quarantine);

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
    <TopBar />
  </header>

  <RouterView />
</template>

<style scoped>
</style>
