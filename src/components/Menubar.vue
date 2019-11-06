<template>
  <div class="menubar">
    <div class="buttons">
      <menubar-button icon="undo-alt" :enabled="graphviz.can_undo" :callback="graphviz.undo.bind(graphviz)"></menubar-button>
      <menubar-button icon="redo-alt" :enabled="graphviz.can_redo" :callback="graphviz.redo.bind(graphviz)"></menubar-button>
    </div>
    <div class="sep"></div>
    <div class="buttons" v-if="graphviz.is_running">
      <menubar-button icon="step-forward"
        :callback="graphviz.step.bind(graphviz)"
        :enabled="graphviz.running_speed == 0"></menubar-button>
      <menubar-button icon="pause"
        :callback="graphviz.pause.bind(graphviz)"
        :enabled="graphviz.running_speed != 0"></menubar-button>
      <menubar-button icon="play"
        :callback="graphviz.play.bind(graphviz)"
        :enabled="graphviz.running_speed == 0"></menubar-button>
      <menubar-button icon="forward"
        :callback="graphviz.faster.bind(graphviz)"
        :enabled="graphviz.running_speed != 0"></menubar-button>
      <span class="speed" v-if="graphviz.running_speed > 1">
        x{{graphviz.running_speed}}
      </span>
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
  padding: 1.5rem;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  align-items: baseline;
}

.speed {
  font-size: 1rem;
  margin-left: -.2rem;  
}

.sep {
  margin: 0 0.4rem;
}

.flexer {
  flex-grow: 1;
}

.structure_dropdown {
	font-size: 2rem;
	font-weight: 500;
}
</style>
