<template>
    <HeaderSection></HeaderSection>
    <h1> Hello {{ name }}, Welcome to Update Restaurant Page</h1>

    <img class="logo" src="../assets/logo.jpg" alt="restro-logo">

    <form action="" class="add">

        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>

    </form>

</template>

<script>

import HeaderSection from './Header.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name : 'UpdateSection',
    components : {
        HeaderSection
    },
    data() {
        return {
            name : '',
            restaurant : {
                name : '',
                contact : '',
                address : '',
            }
        }
    },
    methods: {
        async updateRestaurant() {
            const result = await axios.put('https://64be88685ee688b6250c9330.mockapi.io/restaurant/'+this.$route.params.id, {
                name : this.restaurant.name,
                contact : this.restaurant.contact,
                address : this.restaurant.address,
            });

            if (result.status == 200) {
                Swal.fire({
                    title: 'Restaurant Updated Successfully !',
                    icon: 'success',
                    // showConfirmButton: false, // Remove the 'OK' button
                    timer: 1000, // Set the timer for 2 seconds (adjust as needed)
                });
                this.$router.push({name : 'HomePage'})
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
    async mounted() {
        let signupData = localStorage.getItem('user-info');
        let loginData = localStorage.getItem('login-info');

        this.name=JSON.parse(loginData).name;

        if(!signupData && !loginData){
            this.$router.push({name : 'SignUp'})
        }

        const result = await axios.get('https://64be88685ee688b6250c9330.mockapi.io/restaurant/'+this.$route.params.id);

        // console.log(result.data)

        this.restaurant=result.data

    },
}
</script>