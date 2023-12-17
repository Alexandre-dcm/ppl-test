<script setup>
import ApiService from '@/services/apiService.js'
// import {formatPatientsInput} from 'hospital-lib'

    const props = defineProps({
        label: String,
        path: String
    })

    const fetchApi = async () => {
        const call = await ApiService.fetchData(props.path);
        // const result = formatPatientsInput(call);
        // console.log(result);
    }
</script>

<template>
  <div class="button-wrapper">
    <button @click="fetchApi">{{ label }}</button>
  </div>
</template>

<style scoped>

</style>
