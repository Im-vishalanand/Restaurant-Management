<template>
    <img class="logo" src="../assets/logo.jpg" alt="restro-logo" />
    <h1>Login</h1>

    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" required />
        <input type="password" v-model="password" placeholder="Enter Password" required />
        <button v-on:click="login">Login</button>
    </div>
    <p>
        New here?
        <router-link to="/sign-up" style="text-decoration: none; color: red">Sign Up</router-link>
    </p>
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2';

export default {
    name: "LoginPage",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`https://64be88685ee688b6250c9330.mockapi.io/user?email=${this.email}&password=${this.password}`, {
            });

            if (result.status == 200 && result.data.length>0) {
                localStorage.setItem('login-info', JSON.stringify(result.data[0]))
                // console.log(result)
                Swal.fire({
                    title: 'Login Successful !',
                    text: 'Welcome: ' + result.data[0]['name'],
                    icon: 'success',
                    showConfirmButton: false, // Remove the 'OK' button
                    timer: 2000, // Set the timer for 2 seconds (adjust as needed)
                });
                this.$router.push({name : 'HomePage'})
            }
            else{
                Swal.fire({
                        icon: 'error',
                        title: 'Wrong Credentials...',
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

        if (loginData) {
            this.$router.push({ name: 'HomePage' })
        }

    },
};
</script>

<style>
p {
    margin-top: 20px;
}
</style>
