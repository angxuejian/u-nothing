<script setup lang="ts">
import { provide, reactive, onMounted, watch } from 'vue';
import { configKey, ConfigProviderProps, ConfigProviderPropsDefault } from '../../../config';

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
provide(configKey, config);
</script>

<template>
  <slot />
</template>
