<template>
    <section class="card-stack">
        <ul>
            <li class="stack-card" v-for="(card, index) in cards" :key="index" v-on:click="setActive(card); $emit('cardOnTrue')">
                    <CardComp v-bind:cardData="card" />
            </li>
        </ul>
    </section>
</template>

<script>
import CardComp from '../components/CardComp.vue'

export default {

    computed: {
        cards() {
            return this.$root.$data.cards
        }
    },
    methods: {
        setActive(card) {
            this.$root.$data.activeCard.holder = card.holder
            this.$root.$data.activeCard.vendor = card.vendor
            this.$root.$data.activeCard.number = card.number
            this.$root.$data.activeCard.validMonth = card.validMonth
            this.$root.$data.activeCard.validYear = card.validYear
        },
    },

    components: {
        CardComp
    }

}
</script>

<style lang="scss" scoped>

.card-stack {
    
    margin-top: 110px;

    ul{
        list-style: none;
        display: grid;
    }
    li {
        margin-top: -150px;
    }
}

.stack-card {
    z-index: 1;
}


</style>