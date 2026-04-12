export interface ConfigProviderProps {
  default?: boolean;
  htmlFontSize?: number;
  // size?: 'small' | 'default' | 'large'
  // disabled?: boolean
}

export interface CommonProps {
  default?: boolean;
}

export const __namespace__ = 'u';
export const configKey = Symbol(__namespace__ + '__config');

export const ConfigProviderPropsDefault = {
  default: false,
  htmlFontSize: 16,
};
