<template>
    <div>
        <h1>Fetch Api Data</h1>

        <div>
            <table border="1">
                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Street</td>
                    <td>City</td>
                </tr>

                <tr v-for="item in list" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.username}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.address.street}}</td>
                    <td>{{item.address.city}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios );

export default {
    name:'ApiData',
    data(){
        return{
            list:undefined,
        }
    },

    mounted(){
        Vue.axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            this.list = res.data;
            console.log('api data ==>', res.data);
        })
    }
}
</script>

<style scoped>

</style>