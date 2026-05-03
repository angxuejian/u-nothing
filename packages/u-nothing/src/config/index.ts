export type Size = 'small' | 'medium' | 'large';
export type Theme = 'browser' | 'ustyle';

export const __namespace__ = 'u';
export const ConfigProviderKey = Symbol(__namespace__ + '__config');

export const ConfigProviderPropsDefault = {
  theme: 'ustyle',
  htmlFontSize: 16,
  size: 'medium',
} satisfies {
  theme: Theme;
  htmlFontSize: number;
  size: Size;
};

export interface ConfigProviderProps {
  theme?: Theme;
  size?: Size;
  htmlFontSize?: number;
  // disabled?: boolean
}

export interface CommonProps {
  theme?: Theme;
  size?: Size;
}
