<template>
  <div class="menubar">
    <div class="buttons">
      <menubar-button icon="undo-alt" :enabled="grafviz.can_undo" :callback="grafviz.undo.bind(grafviz)"/>
      <menubar-button icon="redo-alt" :enabled="grafviz.can_redo" :callback="grafviz.redo.bind(grafviz)"/>
    </div>
    <div class="sep"></div>
    <div class="buttons" v-if="grafviz.is_executing">
      <menubar-button icon="step-forward"
        :callback="grafviz.step.bind(grafviz)"
        :enabled="grafviz.running_speed == 0"/>
      <menubar-button icon="pause"
        :callback="grafviz.pause.bind(grafviz)"
        :enabled="grafviz.running_speed != 0"/>
      <menubar-button icon="play"
        :callback="grafviz.play.bind(grafviz)"
        :enabled="grafviz.running_speed != 1"/>
      <menubar-button icon="forward"
        :callback="grafviz.faster.bind(grafviz)"
        :enabled="grafviz.running_speed != 0"/>
      <span class="speed" v-if="grafviz.running_speed > 1">
        x{{grafviz.running_speed}}
      </span>
    </div>
    <div class="flexer"></div>
    <structure-dropdown v-bind="{grafviz}"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MenubarButton from './MenubarButton.vue';
import StructureDropdown from './StructureDropdown.vue';
import GrafViz from '@/grafviz';

@Component({
  components: {MenubarButton, StructureDropdown}
})
export default class Menubar extends Vue {
  @Prop() private grafviz!: GrafViz;
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
