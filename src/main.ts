import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

//The entry point for the apps code is in controller -> GraphVizController.init_on_ui_model()