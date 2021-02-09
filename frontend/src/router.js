import TestPage from '@/components/TestPage.vue';

import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/companies',
    name: 'companies-search',
    component: TestPage
  }
];


const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
