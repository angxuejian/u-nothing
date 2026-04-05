<template>
  <uConfigProvide :default="false">
    <uDetails>
      <template #summary> Details </template>
      Some details here.
    </uDetails>
  </uConfigProvide>
</template>

<script lang="ts" setup>
import { uConfigProvide, uDetails } from '@u-nothing-dev';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('playground');
});
</script>
