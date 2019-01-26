<template>
<div id="looks">
    <div class="white-widget">
        <h1>What are you working with?</h1>
        <p>Select the type of item you have that you'd like to augment.</p>
    </div>
    <div v-for="catagory in clothes" class="white-widget">
        <h2>{{catagory.name}}</h2>
        <img v-for="item in catagory.items" :src="'/assets/icons/' + item.icon">
        <img src="@/assets/icons/belt.png">
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