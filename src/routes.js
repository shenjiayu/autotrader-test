import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "./pages/HomePage";
import DimensionPage from './pages/DimensionPage';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/dimension',
      name: 'dimension',
      component: DimensionPage
    }
  ]
});

export default router;