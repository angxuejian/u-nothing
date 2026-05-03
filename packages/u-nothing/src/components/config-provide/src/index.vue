<script setup lang="ts">
import { provide, reactive, onMounted, watch } from 'vue';
import {
  ConfigProviderKey,
  ConfigProviderProps,
  ConfigProviderPropsDefault,
} from '@u-nothing/config';

const props = withDefaults(defineProps<ConfigProviderProps>(), ConfigProviderPropsDefault);

watch(
  () => props.htmlFontSize,
  () => {
    setHtmlFontSize();
  },
);

onMounted(() => {
  setHtmlFontSize();
});

const setHtmlFontSize = () => {
  if (props.htmlFontSize) {
    document.documentElement.style.fontSize = `${props.htmlFontSize}px`;
  }
};

const config = reactive(props);
provide(ConfigProviderKey, config);
</script>

<template>
  <slot />
</template>
