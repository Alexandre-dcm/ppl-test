<script setup>
import ApiService from '@/services/apiService.js'
import { formatPatientsInput } from 'hospital-lib'
import consts from '@/consts/consts'
import ActionBtn from './ActionBtn.vue'

const props = defineProps({
  label: String,
  injectData: Function
})

let patientsData = []
let drugsData = []

const getData = async () => {
  patientsData = await callApi('/patients')
  drugsData = await callApi('/drugs')

  patientsData = formatPatientsInput(patientsData.split(','))
  drugsData = drugsData.split(',')

  localStorage.setItem(consts.localStorage.patientsKey, JSON.stringify(patientsData))
  localStorage.setItem(consts.localStorage.drugsKey, drugsData.toString())

  props.injectData({
    patientsData,
    drugsData
  })
}

const callApi = async (path) => {
  return await ApiService.fetchData(path)
}
</script>

<template>
  <div class="button-wrapper">
    <ActionBtn :action="getData" :label="label" :use="'fetchData'"></ActionBtn>
  </div>
</template>

<style scoped></style>
