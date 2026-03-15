<template>
  <uConfigProvide :default="true">
    <uDetails></uDetails>
  </uConfigProvide>
</template>

<script lang="ts" setup>
import { uConfigProvide, uDetails } from '@fuck-nothing-dev';
import { onMounted } from 'vue';

onMounted(() => {
  console.log('playground');
});
</script>
