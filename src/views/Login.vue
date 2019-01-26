<template>
  <div class="home">
    <h1>Login</h1>
  </div>
</template>

<script>
import * as firebase from 'firebase';

export default {
  name: 'login',
  data() {
  	return {
  		email: "",
  		password: "",
  		err: ""
  	}
  },
  components: {

  },
  method: {
  	signIn() {
  		firebase.auth().signInWithEmailAndPassword(this.email, this.password)
  		.then((user) => {
  			console.log(user);
  			this.$router.push('/dashboard');
  		})
  		.catch((error) => {
  			this.err = error.message;
  		});
  	}
  }
}