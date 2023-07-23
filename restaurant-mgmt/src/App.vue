<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

img{
  margin-top: 60px;
}

.logo {
  width: 200px;
}

h1 {
  color: rgb(33, 31, 32);
  margin-top: 20px;
  margin-bottom: 20px;
}

.signup input, .login input, .add input {
  display: block;
  margin: auto;
  width: 330px;
  height: 45px;
  padding: 15px;
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  border: 1px solid rgb(33, 31, 32);
  border-radius: 3px;
}

.signup button, .login button, .add button {
  display: block;
  margin: auto;
  width: 330px;
  font-size: 22px;
  padding: 12px 20px;
  background-color: rgb(33, 31, 32);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

p {
  margin-top: 20px;
}
</style>
