<template>
<div id="results">
    <div class="white-widget">
        <h1>Some inspiration for you:</h1>
    </div>
    <div class="white-widget" v-if="err != ''" style="text-align: center;">
    	<p>{{ err }}</p>
    </div>
	<div class="white-widget">
		<div class="look" v-for="look in displayedLooks">
			<img :src="look.url">
		</div>
	</div>
</div>
</template>

<script>
import * as firebase from 'firebase';

export default {
	name: 'results',
	data() {
		return {
			displayedLooks: [],
			err: ""
		}
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
		max-width: 100px;
	}
	width: 100px;
}
</style>