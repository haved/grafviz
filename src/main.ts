import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
Vue.config.productionTip = false

import {GraphVizUI} from './model';

function main() {
  const ui_model = new GraphVizUI();
  const instance = new Vue({
    render: h => h(App, {props: ui_model}),
  }).$mount('#app');
  ui_model.menubar.current_structure_name = "Halla";
}

main();