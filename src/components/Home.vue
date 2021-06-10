<template>
  <div>
    
    <Users/>
    <Products/>
  </div>
</template>

<script>

  import Users from '../components/Users.vue';
  import Products from '../components/Products.vue';


export default {
  name: "Home",
  components:{
    Users,
    Products
  },
}
</script>

<style scoped>
div {
  background-color: #d2d0d0;
      height: 500px;
}
</style>
