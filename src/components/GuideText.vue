<template>
  <div class="guide codebgblue">
    <div class="inner code">
      <h2>Graphviz</h2>
      This website lets you visualize different graph based datastructures, and visually see the algorithms operating on the graphs.<br>
      At the top of the page you can choose the data structure of your choice.<br>
      In this sidebar, there are 3 panels that give information about the current datastructure.
      <h3><font-awesome-icon icon="angle-right" size="sm"/> Node type</h3>
      This panel shows what data each node holds.
      Hovering over a specific node shows the values in that particular node.
      <h3><font-awesome-icon icon="angle-right" size="sm"/> Globals</h3>
      This contains the global varibales used by the algorithm.
      In this case global means per-graph as opposed to per-node.
      <h3><font-awesome-icon icon="angle-right" size="sm"/> Algorithms</h3>
      This panel shows functions that can be done on the graph.
      Click one to expand it, and click again to put it on the execute-bar.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GuideText extends Vue {}
</script>

<style scoped lang="scss">
.guide {
  min-height: 2rem;
	flex-grow: 1;
	flex-shrink: 10;
	z-index: 7;

  overflow: auto;
  position: relative;
}

.inner {
  position: absolute;
}
</style>