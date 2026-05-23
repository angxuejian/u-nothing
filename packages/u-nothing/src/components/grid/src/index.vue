<script setup lang="ts">
import { useNamespace, useOptions, useConfig } from '@u-nothing/hooks';
import type { CommonProps } from '@u-nothing/config';
import type { CSSProperties } from 'vue';
import { computed } from 'vue';

interface Props extends CommonProps {
  inline?: boolean;
  areas?: CSSProperties['gridTemplateAreas'];
  columns?: CSSProperties['gridTemplateColumns'];
  rows?: CSSProperties['gridTemplateRows'];
  autoFlow?: CSSProperties['gridAutoFlow'];
  autoColumns?: CSSProperties['gridAutoColumns'];
  autoRows?: CSSProperties['gridAutoRows'];
}

defineOptions({
  name: useOptions('grid'),
});

const props = defineProps<Props>();
const ns = useNamespace('grid');
const { sizeClass } = useConfig(props);

const gridStyle = computed(() => {
  const style: CSSProperties = {};
  if (props.areas) {
    style.gridTemplateAreas = props.areas;
  }
  if (props.columns) {
    style.gridTemplateColumns = props.columns;
  }
  if (props.rows) {
    style.gridTemplateRows = props.rows;
  }
  if (props.autoFlow) {
    style.gridAutoFlow = props.autoFlow;
  }
  if (props.autoColumns) {
    style.gridAutoColumns = props.autoColumns;
  }
  if (props.autoRows) {
    style.gridAutoRows = props.autoRows;
  }
  return style;
});
</script>

<template>
  <div :class="[ns.b(), ns.is('inline', props.inline), sizeClass]" :style="gridStyle">
    <slot />
  </div>
</template>
