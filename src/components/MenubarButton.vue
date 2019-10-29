<template>
    <div class="button"
    v-bind:class="{
      disabled:!enabled,
      enabled:enabled}"
    v-on:click="on_click">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenubarButton extends Vue {
    @Prop() private icon!:string;
    @Prop() private callback!:()=>any;
    @Prop({default:true}) private enabled!:boolean;

    on_click() {
        if(this.enabled && this.callback)
          this.callback();
    }
}
</script>

<style scoped lang="scss">
.button {
  margin: 0.4rem;
}

.button.enabled {
  color: white;
}

.button.enabled:hover {
  color: #ddd;
}

.button.enabled:active {
  color: #bbb;
}

.button.disabled {
  color: #888;
}
</style>