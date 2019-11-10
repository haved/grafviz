<template>
    <div class="dropdown"
    v-bind:class="{open}">
        <div class="selected"
        v-on:click="toggle()">
            <font-awesome-icon icon="caret-down"/>
            {{graphviz.type.title}}
        </div>
        <div class="chooser">
            <div class="item"
            v-for="(type, index) in graphviz.types"
            :key="index"
            v-bind:class="{selected: type == graphviz.type}"
            v-on:click="choose(type)">
                {{type.title}}
            </div>
        </div>
        <div id="active_timer">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GraphViz from '@/graphviz';
import GraphType from '@/graphtypes/graphtype';
import $ from 'jquery';

@Component
export default class extends Vue {
    @Prop() graphviz!:GraphViz;

    open : boolean = false;

    toggle() {
        this.open = !this.open;
    }

    choose(type:GraphType) {
        this.open = false;
        if(type == this.graphviz.type)
            return;
        this.graphviz.set_graph_type(type);
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

$hover-tint: #FFF4;
$open-tint: #0006;
$selected-tint: #0003;

.dropdown {
	position: relative;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
}

.selected {
    padding: 1.5rem;
}

#active_timer {
    background-color: #0006;
    width: 100%;
    position: absolute;
    bottom: 0;
}

.dropdown:not(.open):hover {
    background-color: $hover-tint;
}

.dropdown.open {
    background-color: $open-tint;
    .chooser {
        display: flex;
    }
}

.chooser {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: $bg-menubar;
    box-shadow: 0px 0px 7px #000000AA;
    min-width: 100%;
    flex-direction: column;
    align-items: stretch;
    overflow-y: auto;
}

.item {
    padding: 0.5rem 1rem;
    white-space: nowrap;
}

.item:hover {
    background-color: $hover-tint;
}

.item.selected {
    background-color: $selected-tint;
}

</style>