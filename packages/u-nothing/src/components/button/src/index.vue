<script lang="ts" setup>
import {
  useOptions,
  useNamespace,
  useConfig,
  useTestAttr,
  useStyle,
  useCssVar,
} from '@u-nothing/hooks';
import type { CommonProps } from '@u-nothing/config';
import { computed } from 'vue';
import uDashedLoading from '@u-nothing/components/dashed-loading';

interface Props extends CommonProps {
  loading?: boolean;
  color?: string;
  disabled?: boolean;
  text?: boolean;
  plain?: boolean;
}

defineOptions({
  name: useOptions('button'),
});

const ns = useNamespace('button');
const props = withDefaults(defineProps<Props>(), {
  loading: false,
});

const { testAttr } = useTestAttr();
const { theme, sizeVal, sizeClass } = useConfig(props);

const buttonClass = computed(() => {
  return [
    ns.b(),
    ns.is('disabled', props.disabled),
    ns.is('loading', props.loading),
    ns.is('primary', !props.text && !props.plain),
    ns.is('text', props.text),
    ns.is('plain', props.plain),
    sizeClass.value,
  ];
});

const buttonStyle = computed(() => {
  const contrastColor = getComputedStyle(document.documentElement).getPropertyValue(
    useCssVar('color-contrast'),
  );
  return {
    ...(props.text || props.plain ? {} : useStyle('text-color', contrastColor)),
    ...(props.color ? useStyle('color', props.color) : {}),
    ...(props.plain ? useStyle('text-focus-color', contrastColor) : {}),
  };
});
</script>

<template>
  <button
    v-if="theme === 'browser'"
    v-bind="{ ...$attrs, ...testAttr('button') }"
    :disabled="props.disabled"
  >
    <slot />
  </button>

  <button
    v-else
    :style="buttonStyle"
    v-bind="{ ...$attrs, ...testAttr('button') }"
    :class="buttonClass"
    :disabled="props.disabled || props.loading"
  >
    <uDashedLoading
      :size="sizeVal"
      :class="ns.e('loading')"
      v-bind="testAttr('button-loading')"
      v-if="props.loading"
    />

    <slot />
  </button>
</template>
