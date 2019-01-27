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
      userId: '',
      db: db,
      user: null,
      loadingUser: true
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        location.reload()
      })
      .catch((err) => {
        throw err;
      });
      this.user = null;
    }

  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
        this.user = true;
        this.loadingUser = false;
      }
      else {
        this.loadingUser = false;
      }
    })
  }
}

</script>

<style lang="scss">
@import '@/globalVars.scss';

@font-face {
  font-family: athelas;
  src: url(./assets/fonts/Athelas-Regular.ttf);
}
#app {
  font-family: athelas;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background-blue;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.white-widget {
  position: relative;
  background: white;
  padding: 5px 40px 15px;
  border-radius: 15px;
  box-shadow: 1px 1px 15px rgba(0,0,0,.5);
  margin-bottom: 30px;
}

.items {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.item {
  margin: 10px 30px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: .1s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  }
  img {
    width: 70px;
  }
}
.selected {
  border: 2px solid $blue;
  margin: 8px 28px;
}

button {
  font-family: athelas;
}

.blue-button {
  background: $blue;
  color: $background-blue;
  font-size: 18px;
  padding: 10px 30px;
  border: none;
  box-shadow: 5px 5px 0px $pink;
  transition-duration: .2s;
  cursor: pointer;
  &:hover:not(.inactive) {
      box-shadow: 10px 10px 0px $pink;
  }
  opacity: .5;
  &:not(.inactive) {
    opacity: 1;
  }
}
.purple-button {
  background: $purple;
  color: $background-blue;
  font-size: 18px;
  padding: 10px 30px;
  border: none;
  box-shadow: 5px 5px 0px $pink;
  transition-duration: .2s;
  cursor: pointer;
  &:hover:not(.inactive) {
      box-shadow: 10px 10px 0px $pink;
  }
  opacity: .5;
  &:not(.inactive) {
    opacity: 1;
  }
} 
.pink-button {
  background: $pink;
  color: black;
  font-size: 18px;
  padding: 10px 30px;
  border: none;
  box-shadow: 5px 5px 0px $blue;
  transition-duration: .2s;
  cursor: pointer;
  &:hover:not(.inactive) {
      box-shadow: 10px 10px 0px $blue;
  }
  opacity: .5;
  &:not(.inactive) {
    opacity: 1;
  }
} 

.auth-box {
  width: 50%;
  height: 300px;
  background: $blue;
  border: solid 7px white;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 100px;
  color: white;
  &:before {
    content: '';
    display: none;
    position: absolute;
    transform: translate(-50%);
    margin-top: 10px;
    width: 96%;
    height: 270px;
    border: solid 3px white;
  }

  input {
    margin-top: 50px;
    font-size: 18px;
    background: none;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    font-family: athelas;

  }
}

</style>
