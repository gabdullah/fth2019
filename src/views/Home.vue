<template>
  <div class="home">
    <div class="logo-div">
      <img class="upcycle-logo" src="../assets/upcycle-logo.png" alt="Upcycle logos">
    </div>

    <div example-div>
      <img class="upcycle-example" src="../assets/altered-clothes-example.png" alt="Altered clothes example">
    </div>

    <div class="text-div">
      <h1>Affordable fashion through recycling.</h1>
      <h1>Empowering artists through networking.</h1>
    </div>

    <div class="button-div">
      <router-link to="/dashboard/looks"><button>Find a Look</button></router-link>
      <router-link to="/login"><button>Make a Look</button></router-link>
    </div>
  </div>
</template>

<script>

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
  box-shadow: 7px 7px 1px $blue;
  cursor: pointer;
  font-family: athelas;
  font-size: 18px;
  font-weight: bold;
  color: $purple;
}

button:hover {
  box-shadow: 10px 10px 0px $blue;
}

h1 {
  color: #827a7a;
  font-size: 24pt
}

.home {
  background-color: $purple;
  height: 100%;
  margin-top: 0px;
  position: absolute;
  width: 100%;
}

.logo-div {
  max-width: 50%;
  padding-top: 150px;
  padding-left: 150px;
  float: left;
}

.example-div {
  float: right;
  
}

.upcycle-example {  
  float: right;
  width: 22%;
  box-shadow: 20px 20px 1px $pink;
  margin-right: 200px;
  margin-top: 100px;
}

.text-div {
  width: 40%;
  text-align: right;
}

.button-div {
  width: 35%;
  padding-left: 200px;
}
</style>