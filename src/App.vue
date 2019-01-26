<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import config from '@/config/config.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Vue from 'vue';

firebase.initializeApp(config);
var db = firebase.firestore();
const settings = {  };
db.settings(settings);

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
