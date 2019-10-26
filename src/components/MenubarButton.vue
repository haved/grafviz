<template>
    <div class="button"
    :hidden="hidden"
    v-bind:class="{toggled_off: toggled_off, toggled_on: !toggled_off, enabled:enabled, disabled:!enabled}"
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
    @Prop() private toggled_off!:boolean;
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

.button.enabled.toggled_on:hover {
    color: #bbb;
}
</style>