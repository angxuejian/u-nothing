import { ConfigProviderPropsDefault, configKey, CommonProps, ConfigProviderProps } from '../config';
import { computed, inject } from 'vue';

export function useConfig(props: CommonProps) {
  const configInject = inject<ConfigProviderProps>(configKey, ConfigProviderPropsDefault);

  const config = configInject;

  const theme = computed(() => {
    return props.default || config.default;
  });

  return { config, theme };
}
