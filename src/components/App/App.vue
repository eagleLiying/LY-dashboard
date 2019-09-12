<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<style lang="scss">
#app,
.view {
  display: flex;
  min-height: 100vh;
  width: 100%;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

