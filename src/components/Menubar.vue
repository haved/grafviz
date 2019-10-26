<template>
  <div class="menubar">
    <div class="buttons">
      <menubar-button
      v-for="button in buttons_list"
      v-bind:key="button.id"
      v-bind="button"
      class="button"></menubar-button>
    </div>
    <div class="flexer"></div>
    <div class="structure_dropdown">
      {{current_structure_name}}
    </div>
    <div class="flexer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MenubarButton from './MenubarButton.vue';

@Component({
  components: {MenubarButton}
})
export default class Menubar extends Vue {
  @Prop() private current_structure_name!: string;
  @Prop() private buttons_list!: object[];
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
  margin: 0rem 1.6rem;
  display: flex;
  font-size: 2rem;
}

.button {
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
