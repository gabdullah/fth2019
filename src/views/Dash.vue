<template>
<div id="dashboard">

    <div id="purple-bar"> <!-- Positioned absolutely -->
    </div>

    <div id="top-header">
        <router-link to="/"><img src="@/assets/upcycle-logo.png" style="padding-top:15px;"></router-link>
        <router-link to="/dashboard/profile"><img src="@/assets/default_profile.png" class="profile-pic"></router-link>
    </div>

    <div id="menu-options">
        <router-link tag="div" :to="{ name: 'looks' }">Find a Look</router-link>
        <router-link tag="div" :to="{ name: 'make' }">Make a Look</router-link>
        <router-link tag="div" :to="{ name: 'faves' }">Top Faves</router-link>
        <router-link tag="div" :to="{ name: 'profile' }">Profile</router-link>
    </div>

    <div id="content">
        <router-view></router-view>
    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            selectedClothes: {},
            tags: [],
        }
    }
};


</script>

<style lang="scss" scoped>
@import '@/globalVars.scss';

#purple-bar {
    background: $purple;
    height: 250px;
    position: absolute;
    width: 100%;
    z-index: 1;
}

#dashboard {
    width: 100%;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: auto;
    grid-template-areas: 
        "margin-left    top-header      margin-right "
        "margin-left    menu-options    margin-right"
        "margin-left    content         margin-right ";
    padding-bottom: 300px;
}

#top-header {
    z-index: 10;
    grid-area: top-header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-height: 100px;
    }
    border-bottom: solid 2px rgba(255,255,255,.4);
    .profile-pic {
        width: 50px;
        height: 50px;
    }
}

#menu-options {
    z-index: 10;
    grid-area: menu-options;
    display: flex;
    color: white;
    justify-content: space-around;
    align-items: center;
    font-size: 25px;
    height: 70px;
    div {
        opacity: .5;
        cursor: pointer;
    }
    .router-link-active {
        opacity: 1;
    }
}
#content {
    z-index: 10;
    grid-area: content;

}

</style>