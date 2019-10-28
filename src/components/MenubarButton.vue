<template>
    <div class="button"
    :hidden="state==-1"
    v-bind:class="{disabled:state==0, enabled:state==1, toggled_off:state==2, toggled_on:state==3}"
    v-on:click="on_click">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

enum MenubarButtonState {
  Disabled=0,
  Enabled=1,
  ToggledOff=2,
  ToggledOn=3,
  Hidden=-1
}

@Component
export default class MenubarButton extends Vue {
    @Prop() private icon!:string;
    @Prop() private callback!:()=>any;
    @Prop() private state!: MenubarButtonState;

    on_click() {
        if(this.state == MenubarButtonState.Enabled || this.state == MenubarButtonState.ToggledOff)
          if(this.callback)
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

.button.toggled_on {
  color: #fff;
}

.button.toggled_off {
  color: #626;
}

.button.toggled_off:hover {
    color: #ccc;
}

.button.toggled_off:active {
  color: white;
}
</style>