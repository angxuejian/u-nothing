export function useNamespace(block: string) {
  const namespace = 'u';
  const statePrefix = 'is-';

  const b = () => `${namespace}-${block}`;
  const e = (element: string) => `${b()}__${element}`;
  const m = (modifier: string) => `${b()}--${modifier}`;

  const em = (element: string, modifier: string) => `${e(element)}--${modifier}`;

  const is = (name: string, state: boolean) => (state ? `${statePrefix}${name}` : '');

  return { b, e, m, em, is };
}
