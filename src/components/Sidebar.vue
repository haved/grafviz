<template>
  <div class="sidebar">
    <sidebar-panel title="Node type"></sidebar-panel>
    <sidebar-panel title="Globals"></sidebar-panel>
    <sidebar-panel title="Algorithms"></sidebar-panel>
    <guide-text :text="graphviz.type.description"></guide-text>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import SidebarPanel from './SidebarPanel.vue';
import GuideText from './GuideText.vue';
import { GraphViz } from '../graphviz';

@Component({
  components: {
    SidebarPanel,
    GuideText
  }
})
export default class Sidebar extends Vue {
  @Prop() private graphviz!: GraphViz;
}
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.sidebar {
  min-width: $min-sidebar-width;
  flex-basis: $sidebar-flex-basis;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>
