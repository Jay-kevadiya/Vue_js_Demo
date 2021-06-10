<template>
  <div>
    <h1>For Loop in Vue .js</h1>
      <table border="2">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
        </tr>

        <tr v-for="item in users" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "ForLoop",
  data() {
    return {
      users: [
        { id: 1, name: "jay", email: "jay@gmail.com" },
        { id: 2, name: "yagnesh", email: "y@gmail.com" },
        { id: 3, name: "jigar", email: "j@gmail.com" },
        { id: 4, name: "rutvik", email: "r@gmail.com" },
        { id: 5, name: "prince", email: "p@gmail.com" },
      ],
    };
  },
};
</script>



    