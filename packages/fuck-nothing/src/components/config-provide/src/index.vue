<script setup lang="ts">
import { provide, reactive } from 'vue';
import { configKey, ConfigProviderProps, ConfigProviderPropsDefault } from '../../../config';

const props = withDefaults(defineProps<ConfigProviderProps>(), ConfigProviderPropsDefault);

const config = reactive(props);
provide(configKey, config);
</script>

<template>
  <slot />
</template>
