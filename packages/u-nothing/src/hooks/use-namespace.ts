import { __namespace__ } from '@u-nothing/config';

export function useNamespace(block: string) {
  const namespace = __namespace__;
  const statePrefix = 'is-';

  const b = () => `${namespace}-${block}`;
  const e = (element: string) => `${b()}__${element}`;
  const m = (modifier: string) => `${b()}--${modifier}`;

  const em = (element: string, modifier: string) => `${e(element)}--${modifier}`;

  const is = (name: string, state: boolean) => (state ? `${statePrefix}${name}` : '');

  return { b, e, m, em, is };
}
