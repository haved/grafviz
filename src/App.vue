<template>
  <div id="app">
    <div class="menubar_and_container">
      <menubar v-bind="menubar"></menubar>
      <div id="container"></div>
    </div>
    <sidebar v-bind="sidebar"></sidebar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menubar from './components/Menubar.vue';
import Sidebar from './components/Sidebar.vue';

@Component({
  components: {
    Menubar,
    Sidebar
  }
})
export default class App extends Vue {
  @Prop() private menubar!:object;
  @Prop() private sidebar!:object;
}
</script>

<style lang="scss">
html {
  overflow: hidden;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

body, html {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.menubar_and_container {
  flex-grow: 10;
  display:flex;
  flex-direction: column;
  align-items: stretch;
}

#container {
  flex-grow: 1;
  min-width: 300px;
  min-height: 300px;
}

/**
 * On screens smaller than or equal to this, we put the sidebar bellow and allow scrolling down
 */
@media screen and (max-width: 70rem) {
  #app {
    flex-direction: column;
  }
  html, body, #app {
    overflow-y: auto;
    max-height: auto;
  }
}
</style>
