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
                        'selected': selectedClothes[item.name]
                    }">
                <img :src="'/icons/' + item.icon">
                <br><br>
                {{item.name}}
            </div>
        </div>
    </div>
    <button class="blue-button"
        :class="{
            'inactive': !itemSelected
        }">
        Find a Look!
    </button>
</div>
</template>

<script>
import Vue from 'vue';

import clothes from '@/clothes.js'

export default {
    data() {
        return {
            clothes: clothes,
            selectedClothes: {},
            itemSelected: false,
        }
    },
    methods: {
        select(item) {
            this.itemSelected = true;
            if (!this.selectedClothes[item.name]) {
                Vue.set(this.selectedClothes, item.name, true);
            } else {
                Vue.set(this.selectedClothes, item.name, false);
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