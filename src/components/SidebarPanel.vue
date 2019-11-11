<template>
  <div class="panel">
    <div v-on:click="toggle" class="titlebar" :class="{disabled: empty()}">
      <font-awesome-icon icon="angle-right" v-if="hidden || empty()"/>
      <font-awesome-icon icon="angle-down" v-else/>
      {{title}}</div>
    <div class="content codefont" v-if="!hidden && !empty()">
      <div v-for="(line, index) in lines" :key="index">
        <span class="plain-line" v-if="is_code(line)" v-html="line.html"/> 
        <toggle-line :line="line" v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ToggleLine from './ToggleLine.vue';
import { CodeText } from '../pseudocode';

@Component({
  components: { ToggleLine }
})
export default class SidebarPanel extends Vue {
  @Prop() private title!: string;
  @Prop() private lines!: any[];
  
  hidden = true;
  toggle() {
    if(!this.empty())
      this.hidden = !this.hidden;
  }

  is_code(object:any|CodeText) {
    return object instanceof CodeText;
  }

  empty() {
    return this.lines.length == 0;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.titlebar {
  margin: 0;
  padding: 0.7rem;
  background-color: $sidebar-title-color;
  color: white;
  font-size: 1.4rem;
  font-weight: 200;
  box-shadow: 0px 2px 3px #66666666;
  z-index: 5;
  cursor: pointer;
}

.titlebar.disabled {
  background-color: $sidebar-title-color-disabled;
  color: #777;
  cursor: inherit;
}

.titlebar:not(.disabled):hover {
  background-color: #5b5;
}

.content {
  padding: .5rem 0;
  font-size: 0.9rem;
  background-color: #333;
  white-space: nowrap;
  overflow-x: auto;
  display:flex;
  flex-direction: column;
  align-items: stretch;
}

.plain-line {
  display: block;
  padding: $code-line-pad;
}
</style>
