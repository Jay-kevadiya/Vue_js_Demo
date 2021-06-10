import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("Ucase", function(val) {
  return val.toUpperCase();
});

Vue.filter("CurrancyConverter", function(val) {
  return val * 60;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
