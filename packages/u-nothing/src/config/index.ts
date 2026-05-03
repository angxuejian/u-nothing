export const __DEFAULT__ = 'browser' as const;
export const __UNOTHING__ = 'ustyle' as const;

export const __namespace__ = 'u';
export const ConfigProviderKey = Symbol(__namespace__ + '__config');

export const ConfigProviderPropsDefault = {
  theme: __UNOTHING__,
  htmlFontSize: 16,
};

export type __TYPE_DEFAULT__ = typeof __DEFAULT__;
export type __TYPE_UNOTHING__ = typeof __UNOTHING__;

export interface ConfigProviderProps {
  theme?: __TYPE_DEFAULT__ | __TYPE_UNOTHING__;
  htmlFontSize?: number;
  size?: 'small' | 'medium' | 'large';
  // disabled?: boolean
}

export interface CommonProps {
  theme?: __TYPE_DEFAULT__ | __TYPE_UNOTHING__;
  size?: 'small' | 'medium' | 'large';
}
