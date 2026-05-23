<script setup lang="ts">
import { useNamespace, useOptions } from '@u-nothing/hooks';
import { CSSProperties } from 'vue';
import { computed } from 'vue';

interface Props {
  areaName?: string;
}

defineOptions({
  name: useOptions('grid-item'),
});

const props = defineProps<Props>();
const ns = useNamespace('grid-item');

const gridItemStyle = computed(() => {
  const style: CSSProperties = {};
  if (props.areaName) {
    style.gridArea = props.areaName;
  }
  return style;
});
</script>

<template>
  <div :class="[ns.b()]" :style="gridItemStyle">
    <slot />
  </div>
</template>
