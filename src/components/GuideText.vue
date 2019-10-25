<template>
    <div class="guide">
        <div class="code">
             Test 123<br>
            Masse<br>
            Linjer<br>
            Mange<br>
            Mange<br>
            <br>
            <br>
            <br>
            <br>
            Linjer
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GuideText extends Vue {
}
</script>

<style scoped lang="scss">
.guide {
    min-height: 2rem;
	flex-grow: 1;
	flex-shrink: 10;
	z-index: 7;

    padding: 0.5rem;
    background-color: #333;
    position: relative;
}

.code {
    position: absolute;

    font-family: 'Courier New', Courier, monospace;
    line-height: 1.5rem;
    font-weight: 600;
    color: #EEEEEE;
}
</style>