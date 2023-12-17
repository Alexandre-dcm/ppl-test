<script setup>

import FetchDataBtn from '../components/FetchDataBtn.vue'
import SetDrugsBtn from '../components/SetDrugsBtn.vue'

</script>

<template>
  <main>
    <Suspense>
      <FetchDataBtn :label="'Fetch data'"></FetchDataBtn>
    </Suspense>
    <SetDrugsBtn :label="'Set Drugs !'"></SetDrugsBtn>
  </main>
</template>
