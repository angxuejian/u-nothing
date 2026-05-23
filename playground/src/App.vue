<template>
  <div class="app">
    <uConfigProvide :htmlFontSize="16">
      <uFlex :columns="3" wrap fillLastRow>
        <uFlexItem>1</uFlexItem>
        <uFlexItem>2</uFlexItem>
        <uFlexItem>3</uFlexItem>
        <uFlexItem>4</uFlexItem>
        <uFlexItem>5</uFlexItem>
        <uFlexItem>6</uFlexItem>
        <uFlexItem>7</uFlexItem>
        <uFlexItem>8</uFlexItem>
      </uFlex>
    </uConfigProvide>
  </div>
</template>

<script lang="ts" setup>
import { uConfigProvide, uFlex, uFlexItem } from '@u-nothing/index';
import { onMounted } from 'vue';
import '@theme/index.scss';
onMounted(() => {
  console.log('playground');
});
</script>

<style lang="css">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family:
    sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'PingFang SC',
    'Hiragino Sans GB',
    'Microsoft YaHei';

  background-color: #fff;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  padding: 20px;
}
.container {
  width: 100%;
}
</style>
