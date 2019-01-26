<template>
<div id="dashboard">
    <div id="purple-bar">
    </div>
    <div id="top-header">
        <img src="@/assets/upcycle-logo.png" style="padding-top:15px;">
        <img src="@/assets/default_profile.png" class="profile-pic">
    </div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '@/globalVars.scss';

#purple-bar {
    background: $purple;
    height: 300px;
    position: absolute;
    width: 100%;
    z-index: -1;
}

#dashboard {
    z-index: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: auto;
    grid-template-areas: 
        "margin-left top-header margin-right "
        "main main . "
        "footer footer footer ";
}

#top-header {
    grid-area: top-header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-height: 100px;
    }
    border-bottom: solid 2px rgba(255,255,255,.4);
}

.profile-pic {
    width: 50px;
    height: 50px;
}

</style>