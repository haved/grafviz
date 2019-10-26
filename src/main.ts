import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
Vue.config.productionTip = false

function main() {
  const instance = new Vue({
    render: h => h(App),
  }).$mount('#app');
}

main();