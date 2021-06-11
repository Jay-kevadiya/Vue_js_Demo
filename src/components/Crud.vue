<template>
  <div>
    <h1>Crud Operations in Vue js</h1>

    <form @submit="addUser" method="POST">
      <input type="text" name="name" v-model="postdata.name" /><br /><br />
      <input type="text" name="email" v-model="postdata.email" /><br /><br />
      <input type="text" name="address" v-model="postdata.Address" /><br /><br />
      <button type="submit">POST</button>
    </form>

    <table border="1">
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Address</td>
        <td>Action</td>
      </tr>
      <tr v-for="item in users" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.Address }}</td>
        <td><button v-on:click="deleteUser(item.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

export default {
  name: "Crud",
  data() {
    return {
      users: null,
      postdata: {
        name: null,
        email: null,
        Address:null,
      },
    };
  },
  methods: {

    //   Add users to Api
    addUser(e) {

      this.axios
        .post("http://localhost:3000/users/", this.postdata)
        .then((res) => {
          console.warn("res", res.data);
        });
      console.warn(this.postdata);
      e.preventDefault();
      this.getUsers();
    },

//   Display  users from  Api

    getUsers() {
      this.axios.get("http://localhost:3000/users").then((res) => {
        console.warn("res", res.data);
        this.users = res.data;
      });
    },

//   Delete users from Api

    deleteUser(id) {
      this.axios.delete("http://localhost:3000/users/" + id).then((res) => {
        console.warn("res", res.data);
        this.getUsers();
      });
    },
  },

  mounted(){
      this.getUsers();
  }
};
</script>

<style scoped>
</style>