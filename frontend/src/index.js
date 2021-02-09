import Vue from 'vue';
import vuetify from './plugins/vuetify.js';
import store from '@/store';
import router from '@/router';
import App from './App.vue';


new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App),
});
