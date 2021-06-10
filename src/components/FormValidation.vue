<template>
    <div>
        <p v-if="error.length">
            <b>Please correct the following error</b> 
                <ul>
                    <li v-for="e in error" :key="e.id">
                        {{e}}
                    </li>
                </ul>
        </p>

        <form @submit="Login">
            <p>Username: <input type="text" placeholder="enter username" v-model="name"></p>
            <p>Password: <input type="password" placeholder="enter password" v-model="password"></p>
            <button type="submit">Log in</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'FormValidation',
    data(){
        return {
            error:[],
            name:null,
            password:null,
        }
    },
    methods:{
        Login(e){

            this.error=[];

            if(this.name && this.password){
                console.warn("no error");
            }
           if(!this.name){
               this.error.push("User name is Requried");
           }
           if(!this.password){
               this.error.push("password is Requried");
           }

            console.warn("hello...", this.error);
            e.preventDefault();
        }
    }
}
</script>

<style scoped>

</style>