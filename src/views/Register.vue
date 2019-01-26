<template>
  <div class="home">
    <h1>Register</h1>
  </div>
</template>

<script>
import * as firebase from 'firebase';

export default {
  name: 'register',
  data() {
  	return {
  		email: "",
  		password: "",
  		err: ""
  	}
  },
  components: {

  },
  methods: {
  	signIn() {
  		this.err = '';
  		firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  		.then((doc) => {
  			console.log(doc.user);
  			this.$parnet.db.collection('users').doc(doc.user.uid)
  			.set({
  				id: doc.user.uid,
  				email: doc.user.email
  			})
  			this.$router.push('/dashboard');
  		})
  		.catch((error) => {
  			this.err = error.message;
  		})
  	}
  }
}
</script>