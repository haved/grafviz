<template>
    <div class="panel">
      <div class="titlebar">{{title}}</div>
      <div class="content">
        <div class="inner">
            Hei hei
            <br>
            hei på dei
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
    position: relative;
    flex-grow: 1;
    background-color: white;
}

.inner {
    position: absolute;
}

/* These apply to the panel element itself */
.open {
    flex-grow: 10;
}

.closed {
    flex-grow: 0;
}

.open>.content {
    overflow-y: auto;
}

</style>