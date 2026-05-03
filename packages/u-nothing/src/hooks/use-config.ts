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

  return { config, theme };
}
