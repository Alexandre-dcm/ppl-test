<script setup>

</script>

<template>
  <div class="topbar">
    <div class="topbar-container container">
      <div class="logo-wrapper">
        <img alt="Easycure logo" class="topbar-logo" src="@/assets/images/logo.png" width="125" height="125" />
        <div class="logo-description-wrapper">
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
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.7rem;
  }
</style>
