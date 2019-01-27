<template>
<div id="results">
    <div class="white-widget">
        <h1>Results</h1>
        <p>Results.</p>
    </div>
    <div class="white-widget" v-if="err != ''" style="text-align: center;">
    	<p>{{ err }}</p>
    </div>
</div>
</template>

<script>
import * as firebase from 'firebase';

export default {
	data() {
		return {
			displayedLooks: [],
			err: ""
		}
	},
	methods: {
		
	},
	mounted() {
		if (this.$parent.select.length == 0) { 
			this.$parent.$parent.db.collection('looks').where('tags', 'array-contains', this.$parent.selectedClothes).get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					this.displayedLooks.push(doc.data());
				})
			})
			.catch((error) => {
				this.err = error;
			})
		}
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