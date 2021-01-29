import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data: function() {
    return {
      newCard: {
          holder: "",
          vendor: "",
          number: "",
          validMonth: "",
          validYear: ""
      },
      activeCard: {
          holder: "",
          vendor: "",
          number: "",
          validMonth: "",
          validYear: ""
      },

      cards: [
        {
          holder: "Emil Edberg",
          vendor: "bitcoin-bg",
          number: "1234123412341234",
          validMonth: "4",
          validYear: "23"
        },
        {
          holder: "Lime Berged",
          vendor: "ninja-bank-bg",
          number: "4321432143214321",
          validMonth: "4",
          validYear: "23"
        },
        {
          holder: "Edberg Emil",
          vendor: "evil-corp-bg",
          number: "1111222233334444",
          validMonth: "4",
          validYear: "23"
        },
      ]
    }
  },
  router,
  render: h => h(App)
}).$mount("#app");
