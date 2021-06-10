<template>
    <div>
        <h1 v-for="item in name" :key="item.id">{{item.name}}</h1>
    </div>
</template>

<script>
  

export default {
    name:'Props',
    props:['name']
}
</script>

<style scoped>

</style>