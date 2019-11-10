<template>
  <div class="menubar">
    <div class="buttons">
      <menubar-button icon="undo-alt" :enabled="graphviz.can_undo" :callback="graphviz.undo.bind(graphviz)"/>
      <menubar-button icon="redo-alt" :enabled="graphviz.can_redo" :callback="graphviz.redo.bind(graphviz)"/>
    </div>
    <div class="sep"></div>
    <div class="buttons" v-if="graphviz.is_executing">
      <menubar-button icon="step-forward"
        :callback="graphviz.step.bind(graphviz)"
        :enabled="graphviz.running_speed == 0"/>
      <menubar-button icon="pause"
        :callback="graphviz.pause.bind(graphviz)"
        :enabled="graphviz.running_speed != 0"/>
      <menubar-button icon="play"
        :callback="graphviz.play.bind(graphviz)"
        :enabled="graphviz.running_speed != 1"/>
      <menubar-button icon="forward"
        :callback="graphviz.faster.bind(graphviz)"
        :enabled="graphviz.running_speed != 0"/>
      <span class="speed" v-if="graphviz.running_speed > 1">
        x{{graphviz.running_speed}}
      </span>
    </div>
    <div class="flexer"></div>
    <structure-dropdown v-bind="{graphviz}"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MenubarButton from './MenubarButton.vue';
import StructureDropdown from './StructureDropdown.vue';
import GraphViz from '@/graphviz';

@Component({
  components: {MenubarButton, StructureDropdown}
})
export default class Menubar extends Vue {
  @Prop() private graphviz!: GraphViz;
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.menubar {
  display: flex;
  justify-content: center;
  align-items: baseline;
  
  background-color: $bg-menubar;
  color: white;
  box-shadow: 0px 0px 4px #666;
  z-index: 10;
}

.buttons {
  margin-left: 1.5rem;
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
</style>
