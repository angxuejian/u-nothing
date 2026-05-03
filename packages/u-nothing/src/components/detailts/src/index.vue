<script lang="ts" setup>
import { useOptions, useNamespace, useConfig, useTestAttr } from '@u-nothing/hooks';
import type { CommonProps } from '@u-nothing/config';
import { __DEFAULT__ } from '@u-nothing/config';
import { ref, useSlots, watch } from 'vue';

interface Emits {
  (event: 'change', value: boolean): void;
}
interface Props extends CommonProps {
  open?: boolean;
}

defineOptions({
  name: useOptions('details'),
});

const slots = useSlots();
const ns = useNamespace('details');
const props = withDefaults(defineProps<Props>(), {
  open: false,
});
const emit = defineEmits<Emits>();
const { testAttr } = useTestAttr();
const isOpen = ref<boolean>(props.open);
const { theme, sizeClass } = useConfig(props);

const detailsClickHandler = () => {
  isOpen.value = !isOpen.value;
  emit('change', isOpen.value);
};
const detailsToggleHandler = (event: Event) => {
  isOpen.value = (event.target as HTMLDetailsElement).open;
  emit('change', isOpen.value);
};

watch(
  () => props.open,
  (newVal: boolean) => {
    isOpen.value = newVal;
  },
);
</script>

<template>
  <details @toggle="detailsToggleHandler" :open="isOpen" v-if="theme === __DEFAULT__">
    <summary v-if="slots.summary">
      <slot name="summary"></slot>
    </summary>
    <template v-if="slots.default">
      <slot></slot>
    </template>
  </details>

  <div v-else :class="[ns.b(), ns.is('open', isOpen), sizeClass]">
    <div
      v-if="slots.summary"
      :class="ns.e('summary')"
      @click="detailsClickHandler"
      v-bind="testAttr('summary')"
    >
      <slot name="summary"></slot>
    </div>
    <div v-if="slots.default" :class="ns.e('wrapper')">
      <div :class="ns.e('content')">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
