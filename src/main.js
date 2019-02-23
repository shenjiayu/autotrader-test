import Vue from 'vue'
import App from './App.vue'
// import routes definition
import router from './routes';
// import components registration
import './components';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
