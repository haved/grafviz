<template>
  <div class="menubar">
    <div class="buttons">
      <menubar-button icon="undo-alt" :state="graphviz.undo_states.length!=0"></menubar-button>
      <menubar-button icon="redo-alt" :state="graphviz.redo_states.length!=0"></menubar-button>
      <menubar-button icon="pause" :state="graphviz.executing ? graphviz.running_speed = 0 : -1"></menubar-button>
      <menubar-button icon="step-forward" .state=""></menubar-button>
      <menubar-button icon="play" state="4"></menubar-button>
      <menubar-button icon="forward" state="3"></menubar-button>
    </div>
    <div class="flexer"></div>
    <div class="structure_dropdown">
      {{graphviz.current_state.title}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

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
}

.buttons {
  margin: 0rem 1.6rem; //Each button has .4rem, 2rem in total
  display: flex;
  font-size: 2rem;
}

.buttons>* {
  margin: 0.4rem;
}

.flexer {
  flex-grow: 1;
}

.structure_dropdown {
	margin: 2rem 2rem;
	font-size: 2rem;
	font-weight: 500;
}
</style>
