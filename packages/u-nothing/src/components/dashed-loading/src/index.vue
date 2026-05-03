<script lang="ts" setup>
import { useOptions, useNamespace, useStyle } from '@u-nothing/hooks';
import { computed } from 'vue';
import {
  type __TYPE_SMALL__,
  type __TYPE_MEDIUM__,
  type __TYPE_LARGE__,
  __SMALL__,
  __LARGE__,
} from '@u-nothing/config';

interface Props {
  radius?: number;
  strokeWidth?: number;
  padding?: number;
  dashedPercent?: number;
  size?: __TYPE_SMALL__ | __TYPE_MEDIUM__ | __TYPE_LARGE__;
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

const sizeVal = computed(() => {
  if (!props.size) {
    return { radius: props.radius, padding: props.padding };
  } else {
    let radius = 8;
    if (props.size === __SMALL__) {
      radius = 6;
    } else if (props.size === __LARGE__) {
      radius = 10;
    }
    return { padding: 0.5, radius };
  }
});

const percent = computed(() => Math.max(0, Math.min(props.dashedPercent, 1)));

// svg + circle size
const outer = computed(() => sizeVal.value.radius + props.strokeWidth + sizeVal.value.padding);
const viewBoxSize = computed(() => Math.ceil(outer.value * 2));
const viewBox = computed(() => `0 0 ${viewBoxSize.value} ${viewBoxSize.value}`);
const center = computed(() => outer.value);

// 圆周长
const circumference = computed(() => +(2 * Math.PI * sizeVal.value.radius).toFixed(2));
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
      :r="sizeVal.radius"
    ></circle>
  </svg>
</template>
