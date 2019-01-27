<template>
  <div id="login">
    <img src="@/assets/login.png">
		<div class="auth-box">
			Email: <input type="text" v-model="email"><br>
			Pass: <input type="password" v-model="password"><br><br><br>

			<button class="purple-button" @click="signIn()">Let's go!</button>
		</div>
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
  methods: {
  	signIn() {
  		firebase.auth().signInWithEmailAndPassword(this.email, this.password)
  		.then((user) => {
  			console.log(user);
  			this.$router.push('/dashboard');
  		})
  		.catch((error) => {
  			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
				.then((doc) => {
					console.log(doc.user);
					this.$parent.db.collection('users').doc(doc.user.uid)
					.set({
						id: doc.user.uid,
						email: doc.user.email
					})
					this.$router.push('/dashboard');
				})
				.catch((error) => {
					this.err = error.message;
				})
  		});
  	}
  }
}
</script>

<style scoped lang="scss">
@import '@/globalVars.scss';
#login {
	background: $purple;
	position: absolute;
	width: 100%;
	min-height: 100%;

	text-align: center;
	img {
		margin-top: 200px;
		margin-left: -80px;
	}
}
</style>