<template>
  <div>
    <h1>Submit data using Api</h1>
    <br /><br />

    <form @submit="submitData" method="POST">
      <input type="text" name="title" v-model="post.title" placeholder="Title" /><br /><br />
      <input type="text" name="author" v-model="post.author" placeholder="Author" /><br /><br />
      <button type="submit">POST</button>
    </form>
  </div>
</template>

<script>

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

export default {
  name: "PostApi",
  data() {
    return {
      post: {
        title: null,
        author: null,
      },
    };
  },
  methods: {
    submitData(e) {

        this.axios.post('http://localhost:3000/posts',this.post).then((res) => {
            console.warn("res-->",res.data);
        })
        console.warn(this.post);
        e.preventDefault();
    },
  },
};
</script>

<style scoped>
</style>