<script lang="ts" setup>
import { useOptions, useNamespace, useStyle } from '@u-nothing/hooks';
import { computed } from 'vue';

interface Props {
  radius?: number;
  strokeWidth?: number;
  padding?: number;
  dashedPercent?: number;
}

defineOptions({
  name: useOptions('dashed-loading'),
});

const ns = useNamespace('dashed-loading');
const props = withDefaults(defineProps<Props>(), {
  radius: 10,
  strokeWidth: 1,
  padding: 4,
  dashedPercent: 0.75,
});

const percent = computed(() => Math.max(0, Math.min(props.dashedPercent, 1)));

// svg + circle size
const outer = computed(() => props.radius + props.strokeWidth + props.padding);
const viewBoxSize = computed(() => Math.ceil(outer.value * 2));
const viewBox = computed(() => `0 0 ${viewBoxSize.value} ${viewBoxSize.value}`);
const center = computed(() => outer.value);

// 圆周长
const circumference = computed(() => +(2 * Math.PI * props.radius).toFixed(2));
const dashLong = computed(() => +(circumference.value * percent.value).toFixed(2));
const dashGap = computed(() => +(circumference.value - dashLong.value).toFixed(2));

const svgStyle = computed(() => ({
  width: `${viewBoxSize.value}px`,
  height: `${viewBoxSize.value}px`,
  ...useStyle('circ', `${circumference.value}px`),
  ...useStyle('dash-long', `${dashLong.value}px`),
  ...useStyle('dash-gap', `${dashGap.value}px`),
}));
</script>

<template>
  <svg :class="ns.b()" :viewBox="viewBox" :style="svgStyle" xmlns="http://www.w3.org/2000/svg">
    <circle
      :class="ns.e('circle')"
      :cx="center"
      :stroke-width="props.strokeWidth"
      :cy="center"
      :r="props.radius"
    ></circle>
  </svg>
</template>
