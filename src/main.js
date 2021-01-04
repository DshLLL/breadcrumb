import Vue from 'vue'
import App from './App.vue'
import breadcrumb from "../dist/breadcrumb";

Vue.use(breadcrumb);
new Vue({
  el: '#app',
  render: h => h(App)
})
