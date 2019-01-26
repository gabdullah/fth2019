<template>
  <div class="home">
    <div class="logo-div">
      <img class="upcycle-logo" src="../assets/upcycle-logo.png" alt="Upcycle logos">
    </div>

    <div example-div>
      <img class="upcycle-example" src="../assets/altered-clothes-example.png" alt="Altered clothes example">
    </div>

    <div class="text-talk">
      <h1>Making Fashion Affordable</h1>
      <h1>Networking to Empower Artists</h1>
    </div>

    <div class="button-div">
      <button>Find a Look</button>
      <button>Make a Look</button>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: '',
  components: {

  }
}
</script>

<style lang='scss' scoped>
@import '@/globalVars.scss';

button {
  margin: 50px; 
  background: white;
  border: none;
  width: 30%;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
}

button:hover {

}

img {

}

h1 {
  color: #827a7a;
  font-size: 14pt
}

.home {
  background-color: $purple;
  height: 100%;
}

.logo-div {
  align-content: middle;
  position: absolute; 
  padding: 120px;
}

.example-div {
  position: absolute;
  align-content: right;
}

.upcycle-logo {
  align-content: right;
}

.upcycle-example {  
  width: 22%;
  box-shadow: 12px 12px $pink;
}

.button-div {
  width: 35%;
  padding-left: 200px;
}
</style>