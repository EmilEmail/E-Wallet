<template>
    <header>
        <h1>{{ headerText.Header }}</h1>

        <p> {{headerText.subHeader}} </p>
    </header>
</template>

<script>
export default {
    props: {
        headerText: Object
    }
    

}
</script>

<style lang="scss" scoped>

    h1 {
        color: rgba(0, 0, 0, 0.514);
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.384);
        margin: 3.8rem auto;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 2.5rem;
    }
    p {
        font-size: 0.7rem;
        font-weight: 800;
        color: rgba(0, 0, 0, .5);
        margin-bottom: 10px;
    }

</style>