<template>
    <div class="dropdown">
        <div class="selected">
            <font-awesome-icon icon="caret-down"></font-awesome-icon>
            {{graphviz.type.title}}
        </div>
        <div class="chooser">
            <div class="item"
            v-for="type in graphviz.types" :key="type.index"
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
import { GraphViz, GraphType } from '../graphviz';
import $ from 'jquery';

@Component
export default class extends Vue {
    @Prop() graphviz!:GraphViz;

    choose(type:GraphType) {
        if(type == this.graphviz.type)
            return;
        this.graphviz.set_graph_type(type);
    }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

$hover-tint: #0006;

.dropdown {
	position: relative;
    font-size: 2rem;
	font-weight: 500;
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

.dropdown:hover {
    background-color: $hover-tint;
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
    background-color: $hover-tint;
}

</style>