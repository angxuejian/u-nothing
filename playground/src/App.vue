<template>
  <div class="app">
    <uConfigProvide :htmlFontSize="16">
      <uGrid
        areas="'header header' 'aside main' '. footer'"
        columns="50px 1fr"
        rows="30px 1fr 30px"
      >
        <uGridItem areaName="header">header</uGridItem>
        <uGridItem areaName="aside">aside</uGridItem>
        <uGridItem areaName="main">main</uGridItem>
        <uGridItem areaName="footer">footer</uGridItem>
      </uGrid>
    </uConfigProvide>
  </div>
</template>

<script lang="ts" setup>
import { uConfigProvide, uGrid, uGridItem } from '@u-nothing/index';
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
.u-grid {
  border: 1px solid red;
  height: 200px;
}
.u-grid-item {
  background-color: #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #000;
}
</style>
