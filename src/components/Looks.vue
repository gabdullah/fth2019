<template>
<div id="looks">
    <div class="white-widget">
        <h1>What are you working with?</h1>
        <p>Select the type of item you have that you'd like to augment.</p>
        <button class="blue-button" id="find-a-look"
            :class="{
                'inactive': !itemSelected
            }">
            Find a Look!
        </button>
    </div>
    <div v-for="catagory in clothes" class="white-widget">
        <h2>{{catagory.name}}</h2>
        <div class="items">
            <div class="item" v-for="item in catagory.items"
                @click="select(item)"
                :class="{
                        'selected': $parent.selectedClothes[item.name]
                    }">
                <img :src="'/icons/' + item.icon">
                <br><br>
                {{item.name}}
            </div>
        </div>
    </div>
    <router-link tag="button" to="/dashboard/results"
        class="blue-button"
        :class="{
            'inactive': !itemSelected
        }">
        Find a Look!
    </router-link>
</div>
</template>

<script>
import Vue from 'vue';

import clothes from '@/clothes.js'

export default {
    data() {
        return {
            clothes: clothes,
            /*selectedClothes: {},*/
            itemSelected: false,
        }
    },
    methods: {
        select(item) {
            this.itemSelected = true;
            if (!this.$parent.selectedClothes[item.name]) {
                Vue.set(this.$parent.selectedClothes, item.name, true);
                this.$parent.tags.push(item.name)
            } else {
                Vue.set(this.$parent.selectedClothes, item.name, false);
                var index = this.$parent.tags.indexOf(item.name);
                this.$parent.tags.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
#find-a-look {
    position: absolute;
    right: 30px;
    top: 30px;

}

</style>