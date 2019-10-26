<template>
  <div class="menubar">
    <div class="structure_dropdown">
      {{current_structure_name}}
    </div>
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
}
</script>

<style scoped lang="scss">
.menubar {
  display: flex;
  justify-content: center;
  
  background-color: #a4a;
  color: white;
  box-shadow: 0px 0px 4px #666;
  z-index: 10;
}

.structure_dropdown {
	margin: 2rem auto;
	font-size: 2rem;
	font-weight: 500;
}
</style>
