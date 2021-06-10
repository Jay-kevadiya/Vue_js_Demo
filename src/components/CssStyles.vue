<template>
    <div>
        <h1 class="homeStyle">Css and Styles Binding</h1>
        <h1 v-bind:style="{color:'blue'}">Styles Binding</h1>
        <h1 v-bind:class="{display:show}">Class binding with object</h1>
        <h1 v-bind:class="[aclass]">Class binding with Array</h1>
    </div>
</template>

<script>
export default {
    name:'CssStyles',
    data(){
        return{
            show:true,
            aclass:'arrayList'
        }
    }
}
</script>

<style scoped>
    .homeStyle{
        color: red;
    }
    .display{
        background-color: red;
    }
    .arrayList{
        background-color: cyan;
    }
</style>