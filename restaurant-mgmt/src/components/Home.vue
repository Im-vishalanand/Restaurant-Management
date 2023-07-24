<template>
    <HeaderSection></HeaderSection>
    <h1>Hello {{ name }}, Welcome on Home Page</h1>

    <table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="'/update/' + item.id" style="text-decoration: none; color: green">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import HeaderSection from "./Header.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: "HomePage",
    data() {
        return {
            name: "",
            restaurant: [],
        };
    },
    components: {
        HeaderSection,
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete(
                "https://64be88685ee688b6250c9330.mockapi.io/restaurant/" + id
            );

            // console.log(result.status);

            if (result.status == 200) {
                this.loadData();
                Swal.fire({
                    title: "Restaurant Deleted Successfully !",
                    icon: "success",
                    // showConfirmButton: false,        // Remove the 'OK' button
                    timer: 2000, // Set the timer for 2 seconds (adjust as needed)
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Something Went Wrong...",
                    text: "Try Again!",
                    // showConfirmButton: false,
                    timer: 2000,
                    // footer: '<a href="">go to home page</a>'
                });
            }
        },
        async loadData() {
            let signupData = localStorage.getItem("user-info") || 0;
            let loginData = localStorage.getItem("login-info") || 0;

            this.name = JSON.parse(loginData).name;

            if (!signupData && !loginData) {
                this.$router.push({name : 'SignUp'})
            }

            let result = await axios.get("https://64be88685ee688b6250c9330.mockapi.io/restaurant");

            // console.log(result.data)

            this.restaurant = result.data;
        },
    },
    async mounted() {
        this.loadData();
    },
};
</script>

<style>
td,
th {
    width: 200px;
    height: 50px;
}

table {
    margin: auto;
}

table button{
    padding: 5px 8px;
    margin-left: 15px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

</style>
