<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: radial-gradient(rgb(230, 230, 230), rgb(190, 190, 190));
    max-width: 500px;
    margin: auto;
}

</style>