<template>
  <div class="sidebar">
    <sidebar-panel title="Node type"></sidebar-panel>
    <sidebar-panel title="Globals"></sidebar-panel>
    <sidebar-panel title="Algorithms"></sidebar-panel>
    <guide-text :text="guide_text"></guide-text>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import SidebarPanel from './SidebarPanel.vue';
import GuideText from './GuideText.vue';

@Component({
  components: {
    SidebarPanel,
    GuideText
  }
})
export default class Sidebar extends Vue {
  @Prop() private guide_text!: object;
}
</script>

<style scoped lang="scss">
.sidebar {
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 30rem;
  flex-basis: 20%;

	display: flex;
	flex-direction: column;
  overflow-y: auto;
}
</style>
