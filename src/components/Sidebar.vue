<template>
  <div class="sidebar">
    <sidebar-panel title="Node type" :lines="node_type_lines()"/>
    <sidebar-panel title="Globals" :lines="globals_lines()"/>
    <sidebar-panel title="Algorithms" :lines="algorithms_lines()"/>
    <guide-text :text="graphviz.type.description"></guide-text>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import SidebarPanel from './SidebarPanel.vue';
import GuideText from './GuideText.vue';
import GraphViz from '@/graphviz';

@Component({
  components: {
    SidebarPanel,
    GuideText
  }
})
export default class Sidebar extends Vue {
  @Prop() private graphviz!: GraphViz;

  node_type_lines():any {
    return this.graphviz.type.node_fields.map(field=>field.to_codetext())
  }
  globals_lines():any {
    return this.graphviz.type.node_fields.map(field=>field.to_codetext())
  }
  algorithms_lines():any {
    return this.graphviz.type.node_fields.map(field=>field.to_codetext())
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.sidebar {
  min-width: $min-sidebar-width;
  flex-basis: $sidebar-flex-basis;

  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>
