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
            Kill virtual patients.. Instead of killing real ones !
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap');

  .topbar {
    background-color: rgb(147, 188, 255);
    max-height: 100px;
    display: flex;
    justify-content: center;
  }

  .topbar-container {
    width: 70%;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
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
    font-size: 38px;
    font-weight: bold;
    font-family: 'Kalam', cursive;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  .logo-description {
    font-style: italic;
    font-family: 'Oxygen', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: rgb(26, 81, 184);
  }
</style>
