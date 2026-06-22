<script setup lang="ts">
import { useNamespace, useOptions } from '@u-nothing/hooks';
import { computed, ref, inject } from 'vue';
import type { CSSProperties } from 'vue';

interface Props {
  order?: number;
  basis?: CSSProperties['flexBasis'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
}

defineOptions({
  name: useOptions('flex-item'),
});

const props = defineProps<Props>();
const ns = useNamespace('flex-item');
const flexProvider = inject('flexProvider', {
  flexItemGap: ref(0),
  columns: ref<number | undefined>(0),
  fillLastRow: ref<boolean | undefined>(false),
  direction: ref('row'),
});

const flexItemPropsStyle = computed(() => {
  const style: CSSProperties = {};
  if (props.order !== undefined) {
    style.order = props.order;
  }
  if (props.basis !== undefined) {
    style.flexBasis = props.basis;
  }
  if (props.grow !== undefined) {
    style.flexGrow = props.grow;
  }
  if (props.shrink !== undefined) {
    style.flexShrink = props.shrink;
    if (parseInt(props.shrink.toString()) > 0) {
      if (
        flexProvider.direction.value === 'row' ||
        flexProvider.direction.value === 'row-reverse'
      ) {
        style.minWidth = 0;
      } else {
        style.minHeight = 0;
      }
    }
  }
  return style;
});
const flexItemProviderStyle = computed(() => {
  const style: CSSProperties = {};
  if (
    ['row', 'row-reverse'].includes(flexProvider.direction.value) &&
    flexProvider.columns.value &&
    flexProvider.columns.value > 0 &&
    flexProvider.flexItemGap.value
  ) {
    const gapTotal = (flexProvider.columns.value - 1) * flexProvider.flexItemGap.value;
    const width = `calc((100% - ${gapTotal}px) / ${flexProvider.columns.value})`;
    style.width = width;
    style.flexBasis = 'auto';
    style.flexGrow = flexProvider.fillLastRow.value ? 1 : 0;
    style.flexShrink = 1;
    style.minWidth = 0;
  }
  return style;
});
</script>

<template>
  <div :class="[ns.b()]" :style="[flexItemPropsStyle, flexItemProviderStyle]">
    <slot />
  </div>
</template>
