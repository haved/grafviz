<template>
    <div class="button">
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MenubarButton extends Vue {
    @Prop() private icon!:string;
    @Prop() private enabled!:boolean;
    @Prop() private toggled_off!:boolean;
}
</script>

<style scoped lang="scss">

</style>