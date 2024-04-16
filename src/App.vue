<template>
  <router-view />
</template>

<script setup lang="ts">
</script>

<style>
@media screen and (min-device-width: 600px) {
  html {
    font-size: 64px !important;
    background-color: black;
  }

  body {
    width: 100vw;
    max-width: 550px;
    height: 100vh;
    max-height: 100vh;
    margin: 0 auto !important;
  }

  .goHome {
    right: 15% !important;
  }

  .bottomBox {
    width: 100%;
  }
}

/* @media screen and (max-device-width: 600px) {
            .bottomBox {
                width: 100%;
            }
        } */
</style>
