<template>
    <div class="nav">
        <router-link to="http://localhost:3000/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name : 'HeaderSection',
    methods: {
        logout(){
            localStorage.clear();
            this.$router.push({name : 'LoginPage'})
        }
    },
}
</script>


<style>

.nav{
    height: 60px;
    background-color: #333;
    overflow: hidden;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 400px;
}

.nav a{
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
}

.nav a:hover{
    background-color: #ddd;
    color: #333;
    text-decoration: none;
}



</style>