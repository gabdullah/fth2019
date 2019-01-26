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

@font-face {
  font-family: athelas;
  src: url(./assets/fonts/Athelas-Regular.ttf);
}
#app {
  font-family: athelas;
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
  margin-bottom: 30px;
}
</style>
