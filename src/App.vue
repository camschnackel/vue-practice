<template>
  <div id="app">
    <app-message></app-message>
    <hr>
    <h1>Let's go somewhere</h1>
    <hr>
    <!-- <a href="/home">Home</a> This reloads the entire page rather than re-rendering what you need -->
    <router-link to="/home">Home</router-link>
    <router-link to="/users/10">Users for team 10</router-link>
    <router-link to="/users/12">Users for team 12</router-link>
    <hr>
    <router-view></router-view> <!-- puts route component code here -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>

</style>
