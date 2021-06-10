<template>
    <div>
        <input type="text" placeholder="enter your name" v-model="signup.username"><br><br>
        <input type="password" placeholder="enter your pass" v-model="signup.password"><br><br>
        
        <input type="checkbox" value="cricket" id="cricket"  v-model="signup.hobbies">
        <label for="cricket">Criket</label>

        <input type="checkbox" value="football" id="football"  v-model="signup.hobbies">
        <label for="football">Football</label><br><br>

        <input type="radio" value="male" id="male"  v-model="signup.gender">
        <label for="male">Male</label>

         <input type="radio" value="female" id="female"  v-model="signup.gender">
        <label for="female">Female</label> <br> <br>

        <button v-on:click="signupUser">Sign Up</button>

        
    </div>
</template>

<script>
export default {
    name:'SignUp',
    data(){
        return{
            signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        signupUser(){
            console.warn(this.signup);
        }
    }
}
</script>

<style scoped>

</style>