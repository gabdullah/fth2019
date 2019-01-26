<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
}

.white-widget {
  background: white;
  padding: 5px 40px 15px;
  border-radius: 15px;
  box-shadow: 1px 1px 15px rgba(0,0,0,.5);
}
</style>
