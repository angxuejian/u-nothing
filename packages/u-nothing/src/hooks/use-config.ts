import {
  ConfigProviderPropsDefault,
  ConfigProviderKey,
  CommonProps,
  ConfigProviderProps,
} from '../config';
import { computed, inject } from 'vue';

export function useConfig(props: CommonProps) {
  const configInject = inject<ConfigProviderProps>(ConfigProviderKey, ConfigProviderPropsDefault);

  const config = configInject;

  const theme = computed(() => {
    return props.theme || config.theme;
  });

  const size = computed(() => {
    return props.size || config.size;
  });

  const sizeClass = computed(() => {
    return size.value && size.value !== 'medium' && `is-${size.value}`;
  });

  return { config, theme, sizeVal: size, sizeClass };
}
