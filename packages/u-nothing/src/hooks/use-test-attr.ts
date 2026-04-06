export function useTestAttr() {
  const isProd = import.meta.env.PROD;

  const testAttr = (name: string) => {
    return isProd ? {} : { 'data-test': name };
  };

  return { testAttr };
}
