<script lang="ts" setup>
import { useOptions, useNamespace, useConfig } from '../../../hooks';
import type { CommonProps } from '../../../config';

defineOptions({
  name: useOptions('details'),
});
const ns = useNamespace('details');
const props = defineProps<CommonProps>();

const { theme } = useConfig(props);
console.log(theme);
</script>

<template>
  <details :class="ns.b()">
    <summary :class="ns.e('summary')">Details</summary>
    <p :class="ns.e('content')">Some details here.</p>
  </details>
</template>
