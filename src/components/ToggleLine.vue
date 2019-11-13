<template>
  <div class="line">
    <div v-on:click="toggle" class="main-line">
      <font-awesome-icon icon="angle-down" v-if="line.shown"/>
      <font-awesome-icon icon="angle-right" v-else/>
      <span v-html="line.title.html"/>
    </div>
    <div class="body" v-if="line.shown">
      <div class="inner-line"
      v-for="(inner, index) in line.content"
      :key="index"
      v-html="inner.html"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CodeText } from '@/pseudocode';

export type ToggleLineData = {title:CodeText, content: CodeText[], shown:boolean};

@Component
export default class ToggleLine extends Vue {
  @Prop() private line!: ToggleLineData;
  
  toggle() {
    this.line.shown = !this.line.shown;
    //this.$forceUpdate();
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.main-line {
  background-color: #0002;
}

.main-line:hover {
  background-color: #FFF1;
}

.inner-line, .main-line {
  display: block;
  padding: $code-line-pad;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #FFFFFF0A;
  box-shadow: 0px 0px 4px #0008 inset;
}

</style>