<template>
    <div>
        <input type="text" placeholder="enter username" name="username" v-model="loginForm.username"><br> <br>
        <input type="password" placeholder="enter password"  name="password" v-model="loginForm.password"><br> <br>
        <button v-on:click="logindata">Login</button>
    </div>
</template>

<script>
export default {
    name:'Login',
     data(){
            return{
                loginForm:{
                    username:null,
                    password:null
                }
            }
        },
    methods:{
        logindata(){
           console.warn(this.loginForm)
        },
       
    }
}
</script>

<style scoped>

</style>