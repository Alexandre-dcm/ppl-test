<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import FetchBtn from './components/FetchBtn.vue'

import {Quarantine} from 'hospital-lib'

</script>

<template>
  <header>
    <div class="wrapper">
      <TopBar />
    </div>

    <Suspense>
      <FetchBtn :label="'Fetch patients'" :path="'/patients'"></FetchBtn>
    </Suspense>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
