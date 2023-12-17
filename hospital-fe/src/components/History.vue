<script setup>
    import consts from '@/consts/consts'

    const existingHistory = JSON.parse(localStorage.getItem(consts.localStorage.history));
    console.log(existingHistory);
</script>

<template>
  <div class="history-wrapper">
  </div>
</template>

<style scoped>

</style>
