<template>
  <div id="app">
        <!-- <h1>{{title}}</h1> -->

    <!-- <Home/> -->
    <!-- <ForLoop/> -->
    <!-- <Property/> -->
    <!-- <CssStyles/> -->
    <!-- <DataBind/> -->
    <!-- <Props v-bind:name="users"/> -->
    <!-- <Child v-on:changeTitle="updateTitle($event)"/> -->
    <!-- <SignUp/> -->
    <!-- <Login/> -->
    <!-- <FormValidation/> -->
    <!-- <FilterDemo/> -->
    <!-- <ApiData/> -->
    <!-- <BootstrapDemo/> -->
    <!-- <PostApi/> -->
    <Crud/>
  </div>
</template>

<script>
// import ForLoop from './components/ForLoop';
// import Home from './components/Home';
// import Property from './components/Property.vue';
// import CssStyles from './components/CssStyles.vue';
// import DataBind from './components/DataBind.vue';
// import Props from './components/Props.vue';
// import Child from './components/Child.vue';
// import SignUp from './components/SignUp.vue';
// import Login from './components/Login.vue';
// import FormValidation from './components/FormValidation.vue';
// import FilterDemo from './components/FilterDemo.vue';
// import ApiData from './components/ApiData.vue';
// import BootstrapDemo from './components/BootstrapDemo.vue';
// import PostApi from './components/PostApi.vue';
import Crud from './components/Crud.vue';

export default {
  name: 'App',
  components: {
    // Home,
    // Property
    // ForLoop,
    // CssStyles,
    // DataBind,
    // Props,
    // Child,
    // SignUxp,
    // Login,
    // FormValidation,
    // FilterDemo,
    // ApiData,
    // BootstrapDemo
    // PostApi,
    Crud
  },
  data(){
    return{
      userName:'jackey',
      users:[
        {name:'jay'},
        {name:'yagnesh'},
        {name:'jigar'},
      ],  
        title:"props tutorial",
        
    }
  },
  methods:{
    updateTitle(title){
      this.title = title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



