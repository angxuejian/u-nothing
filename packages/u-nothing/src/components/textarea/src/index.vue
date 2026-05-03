<script lang="ts" setup>
import { useOptions, useNamespace, useConfig, useTestAttr } from '@u-nothing/hooks';
import type { CommonProps } from '@u-nothing/config';
import { __DEFAULT__ } from '@u-nothing/config';
import { computed, ref, type Ref, onMounted, onUnmounted } from 'vue';

interface Emits {
  input: [e: InputEvent];
}

interface Props extends CommonProps {
  disabled?: boolean;
  autosize?: boolean | { minRows?: number; maxRows?: number };
  rows?: string | number;
  resize?: 'none' | 'vertical' | 'both' | 'horizontal';
}

defineOptions({
  name: useOptions('textarea'),
});

const ns = useNamespace('textarea');
const emits = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  autosize: false,
  resize: 'none',
});
const { theme, sizeClass } = useConfig(props);
const { testAttr } = useTestAttr();
const modelValue = defineModel<string>();
const textareaRef: Ref = ref();
let rafId: null | number = null;
let obsRafId: null | number = null;
let observer: ResizeObserver;

const minRows = computed(() => {
  let min = 1;

  if (props.rows) {
    min = parseFloat(`${props.rows}`);
  }
  if (props.autosize && typeof props.autosize !== 'boolean') {
    min = props.autosize.minRows || 1;
  }

  return min;
});

const maxRows = computed(() => {
  let max = null;

  if (props.autosize && typeof props.autosize !== 'boolean') {
    max = props.autosize.maxRows || null;
  }

  return max;
});

const textareaClass = computed(() => {
  return [ns.b(), sizeClass.value, ns.is('disabled', props.disabled)];
});

const textareaStyle = computed(() => {
  return `resize: ${props.resize}`;
});

const resizeHandler = (textarea: HTMLTextAreaElement, isScrollBottom: boolean = false) => {
  const style = window.getComputedStyle(textarea);

  const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

  let lineHeight = 0;
  if (style.lineHeight === 'normal') {
    lineHeight = parseFloat(style.fontSize) * 1.2;
  } else {
    lineHeight = parseFloat(style.lineHeight);
  }

  const minLineHeight = lineHeight * minRows.value + padding + border;
  const maxLineHeight = maxRows.value ? lineHeight * maxRows.value : null;
  textarea.style.height = 'auto';
  const scrollHeight = textarea.scrollHeight;

  let height = 0;
  if (scrollHeight <= minLineHeight) height = minLineHeight;
  else {
    height = scrollHeight;
    if (maxLineHeight && height >= maxLineHeight) {
      height = maxLineHeight;

      if (isScrollBottom) {
        textarea.scrollTop = textarea.scrollHeight;
      }
    }
  }

  textarea.style.height = `${height}px`;
};

const onInputHandler = (e: InputEvent) => {
  emits('input', e);

  const textarea = e.target as HTMLTextAreaElement;
  if (rafId) return; // 已经在队列里了

  rafId = requestAnimationFrame(() => {
    resizeHandler(textarea);
    rafId = null;
  });
};

const onResizeHandler = () => {
  if (obsRafId) return;

  obsRafId = requestAnimationFrame(() => {
    const el = textareaRef.value;
    if (el) {
      resizeHandler(textareaRef.value, true);
    }
    obsRafId = null;
  });
};

onMounted(() => {
  observer = new ResizeObserver(onResizeHandler);
  observer.observe(textareaRef.value);
});

onUnmounted(() => {
  observer.disconnect();

  if (obsRafId) {
    cancelAnimationFrame(obsRafId);
  }
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
});
</script>

<template>
  <textarea
    v-bind="{ ...$attrs, ...testAttr('textarea') }"
    :disabled="props.disabled"
    v-model="modelValue"
    :style="textareaStyle"
    :rows="minRows"
    ref="textareaRef"
    @input="onInputHandler"
    v-if="theme === __DEFAULT__"
  ></textarea>

  <textarea
    v-bind="{ ...$attrs, ...testAttr('textarea') }"
    :disabled="props.disabled"
    :class="textareaClass"
    :style="textareaStyle"
    v-model="modelValue"
    :rows="minRows"
    ref="textareaRef"
    @input="onInputHandler"
    v-else
  ></textarea>
</template>
