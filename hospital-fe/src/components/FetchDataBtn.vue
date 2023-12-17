<script setup>
    import ApiService from '@/services/apiService.js'
    import {formatPatientsInput} from 'hospital-lib'
    import consts from '@/consts/consts'

    const props = defineProps({
        label: String
    })

    let patientsData = [];
    let drugsData = [];

    const getData = async () => {
        patientsData = await callApi('/patients');
        drugsData = await callApi('/drugs');

        patientsData = formatPatientsInput(patientsData.split(','));
        drugsData = drugsData.split(',');
        
        localStorage.setItem(consts.localStorage.patientsKey, JSON.stringify(patientsData));
        localStorage.setItem(consts.localStorage.drugsKey, drugsData.toString());
    }

    const callApi = async (path) => {
        return await ApiService.fetchData(path);
    }
</script>

<template>
  <div class="button-wrapper">
    <button @click="getData">{{ label }}</button>
  </div>
</template>

<style scoped>

</style>
