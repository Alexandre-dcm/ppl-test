<script setup>
const props = defineProps({
  action: Function,
  label: String,
  use: String
})

const onClick = async () => {
  props.action()
}
</script>

<template>
  <div class="button-wrapper">
    <button @click="onClick" :class="'action-btn ' + 'action-btn-' + props.use">{{ label }}</button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display&display=swap');

.button-wrapper {
  margin: 1rem;
}

button.action-btn {
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  position: relative;
}

button.action-btn-setDrugs {
  background: linear-gradient(
    90deg,
    rgb(49, 43, 167) 0%,
    rgb(58, 58, 203) 35%,
    rgb(18, 143, 226) 100%
  );
  width: 150px;
  height: 50px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Noto Sans Display', sans-serif;
}

button.action-btn-fetchData {
  background: linear-gradient(90deg, rgb(182, 227, 255) 0%, rgb(31, 180, 255) 100%);
  width: 150px;
  height: 50px;
  color: rgb(36, 36, 36);
  font-weight: bold;
  font-size: 18px;
  font-family: 'Noto Sans Display', sans-serif;
}

button.action-btn-clearHistory {
  background: linear-gradient(90deg, rgba(255, 156, 0, 1) 0%, rgba(179, 0, 0, 1) 100%);
  width: 150px;
  height: 50px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Noto Sans Display', sans-serif;
}

button.action-btn:hover {
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4);
  bottom: 2px;
  right: 2px;
  cursor: pointer;
}
</style>
