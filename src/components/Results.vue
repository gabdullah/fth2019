<template>
<div id="results">
    <div class="white-widget">
        <h1>Some inspiration for you:</h1>
    </div>
    <div class="white-widget" v-if="err != ''" style="text-align: center;">
    	<p>{{ err }}</p>
    </div>
	<div class="white-widget" v-for="look in displayedLooks">
		<br>
		<h1>{{look.title}}</h1>
		<div class="look" >
			<img :src="look.url">
			<p>{{look.instructions}}</p>
		</div>
		
		<vue-star animate="animated bounceIn" color="#F05654" style="position: absolute;right: 0px;cursor:pointer;">
			<i slot="icon" class="fa fa-heart"></i>
		</vue-star>
		<br>
		<br>
		<br>
	</div>

</div>
</template>

<script>
import * as firebase from 'firebase';
import VueStar from 'vue-star'


export default {
	name: 'results',
	data() {
		return {
			displayedLooks: [],
			err: ""
		}
	},
	components: {
		VueStar
	},
	methods: {
		
	},
	mounted() {
		this.$parent.$parent.db.collection('looks').get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				this.displayedLooks.push(doc.data());
			})
		})
		.catch((error) => {
			console.error("There was an error! Check it out: ", error);
			this.err = error;
		})

		/*this.displayedLooks.forEach((look) => {
			var safe = true;
			look.tags.forEach((tag) => {
				//for (var i = 0; i < this.tags.length; i++)
				this.tags.forEach((givenTag) => {
					if (tag == givenTag) {
						break;
					}
					else if (this.tags.length )
				})
			})
		})*/
		
		//Uncomment when implement name search
		/*else {
			this.displayedLooks = this.$parent.$parent.db.collection('looks').where('creator', '==', this.$parent.name).get()
			.then((querySnapshot) => {
				if (querySnapshot.empty)
					this.err = "No username matched your search."
				else
					querySnapshot.forEach((doc) => {
						this.displayedLooks.push(doc.data());
					})
			})
		}*/
	}
}

</script>

<style scoped lang="scss">
.look {
	img {
		width: 200px;
		height: auto;
		box-shadow: 0px 0px 10px rgba(0,0,0,.5);
		margin-right: 100px;
		align-self: center;
	}
	display: flex;

}
</style>