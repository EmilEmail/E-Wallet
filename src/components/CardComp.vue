<template>
    <section>
        <section class="card card-default-bg" v-bind:class="cardData.vendor">

            <button class="delete-btn" v-show="cardOn" v-on:click="$emit('isClicked')"></button>

            <div class="chip-wrapper"></div>

            <p class="card-number">{{ newCardNr }}</p>

            <p class="card-cardholder-p">CARDHOLDER NAME</p>

            <p class="card-name">{{ capitalChars }}</p>
            
            <p class="card-validthru-p">VALID THRU</p>

            <p class="card-valid-day">{{ cardData.validMonth }} / {{ cardData.validYear }}</p>
        </section>

    </section>
</template>

<script>
export default {

    computed: {
        newCardNr() {
            const numberArr = this.cardData.number.split('');

            for (let i = 4; i < numberArr.length; i = (i + 5)) {
                numberArr.splice(i, 0, ' ');
            }
            return numberArr.join('');
        },
        
        capitalChars() {
            let holder = this.cardData.holder;
            return holder.toUpperCase()
        }
    },

    props: {
        cardData: Object,
        cardOn: Boolean
    },
    
}
</script>

<style lang="scss" scoped>

$primary-color: linear-gradient(to right, rgb(138, 138, 138), rgb(165, 165, 165));

    .card {
        width: 320px;
        height: 200px;

        margin: auto;
        border-radius: 10px;
        box-shadow: -1px 0 5px black;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);

        text-align: left;

        .chip-wrapper {
            grid-column: 1;
            grid-row: 1/4;
            background-image: url('../assets/chip-light.svg');
            background-size: 40px;
            background-position: center;
            background-repeat: no-repeat;
        }
        .logo-wrapper {
            grid-column: 4;
            grid-row: 1/3;
            background-image: url('../assets/vendor-bitcoin.svg');
            background-size: 20px;
            background-position: 30px 30px;
            background-repeat: no-repeat;
        }
        .card-number {
            grid-column: 1/6;
            grid-row: 3/5;

            align-self: center;
            margin-left: 17px;
            font-size: 1.4rem;
            text-shadow: -1px -1px 2px rgb(43, 43, 43);
            letter-spacing: 2px;
        }
        .card-cardholder-p {
            grid-column: 1/3;
            grid-row: 4;

            align-self: flex-end;
            margin-left: 20px;
            font-size: 0.5rem; 
        }
        .card-name {
            grid-column: 1/3;
            grid-row: 5;

            margin-left: 20px;
        }
        .card-validthru-p {
            grid-column: 4;
            grid-row: 4;

            align-self: flex-end;
            text-align: right;
            margin-right: 20px;
            font-size: 0.5rem; 
        }
        .card-valid-day {
            grid-column: 4;
            grid-row: 5;

            text-align: right;
            margin-right: 20px;

        }
    }

    .delete-btn {
        grid-column: 4;
        justify-self: right;
        width: 30px;
        height: 30px;
        outline: none;
        border: none;
        background-color: transparent;
        background-image: url('../assets/remove-circle-o.svg');
        background-size: cover;
    }
    .delete-btn:hover {
        background-image: url('../assets/remove_circle.svg');
    }

    ////////////////////////////////
            //CARD BACKGROUND
    ////////////////////////////////

    .card-default-bg {
        background-color: grey;
    }

    .bitcoin-bg {
        background-color: rgb(255, 176, 73);
        background-image: url('../assets/vendor-bitcoin.svg');
        background-size: 20px;
        background-position: 270px 32px;
        background-repeat: no-repeat;
        color: rgb(26, 26, 26);
    }
    .ninja-bank-bg {
        background-color: rgb(43, 43, 43);
        background-image: url('../assets/vendor-ninja.svg');
        background-size: 30px;
        background-position: 265px 29px;
        background-repeat: no-repeat;
        color: rgb(221, 221, 221);
    }
    .block-chain-inc-bg {
        background-color: rgb(137, 73, 255);
        background-image: url('../assets/vendor-blockchain.svg');
        background-size: 30px;
        background-position: 265px 29px;
        background-repeat: no-repeat;
        color: rgb(26, 26, 26);
    }
    .evil-corp-bg {
        background-color: rgb(255, 73, 73);
        background-image: url('../assets/vendor-evil.svg');
        background-size: 30px;
        background-position: 265px 29px;
        background-repeat: no-repeat;
        color: rgb(26, 26, 26);
    }

</style>