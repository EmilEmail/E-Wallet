<template>
    <main class="home-wrapper">
        <TopComp v-bind:headerText="HeaderText" />

        <div>
            <CardComp class="active-card" 
                v-bind:cardData="this.$root.$data.activeCard"
                v-bind:cardOn="cardOn" 
                v-on:isClicked="deleteCard()"
            />
        </div>

        <CardStack v-on:cardOnTrue="setToTrue" />

        <router-link to="/addcard">
            <button class="add-card-btn">ADD NEW CARD</button>
        </router-link>
    </main>
</template>

<script>

import TopComp from '../components/TopComp.vue'
import CardComp from '../components/CardComp.vue'
import CardStack from '../components/CardStack.vue'

export default {
    computed: {
        activeCard() {
            return this.$root.$data.activeCard
        },
        Cards() {
            return this.$root.$data.cards
        }
    },

    methods: {

        setToTrue() {
            this.cardOn = true;
        },
        deleteCard() {
            let id = this.$root.$data.activeCard.number
            let cards = this.$root.$data.cards

            if (id === ''){
                alert('You must choose a card as Active to delete...')
            } else {

                for (let i = 0; i < cards.length; i++) {
                    const num = cards[i].number;
                    if (id === num) {
                        let answer = window.confirm(`Are you sure you want to delete ${cards[i].holder}'s card: ${id}`);
                        if (answer) {
                            console.log(answer)
                            cards.splice(i, 1)
                            this.$root.$data.activeCard.number = '';
                            this.$root.$data.activeCard.vendor = '';
                            this.$root.$data.activeCard.holder = '';
                            this.$root.$data.activeCard.validMonth = '';
                            this.$root.$data.activeCard.validYear = '';

                            this.cardOn = false;
                        }
                    }
                }
            }


        }
    },

    data() {
        return {
            HeaderText: {
                Header: 'ⓔ-WALLET',
                subHeader: 'ACTIVE CARD'
            },
            cardOn: false
        }
    },
    
    components: {
        TopComp,
        CardComp,
        CardStack
    }

}
</script>

<style lang="scss" scoped>
    .home-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 400px;
        margin: auto;
    }
    .active-card {
        margin-bottom: 80px;
    }
    .add-card-btn {
        outline: none;
        background: rgb(15, 15, 15);
        border: 3px solid rgb(44, 44, 44);
        border-radius: 10px;
        padding: 10px;
        width: 320px;
        margin: 30px auto 80px auto;
        color: rgba(255, 255, 255, 0.76);
        font-weight: 700;
    }

</style>