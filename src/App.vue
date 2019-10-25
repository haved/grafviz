<template>
  <div id="app">
    <menubar v-bind="menubar"></menubar>
    <div class="main_contents">
      <div id="container"></div>
      <sidebar v-bind="sidebar"></sidebar>
    </div>
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
  max-height: 100vh;
  overflow: hidden;
}

body, html {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.main_contents {
  max-height: 100%;
  flex-grow: 1;
  display:flex;
  flex-direction: row;
  align-items: stretch;
}

#container {
  flex-grow: 10;
  min-width: 300px;
  min-height: 300px;
}

/**
 * On screens smaller than or equal to this, we put the sidebar bellow and allow scrolling down
 */
@media screen and (max-width: 70rem) {
  .main_contents {
    flex-direction: column;
    align-items: stretch;
  }
  html {
    overflow-y: auto;
    max-height: auto;
  }
}
</style>
