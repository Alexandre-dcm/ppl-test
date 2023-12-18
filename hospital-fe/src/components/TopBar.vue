<script setup>

</script>

<template>
  <div class="topbar">
    <div class="topbar-container container">
      <div class="logo-wrapper">
        <img alt="Easycure logo" class="topbar-logo" src="@/assets/images/logo.png" width="125" height="125" />
        <div class="logo-description-wrapper">
          <h1 class="easycure-topbar">EasyCure</h1>
          <h4 class="logo-description">
            Kill virtual patients... Before killing real ones !
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topbar {
    background-color: rgb(147, 188, 255);
    max-height: 100px;
    display: flex;
    justify-content: center;
    font: 'Fira sans';
    font-style: italic;
  }

  .topbar-container {
    width: 70%;
  }

  .logo-wrapper {
    display: flex;
  }
  .topbar-logo {
    height: 80px;
    width: auto;
  }

  .logo-description-wrapper {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 0.7rem;
  }

  .easycure-topbar {
    font-weight: bold;
    font-style: italic;
  }
</style>
