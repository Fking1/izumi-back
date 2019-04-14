<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style lang="scss">
@import "./styles/base";
html {
    height: 100%;
}
body {
    height: 100%;
    overflow: hidden;
}
#app {
    height: 100%;
}

//  可以定义一些全局样式
</style>
