<template>
  <div>
    <h1>Users Overview</h1>
    <p>Team ID is {{$route.params.teamId}}</p>
    <button @click="goHome">Go Home</button> <!-- executes goHome method below -->
  </div>
</template>

<script>
  export default {
    watch: { // watcher
      '$route' (to, from) {
        alert(to.params.teamId);
      }
    },
    created() { // this is a 'lifecycle hook' which are methods that are executed automatically when it is created
      alert(this.$route.params.teamId) // only changes when returning to home because of how Vue.js handles rendering of pages unless you have watcher
    },
    methods: {
      goHome() {
        this.$router.push('/'); // works same as adding router-link in view
      }
    }
  }
</script>