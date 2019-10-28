<template>
    <div class="button"
    :hidden="hidden"
    v-bind:class="{toggled_on: toggled==1, toggled_off: toggled==-1, enabled:enabled, disabled:!enabled}"
    v-on:click="on_click">
        <font-awesome-icon :icon="icon_name"></font-awesome-icon>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenubarButton extends Vue {
    @Prop() private icon_name!:string;
    @Prop() private callback!:()=>any;
    @Prop() private enabled!:boolean;
    @Prop() private toggled!:number;
    @Prop() private hidden!:boolean;

    on_click() {
        if(this.enabled && !this.hidden)
            this.callback();
    }
}
</script>

<style scoped lang="scss">
.button {
  color: white;
  margin: 0.4rem;
}

.button.toggled_off {
  color: #626;
}

.button.disabled {
  color: #888888;
}

.button.enabled.toggled_off:hover {
    color: #bbb;
}

.button.enabled.button.toggled_off:active {
  color: white;
}
</style>