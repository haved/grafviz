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
  overflow: hidden;
}

body, html {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#container {
  flex-grow: 10;
}

.main_contents {
  flex-grow: 1;
  display:flex;
  flex-direction: row;
  align-items: stretch;
}

/**
 * On screens smaller than 500px, we put the sidebar bellow
 */
@media screen and (max-width: 500px) {
  .main_contents {
    flex-direction: column
  }
  html {
    overflow-y: auto;
  }
}
</style>
