import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
Vue.config.productionTip = false

function main() {
  const props = {
    menubar: {
      current: "Treep"
    },
    sidebar: {
      panels: [
        {title:"Node type"},
        {title:"Globals"},
        {title:"Algorithms"}
      ]
    },
    testo:"Heieie"
  };

  const instance = new Vue({
    render: h => h(App, {props}),
  }).$mount('#app');
}

main();