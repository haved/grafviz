<template>
  <div class="panel">
    <div v-on:click="toggle" class="titlebar">{{title}}</div>
    <div class="content codefont" :hidden="hidden">
      Hei hei dette er en veldig lang linje, hva skjer?
      <br>
      hei på dei
      a<br>a<br>a<br>a<br>a<br>a<br>a<br>a
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import GuideText from './GuideText.vue';

@Component
export default class SidebarPanel extends Vue {
  @Prop() private title!: string;
  hidden = true;
  toggle() {
    this.hidden = !this.hidden;
  }
}
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: flex-basis 0.2s;
}

.titlebar {
  margin: 0;
  padding: 0.7rem;
  background-color: #4a4;
  color: white;
  font-size: 1.4rem;
  font-weight: 200;
  box-shadow: 0px 2px 3px #66666666;
  z-index: 5;
}

.titlebar:hover {
  background-color: #5b5;
}

.content {
  font-size: 0.9rem;
  background-color: #333;
  white-space: nowrap;
  overflow-x: auto;
}
</style>