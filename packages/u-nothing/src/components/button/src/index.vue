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
const { theme } = useConfig(props);

const buttonClass = computed(() => {
  if (theme.value) {
    return [];
  } else {
    return [
      ns.b(),
      ns.is('disabled', props.disabled),
      ns.is('loading', props.loading),
      ns.is('small', props.size === 'small'),
      ns.is('medium', props.size === 'medium'),
      ns.is('large', props.size === 'large'),
      ns.is('primary', !props.text && !props.plain),
      ns.is('text', props.text),
      ns.is('plain', props.plain),
    ];
  }
});

const loadingProps = computed(() => {
  if (props.size === 'small') {
    return { padding: 0.5, radius: 6 };
  } else if (props.size === 'medium') {
    return { padding: 0.5, radius: 8 };
  } else if (props.size === 'large') {
    return { padding: 0.5, radius: 10 };
  } else {
    return { padding: 0.5, radius: 8 };
  }
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
    :style="buttonStyle"
    v-bind="{ ...$attrs, ...testAttr('button') }"
    :class="buttonClass"
    :disabled="props.disabled || props.loading"
  >
    <uDashedLoading
      :padding="loadingProps.padding"
      :radius="loadingProps.radius"
      :class="ns.e('loading')"
      v-bind="testAttr('button-loading')"
      v-if="props.loading"
    />

    <slot />
  </button>
</template>
