export interface ConfigProviderProps {
  default?: boolean;
  // size?: 'small' | 'default' | 'large'
  // disabled?: boolean
}

export interface CommonProps {
  default?: boolean;
}

export const configKey = Symbol('fuck__config');

export const ConfigProviderPropsDefault = {
  default: false,
};
