<template>
    <section class="addcard-wrapper">

        <TopComp v-bind:headerText="HeaderText" />

        <CardComp v-bind:cardData="card" />

        <CardForm />

        <router-link to="/" v-if="validForm">
            <button class="add-btn" v-on:click="pushToCards()">ADD NEW CARD</button>
        </router-link>
        <router-link to="/addcard" v-else>
            <button class="add-btn" v-on:click="pushToCards()">ADD NEW CARD</button>
        </router-link>
        <router-link to="/">
            <button class="add-btn cancel-btn" v-on:click="newCardCancel()">CANCEL</button>
        </router-link>

    </section>
</template>

<script>

import TopComp from '../components/TopComp.vue'
import CardComp from '../components/CardComp.vue'
import CardForm from '../components/CardForm.vue'

export default {
    data() {
        return {
            HeaderText: {
                Header: 'ADD A NEW BANK CARD',
                subHeader: 'NEW CARD'
            },
            validForm: false
        }
    },

    computed: {
        card() {
            return this.$root.$data.newCard
        }
    },

    methods: {
        newCardCancel() {
            this.$root.$data.newCard.holder = '';
            this.$root.$data.newCard.vendor = '';
            this.$root.$data.newCard.number = '';
            this.$root.$data.newCard.validMonth = '';
            this.$root.$data.newCard.validYear = '';
        },

        pushToCards() {
            let card = this.$root.$data.newCard
            if (card.number.length === 16 && card.holder !== '' && card.validMonth !== '' && card.validYear !== '' && card.vendor !== '') {
                this.validForm = true;
            }else{
                this.validForm = false;
            }

            if (this.validForm === true){
                this.$root.$data.cards.push(card);

                let newCard = {
                    holder: "",
                    vendor: "",
                    number: "",
                    validMonth: "",
                    validYear: ""
                }
                this.$root.$data.newCard = newCard;

            }else{
                alert('Something is not correct in your card');
            }
        }
            
    },

    components: {
        TopComp,
        CardComp,
        CardForm
    }
}
</script>

<style lang="scss" scoped>

    .addcard-wrapper {
        margin: auto;
        padding: 20px 0 20px 0;
        max-width: 400px;
    }

    .add-btn {
        outline: none;
        margin: 20px 0 5px 0;
        width: 326px;
        border-radius: 10px;
        border: 3px solid rgb(119, 119, 119);
        background: rgb(24, 24, 24);
        color: rgb(228, 228, 228);
        font-weight: 700;
        padding: 10px;
    }

    .cancel-btn {
        margin: 0px 0 60px 0px;
        background: red;
    }
    

</style>