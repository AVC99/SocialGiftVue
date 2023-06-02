<template>
  <div class ="content-evenly" id="app">
      <router-link to="/">Home </router-link> 
      <router-link to="/login">Login </router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/profile">Profile</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
};
</script>

