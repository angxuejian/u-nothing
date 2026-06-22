<script lang="ts" setup>
import { useNamespace, useOptions, useConfig } from '@u-nothing/hooks';
import type { CommonProps } from '@u-nothing/config';
import { computed, ref, provide, onMounted, toRef, watch, nextTick } from 'vue';
import type { CSSProperties } from 'vue';

type PropSize = Pick<CommonProps, 'size'>;

interface Props extends PropSize {
  inline?: boolean;
  direction?: CSSProperties['flexDirection'];
  wrap?: boolean;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  columns?: number;
  fillLastRow?: boolean;
}

defineOptions({
  name: useOptions('flex'),
});

const props = withDefaults(defineProps<Props>(), {
  inline: false,
  direction: 'row',
  wrap: false,
});
const ns = useNamespace('flex');
const { sizeClass } = useConfig(props);
const flexRef = ref<HTMLElement | null>();
const flexItemGap = ref<number>(0);

const flexStyle = computed(() => {
  const style: CSSProperties = {
    flexDirection: props.direction,
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
  };
  if (props.align) {
    style.alignItems = props.align;
  }
  if (props.justify) {
    style.justifyContent = props.justify;
  }
  return style;
});

const updateGap = () => {
  if (!flexRef.value) return;

  const computedStyle = getComputedStyle(flexRef.value);
  const gapValue = computedStyle.gap;

  flexItemGap.value = parseFloat(gapValue) || 0;
};

onMounted(() => {
  updateGap();
});

watch(
  () => [props.size],
  () => {
    nextTick(updateGap);
  },
);

provide('flexProvider', {
  flexItemGap,
  columns: toRef(props, 'columns'),
  fillLastRow: toRef(props, 'fillLastRow'),
  direction: toRef(props, 'direction'),
});
</script>

<template>
  <div ref="flexRef" :class="[ns.b(), sizeClass, ns.is('inline', props.inline)]" :style="flexStyle">
    <slot />
  </div>
</template>
