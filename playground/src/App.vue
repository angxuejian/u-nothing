<template>
  <uConfigProvide :default="false">
    <uDashedLoading />
  </uConfigProvide>
</template>

<script lang="ts" setup>
import { uConfigProvide, uDashedLoading } from '@u-nothing-dev';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('playground');
});
</script>
