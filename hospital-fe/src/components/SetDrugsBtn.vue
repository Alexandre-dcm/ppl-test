<script setup>
    import {Quarantine} from 'hospital-lib'
    import consts from '@/consts/consts'

    const props = defineProps({
        label: String
    })

    const setDrugs = () => {
        const patients = JSON.parse(localStorage.getItem(consts.localStorage.patientsKey));
        const patientsClone = Object.assign({}, patients); // Keeping old patients state for local storage
        const drugs = localStorage.getItem(consts.localStorage.drugsKey).split(',');
        const quarantine = new Quarantine(patients);

        quarantine.setDrugs(drugs);
        quarantine.wait40Days();

        const report = quarantine.report();

        pushToHistory(patientsClone, drugs, report);
    }

    const pushToHistory = (patients, drugs, report) => {
        const existingHistory = JSON.parse(localStorage.getItem(consts.localStorage.history));

        let history = { patients, drugs, report }

        if (existingHistory) {
            existingHistory.push(history);
            history = existingHistory;
        } else {
            history = [history];
        }

        localStorage.setItem(consts.localStorage.history, JSON.stringify(history));
    }
</script>

<template>
  <div class="button-wrapper">
    <button @click="setDrugs">{{ label }}</button>
  </div>
</template>

<style scoped>

</style>
