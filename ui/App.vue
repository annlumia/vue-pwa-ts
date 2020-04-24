<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'GamanUI',
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  width: 100%;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
}
</style>
