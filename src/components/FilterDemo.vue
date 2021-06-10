<template>
  <div>
    <h1>Filter in Vue js</h1>
    <h2>{{ name | Ucase }}</h2>
    <h3>{{ amount | CurrancyConverter }}</h3>
  </div>
</template>

<script>
export default {
  name: "FilterDemo",
  data() {
    return {
      name: "jay kevadiya",
      amount: 100,
    };
  },
};
</script>

<style scoped>
</style>