<template>
  <uConfigProvide :default="false">
    <div style="padding: 30px 30px">
      <uButton disabled>Primary</uButton>

      <p></p>
      <uButton :loading="true">Primary</uButton>

      <p></p>
      <uButton :loading="true" :size="'small'">按钮</uButton>

      <p></p>
      <uButton :loading="true" :size="'medium'">按钮</uButton>
      <p></p>
      <uButton :loading="false" :size="'large'">按钮</uButton>

      <p></p>
      <uButton text>按钮</uButton>
      <uButton disabled text>按钮</uButton>

      <uButton text loading size="small">按钮</uButton>
      <uButton text loading size="medium">按钮</uButton>
      <uButton text loading size="large">按钮</uButton>
      <p></p>
      <uButton plain>按钮</uButton>
      <uButton disabled plain>按钮</uButton>

      <uButton plain loading size="small">按钮</uButton>
      <uButton plain loading size="medium">按钮</uButton>
      <uButton plain loading size="large">按钮</uButton>
    </div>
  </uConfigProvide>
</template>

<script lang="ts" setup>
import { uConfigProvide, uButton } from '@u-nothing/index';
import { onMounted } from 'vue';
import '@theme/index.scss';

onMounted(() => {
  console.log('playground');
});
</script>
