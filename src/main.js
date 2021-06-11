import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import VueRouter from 'vue-router';   //Import Router

import RoutingDemo from './components/RoutingDemo';
import Crud from './components/Crud.vue';
import Users from './components/Users';
import ApiData from './components/ApiData.vue';



const routes =[
  {path:'/', component:Users},
  {path:'/crud', component:Crud},
  {path:'/routingdemo', component:RoutingDemo},
  {path:'/apidata', component:ApiData},
]

const router = new VueRouter({
  routes
})


Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.filter("Ucase", function(val) {
  return val.toUpperCase();
});

Vue.filter("CurrancyConverter", function(val) {
  return val * 60;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
