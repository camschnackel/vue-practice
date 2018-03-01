import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './Message.vue';
import Users from './Users.vue';
import Home from './Home.vue';

Vue.use(VueRouter); // use method enables plugins

const routes = [
  { path: '/users/:teamId', component: Users }, // tells Vue which component to load at specified path. Users is imported above; :teamId is dynamic
  { path: '/', component: Home }
];

const router = new VueRouter ({
  routes, // ES6 recognizes this as routes: routes; only works when properly and value name are the same
  mode: 'history' // enables history mode and removes the # sign from URLs
})

Vue.component('app-message', Message);

new Vue({
  el: '#app',
  router, // ES6 recognizes this as routes: routes; only works when properly and value name are the same
  render: h => h(App)
})
