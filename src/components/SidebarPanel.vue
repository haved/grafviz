<template>
  <div class="panel"
  v-bind:class="{ open: !hidden, closed: hidden }">
    <div v-on:click="toggle" class="titlebar">{{title}}</div>
    <div class="content codebg">
      <div class="inner code">
        Hei hei
        <br>
        hei på dei
        a<br>a<br>a<br>a<br>a<br>a<br>a<br>a<br>ba<br>da<br>ea<br>fa<br>aa<br>sa<br>sa<br>ea<br>
      </div>
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
  transition: flex-grow 0.2s;
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
  flex-grow: 1;
  position: relative;
}

.inner {
  position: absolute;
  padding: 0.5rem;
}

/* These apply to the panel element itself */
.open {
  flex-grow: 10;
  min-height: 10rem;
}

.closed {
  flex-grow: 0;
}

.open>.content {
  overflow: auto;
}

.closed>.content {
  overflow: hidden;
}
</style>