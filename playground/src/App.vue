<template>
  <uConfigProvide :default="false">
    <!-- <uButton :loading="true">按钮</uButton> -->
  </uConfigProvide>
</template>

<script lang="ts" setup>
import { uConfigProvide } from '@u-nothing/index';
import { onMounted } from 'vue';
import '@theme/index.scss';

onMounted(() => {
  console.log('playground');
});
</script>
