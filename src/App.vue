<template>
  <div id="app">
    <div class="menubar_and_container">
      <menubar :grafviz="grafviz"/>
      <div id="container"></div>
    </div>
    <sidebar v-bind="{grafviz}"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menubar from './components/Menubar.vue';
import Sidebar from './components/Sidebar.vue';

import GrafViz from './grafviz';

@Component({
  components: {
    Menubar,
    Sidebar
  }
})
export default class App extends Vue {
  grafviz = new GrafViz();

  mounted() {
    const container = document.getElementById('container') as HTMLDivElement;
    this.grafviz.start(container);
  }
}
</script>

<style lang="scss">
@import "./scss/_variables.scss";
@import '@/scss/code.scss';

html {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  overflow: hidden;
}

body, html {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;
}

.menubar_and_container {
  min-height: 100vh;
  flex-basis: $canvas-flex-basis;
  min-width: $min-canvas-width;

  display:flex;
  flex-direction: column;
  align-items: stretch;
}

#container {
  background-color: #eeeeee;
  flex-grow: 1;
}

/**
 * On screens smaller than or equal to this, we put the sidebar bellow and allow scrolling down
 */
@media screen and (max-width: $wrap-width) {
  #app {
    flex-direction: column;
    height: auto;
    font-size: 0.8rem;
  }
  html {
    overflow-y: auto;
  }
}

</style>
