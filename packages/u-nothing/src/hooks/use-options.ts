import { __namespace__ } from '@u-nothing/config';

export function useOptions(name: string) {
  const logo = __namespace__;
  return `${logo}__${name}`;
}

export function useCssVar(name: string) {
  return `--${__namespace__}-${name}`;
}

export function useStyle(name: string, value: string) {
  return {
    [useCssVar(name)]: value,
  };
}
