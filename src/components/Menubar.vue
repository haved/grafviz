<template>
  <div class="menubar">
    <div class="buttons">
      <menubar-button icon="undo-alt" :enabled="graphviz.can_undo" :callback="graphviz.undo.bind(graphviz)"></menubar-button>
      <menubar-button icon="redo-alt" :enabled="graphviz.can_redo" :callback="graphviz.redo.bind(graphviz)"></menubar-button>
    </div>
    <div class="sep"></div>
    <div class="buttons speed_buttons" id="speedbtns">
        <menubar-button icon="pause" :hidden="!graphviz.is_running" :callback="graphviz.pause.bind(graphviz)"></menubar-button>
        <menubar-button icon="step-forward" :hidden="!graphviz.is_running" :callback="graphviz.step.bind(graphviz)"></menubar-button>
        <menubar-button icon="play" :hidden="!graphviz.is_running" :callback="graphviz.play.bind(graphviz)"></menubar-button>
        <menubar-button icon="forward" :hidden="!graphviz.is_running" :callback="graphviz.faster.bind(graphviz)"></menubar-button>
        <div id="speedshower"></div>
      </div>
    <div class="flexer"></div>
    <div class="structure_dropdown">
      {{graphviz.current_state.title}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import MenubarButton from './MenubarButton.vue';
import {GraphViz} from '../graphviz';

@Component({
  components: {MenubarButton}
})
export default class Menubar extends Vue {
  @Prop() private graphviz!: GraphViz;

  @Watch('graphviz.running_speed')
  on_speed_change(val:number, oldVal:number) {
    
  }
}
</script>

<style scoped lang="scss">
.menubar {
  display: flex;
  justify-content: center;
  align-items: baseline;
  
  background-color: #a4a;
  color: white;
  box-shadow: 0px 0px 4px #666;
  z-index: 10;
  padding: 2rem;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
}

.buttons>* {
  margin: 0 0.5rem;
  z-index: 7;
}

.sep {
  margin: 0 0.2rem;
}

.speed_buttons {
  position: relative;
}

#speedshower {
  top: -7px;
  bottom: -5px;
  position: absolute;
  background-color: #626;
  z-index: 5;
  box-shadow: -1px -1px 6px #0008 inset;
}

.flexer {
  flex-grow: 1;
}

.structure_dropdown {
	font-size: 2rem;
	font-weight: 500;
}
</style>
