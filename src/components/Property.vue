<template>
  <div>
    <!-- <h1>Template in Vue js</h1> -->
    <p v-html="rowHtml"></p>
    <h3 v-once>{{ name }}</h3>
    <h3>{{ name }}</h3>
    <h3>{{ ok ? "Yes" : "No" }}</h3>

    <button  v-bind:disabled="disableBtn" v-on:click="updateText">Click Me</button>
    <!-- <Users/>
    <Products/> -->
  </div>
</template>

<script>

  // import Users from '../components/Users.vue';
  // import Products from '../components/Products.vue';


export default {
  name: "Propertys",

  data(){
    return{
      name:'Jay',
      a:10,
      b:20,
      ok:true,
      rowHtml:'<h1>Template in Vue js</h1>',
      disableBtn:false
    }
  },
  methods:{
    updateText(){
      return this.name = "Jackey", 
      this.ok =!this.ok
      
    }
  }
}
</script>

<style scoped>
div {
  /* background-color: #d2d0d0;
      height: 500px; */
}
</style>
