export const __DEFAULT__ = 'browser' as const;
export const __UNOTHING__ = 'ustyle' as const;
export const __SMALL__ = 'small' as const;
export const __MEDIUM__ = 'medium' as const;
export const __LARGE__ = 'large' as const;

export const __namespace__ = 'u';
export const ConfigProviderKey = Symbol(__namespace__ + '__config');

export const ConfigProviderPropsDefault = {
  theme: __UNOTHING__,
  htmlFontSize: 16,
  size: __MEDIUM__,
};

export type __TYPE_DEFAULT__ = typeof __DEFAULT__;
export type __TYPE_UNOTHING__ = typeof __UNOTHING__;
export type __TYPE_SMALL__ = typeof __SMALL__;
export type __TYPE_MEDIUM__ = typeof __MEDIUM__;
export type __TYPE_LARGE__ = typeof __LARGE__;

export interface ConfigProviderProps {
  theme?: __TYPE_DEFAULT__ | __TYPE_UNOTHING__;
  htmlFontSize?: number;
  size?: __TYPE_SMALL__ | __TYPE_MEDIUM__ | __TYPE_LARGE__;
  // disabled?: boolean
}

export interface CommonProps {
  theme?: __TYPE_DEFAULT__ | __TYPE_UNOTHING__;
  size?: __TYPE_SMALL__ | __TYPE_MEDIUM__ | __TYPE_LARGE__;
}
