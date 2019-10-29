<template>
  <div class="menubar">
    <div class="static_buttons">
      <menubar-button icon="undo-alt" :enabled="graphviz.can_undo" :callback="graphviz.undo.bind(graphviz)"></menubar-button>
      <menubar-button icon="redo-alt" :enabled="graphviz.can_redo" :callback="graphviz.redo.bind(graphviz)"></menubar-button>
    </div>
    <div class="sep"></div>
    <div class="speed_buttons" id="speedbtns" :hidden="!graphviz.is_running">
        <menubar-button icon="pause" :callback="graphviz.pause.bind(graphviz)"></menubar-button>
        <menubar-button icon="step-forward" :callback="graphviz.step.bind(graphviz)"></menubar-button>
        <menubar-button icon="play" :callback="graphviz.play.bind(graphviz)"></menubar-button>
        <menubar-button icon="forward" :callback="graphviz.faster.bind(graphviz)"></menubar-button>
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

import $ from 'jquery';

@Component({
  components: {MenubarButton}
})
export default class Menubar extends Vue {
  @Prop() private graphviz!: GraphViz;

  @Watch('graphviz.running_speed')
  on_speed_change(val:number, oldVal:number) {
    const left_index = val + (val ? 1:0);
    const right_index = left_index;
    const btnrow = $('#speedbtns');
    const btns = btnrow.children()
    const left_pos = btns.eq(left_index).position().left;
    const right_btn = btns.eq(right_index);
    const right_pos = right_btn.position().left + right_btn.innerWidth()!;
    const width = right_pos - left_pos;
    $("#speedshower").animate({
      left: left_pos - 10,
      width: width + 17
    });
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
}

.static_buttons, .speed_buttons {
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
}

.static_buttons {
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.static_buttons>*, .speed_buttons>* {
  margin: 0 0.5rem;
  z-index: 7;
}

.sep {
  margin: 0 0.4rem;
}

.speed_buttons {
  padding: 10px;
  position: relative;
  background-color: #626;
  box-shadow: -1px -1px 6px #0008 inset;
}

#speedshower {
  top: 0px;
  bottom: 0px;
  position: absolute;
  background-color: #5a5;
  box-shadow: -1px -1px 6px #0008 inset;
  z-index: 5;
}

.flexer {
  flex-grow: 1;
}

.structure_dropdown {
	font-size: 2rem;
	font-weight: 500;
  margin: 2rem;
}
</style>
