<template>
<div id="looks">
    <div class="white-widget">
        <h1>What are you working with?</h1>
        <p>Select the type of item you have that you'd like to augment.</p>
    </div>
    <div v-for="catagory in clothes" class="white-widget">
        <h2>{{catagory.name}}</h2>
        <div class="items">
            <div class="item" v-for="item in catagory.items">
                <img :src="'/icons/' + item.icon">
                <br><br>
                {{item.name}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import clothes from '@/clothes.js'

export default {
    data() {
        return {
            clothes: clothes,
        }
    },
}
</script>