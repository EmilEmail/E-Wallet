<template>
    <div class="formwrapper">
        <section>
            <form>

                <label for="cardNr">CARD NUMBER</label>
                <span v-show="controlNum">*Too many numbers</span>
                <input 
                    name="cardNr"
                    v-bind:class="numOverride" 
                    v-on:input="numCheck" 
                    v-model="$root.$data.newCard.number" 
                    type="text" 
                    placeholder="XXXX XXXX XXXX XXXX"
                >

                <label for="cardholder">CARD HOLDER</label>
                
                <span v-show="controlName">*First name and Lastname</span>
                <input v-model="$root.$data.newCard.holder" v-on:input="allCaps" type="text" name="cardholder" placeholder="Firstname Lastname">

                

                <div class="select-wrapper">

                    <label for="month">VALID MONTH</label>
                    <label for="year">VALID YEAR</label>

                    <select v-model="$root.$data.newCard.validMonth" class="select" name="month">
                        <option v-for="(month, index) in validMonth" :key="index" :value="month">{{ month }}</option>
                    </select>

                    <select v-model="$root.$data.newCard.validYear" class="select right" name="year">
                        <option v-for="(year, index) in validYear" :key="index" :value="year">{{ year }}</option>
                    </select>
                </div>

                <label for="selectvendor">VENDOR</label>
                <select v-model="$root.$data.newCard.vendor" type="text" class="select-vendor" name="selectvendor">
                    <option value="bitcoin-bg">BITCOIN</option>
                    <option value="ninja-bank-bg">NINJA BANK</option>
                    <option value="block-chain-inc-bg">BLOCK CHAIN INC</option>
                    <option value="evil-corp-bg">EVIL CORP</option>
                </select>

            </form>
            
        </section>
    </div>
</template>

<script>
export default {

    data() {
        return {
            controlNum: false,
            controlName: false,
            numOverride: '',
            validMonth: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            validYear: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],

        }
    },

    methods: {
        pushToCards() {
            let card = this.$root.$data.newCard
            if (card.number.length === 16 && card.holder !== '' && card.validMonth !== '' && card.validYear !== '' && card.vendor !== '') {
                this.validForm = true;
            }else{
                this.validForm = false;
            }

            if (this.validForm === true){
                this.$root.$data.cards.push(card);

            }else{
                alert('Something is not correct in your card')
            }
        },

        numCheck() {
            let cardNum = this.$root.$data.newCard.number;
            
            if (cardNum.length > 16) {
                this.controlNum = true;
                this.numOverride = 'num-override';
            }else{
                this.controlNum = false;
                this.numOverride = '';
            }
        },    
    },

}
</script>

<style lang="scss" scoped>

    .formwrapper {
        display: flex;
        justify-content: center;
        width: 100%;

        form {
            display: flex;
            flex-direction: column;
            justify-self: center;

            .select {
                width: 160px;
                border-radius: 10px;
                border: 3px solid rgb(119, 119, 119);
                padding: 10px;
            }
            .right {
                justify-self: right;
            }
            .select-vendor {
                width: 100%;
                border-radius: 10px;
                border: 3px solid rgb(119, 119, 119);
                padding: 10px;
            }

            .select-wrapper {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 20px 1fr;
                margin-top: 10px;
            }

            input[type="text"] {
                outline: none;
                border: none;
                width: 300px;
                border-radius: 8px;
                border: 3px solid rgb(119, 119, 119);
                color: rgba(0, 0, 0, .8);
                font-weight: 700;

                padding: 10px;
                justify-self: center;
            }
            input[type="submit"]{
                margin-top: 10px;
                outline: none;
                padding: 10px;
                background: black;
                border-radius: 5px;
                color: white;
                font-weight: 700;
            }
            label {
                margin-top: 10px;
                text-align: left;
                align-self: end;
            }
            span {
                color: rgb(175, 0, 0);
                font-style: bold;
                font-size: 0.3rem;
            }
            .num-override {
                background-color: red;
            }
        }
    }

</style>