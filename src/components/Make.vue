<template>
<div id="looks" v-if="pickingClothes">
    <div class="white-widget">
        <h1>What did you use for your creation?</h1>
        <p>Select all the items you used.</p>
        <button class="pink-button" id="make-a-look"
            @click="done()"
            :class="{
                'inactive': !itemSelected
            }">
            Make a Look!
        </button>
    </div>
    <div v-for="catagory in clothes" class="white-widget">
        <h2>{{catagory.name}}</h2>
        <div class="items">
            <div class="item" v-for="item in catagory.items"
                @click="select(item)"
                :class="{
                        'selected': selectedClothes[item.name]
                    }">
                <img :src="'/icons/' + item.icon">
                <br><br>
                {{item.name}}
            </div>
        </div>
    </div>
    <button class="pink-button"
        @click="done()"
        :class="{
            'inactive': !itemSelected
        }">
        Make a Look!
    </button>
</div>
<div id="looks" v-else-if="!finalSubmission">
    <div class="white-widget">
        <h1>Final Product</h1>
        <p>Tell us about your final product.</p>

        <button class="blue-button" id="make-a-look" v-if="!loading"
            @click="submit()"
            :class="{
                'inactive': !itemSelected
            }">
            Submit Project!
        </button>
        <button class="blue-button" id="make-a-look" v-else>
            Loading...
        </button>
    </div>
    <div class="white-widget">
        <h2>Title</h2>
        <input v-model="title">
        <br>
        <h2>Created By</h2>
        <input v-model="creator">
        <br>
        <h2>Instructions</h2>
        <textarea v-model="instructions"></textarea>
    </div>
    <div class="white-widget">
        <p>Upload an image:</p>
        <input type="file" ref="profileUpload" @change="onPictureUpload">

    </div>
</div>
<div id="looks" v-else>
    <div class="white-widget">
        <h1>Submitted!</h1>
        <p>Thanks! You've earned +10 Upcycle experience!</p>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import firebase from 'firebase'

import clothes from '@/clothes.js'

export default {
    data() {
        return {
            clothes: clothes,
            selectedClothes: {},
            itemSelected: false,
            pickingClothes: true, // Keeps track of whether we've selected our clothes yet
            tags: [],
            title: '',
            creator: '',
            instructions: '',
            downloadURL: '',
            finalSubmission: false,
            loading: false,
        }
    },
    mounted() {
    },
    methods: {
        select(item) {
            this.itemSelected = true;
            if (!this.selectedClothes[item.name]) {
                Vue.set(this.selectedClothes, item.name, true);
                this.tags.push(item.name)
            } else {
                Vue.set(this.selectedClothes, item.name, false);
                var index = this.tags.indexOf(item.name);
                this.tags.splice(index, 1);
            }
            console.log(this.tags)
        },
        done() {
            if (this.itemSelected) {
                this.pickingClothes = false;
            }
        },
        onPictureUpload() {
            var file = event.target.files[0];
            this.loadingProfile = true;

            var storageRef = firebase.storage().ref();
            var locationStr = this.title + '.jpg';
            console.log("Locationstr: ", locationStr);
            var ref = storageRef.child(locationStr);

            var vm = this;
            console.log(this.tags)

            // Uploading file to the database: 
            ref.put(file).then(function(snapshot) {
                console.log('Uploaded a file!', snapshot);
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                    vm.downloadURL = downloadURL;
                    // vm.$parent.$parent.db.collection('looks').add({
                    //     url: downloadURL,
                    //     title: vm.title,
                    //     creator: vm.creator,
                    //     instructions: vm.instructions,
                    //     tags: vm.tags,
                    //     likes: 0,
                    // }).catch((err) => {
                    //     console.error(err);
                    // })
                });
                
                
            }).catch((err) => {
                console.error("Error uploading your pic: ", err);
            })
        },
        submit() {
            var vm = this;
            this.loading = true;
            vm.$parent.$parent.db.collection('looks').add({
                url: vm.downloadURL,
                title: vm.title,
                instructions: vm.instructions,
                tags: vm.tags
            }).then(() => {
                vm.finalSubmission = true;
                vm.loading = false
            }).catch((err) => {
                vm.loading = false
                console.error(err);
            })
        }
    }
}
</script>

<style scoped>
#make-a-look {
    position: absolute;
    right: 30px;
    top: 30px;

}

input {
    background: none;
    border: none;
    border-bottom: solid 2px black;
    font-size: 18px;
}
textarea {
    width: 300px;
    
}
</style>