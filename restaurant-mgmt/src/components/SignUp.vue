<template>
    <img class="logo" src="../assets/logo.jpg" alt="restro-logo">
    <h1>Sign Up</h1>

    <div class="signup">
        <input type="text" v-model="name" placeholder="Enter Name" required>
        <input type="text" v-model="email" placeholder="Enter Email" required>
        <input type="password" v-model="password" placeholder="Enter Password" required>
        <button v-on:click="signUp">Sign Up</button>
    </div>
    <p>Already a User?
        <router-link to="/login" style="text-decoration: none; color: red;"> Login</router-link>
    </p>
</template>

<script>

import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("https://64be88685ee688b6250c9330.mockapi.io/user", {
                name: this.name,
                email: this.email,
                password: this.password,

            });

            if (result.status == 201 && this.name.length>3 && this.email.length>3 && this.password.length>3) {
                localStorage.setItem('signup-info', JSON.stringify(result.data))
                Swal.fire({
                    title: 'Sign Up Successful !',
                    text: 'Welcome: ' + this.name,
                    icon: 'success',
                    // showConfirmButton: false, // Remove the 'OK' button
                    timer: 2000, // Set the timer for 2 seconds (adjust as needed)
                });
                this.$router.push({ name: "login" });
            }
            else{
                Swal.fire({
                        icon: 'error',
                        title: 'Something Went Wrong...',
                        text: "Try Again!",
                        // showConfirmButton: false,
                        timer: 2000,
                        // footer: '<a href="">go to home page</a>'
                    })
            }

        }
    },
    mounted() {
        let loginData = localStorage.getItem('login-info');

        if(loginData){
            this.$router.push({ name: 'HomePage' })
        }

    },
}
</script>

<style>

</style>
