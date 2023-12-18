<script setup>
import { Quarantine } from 'hospital-lib'
import consts from '@/consts/consts'
import ActionBtn from './ActionBtn.vue'

const props = defineProps({
  label: String,
  injectData: Function
})

const setDrugs = () => {
  const patients = JSON.parse(localStorage.getItem(consts.localStorage.patientsKey))
  const patientsClone = Object.assign({}, patients) // Keeping old patients state for local storage
  const drugs = localStorage.getItem(consts.localStorage.drugsKey).split(',')
  const quarantine = new Quarantine(patients)

  quarantine.setDrugs(drugs)
  quarantine.wait40Days()

  const report = quarantine.report()

  pushToHistory(patientsClone, drugs, report)
}

const pushToHistory = (patients, drugs, report) => {
  let existingHistory = JSON.parse(localStorage.getItem(consts.localStorage.history))
  let history = { patients, drugs, report }

  if (existingHistory) {
    if (existingHistory.length === 10) {
      // Only keeping 10 last
      existingHistory = existingHistory.slice(1)
    }
    existingHistory.push(history)
    history = existingHistory
  } else {
    history = [history]
  }

  localStorage.setItem(consts.localStorage.history, JSON.stringify(history))
  props.injectData(JSON.stringify(history))
}
</script>

<template>
  <ActionBtn :action="setDrugs" :label="label" :use="'setDrugs'"></ActionBtn>
</template>

<style scoped></style>
