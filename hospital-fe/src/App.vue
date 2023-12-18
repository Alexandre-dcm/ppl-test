<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'

import {Quarantine} from 'hospital-lib'

console.log(`
  _  _ _                       ___                   _           _         _      _ 
 | || (_)_ _ ___   _ __  ___  | _ \\_ _ ___ _ __ _  _| |___ ___  | |   __ _| |__  | |
 | __ | | '_/ -_) | '  \\/ -_) |  _/ '_/ _ \\ '_ \\ || | (_-</ -_) | |__/ _\` | '_ \\ |_|
 |_||_|_|_| \\___| |_|_|_\\___| |_| |_| \\___/ .__/\\__,_|_/__\\___| |____\\__,_|_.__/ (_)
                                          |_|                                       
`);

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

  @media only screen and (max-width: 2000px) {
    #app-container {
      min-width: 75%;
    }
  }

  @media only screen and (max-width: 1600px) {
    #app-container {
      min-width: 90%;
    }
  }
</style>
