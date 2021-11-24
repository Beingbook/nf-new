import tokens from './tokens.json';

type Tokens = typeof tokens;9
type Concat<A extends string, B extends string> = `${Lowercase<A>}-${Lowercase<B>}`;
type Color = keyof Tokens;
type Key = { [K in Color]: K extends string ? keyof Tokens[K] extends string ? Concat<K, keyof Tokens[K]> : K : K }[Color];

export function colorsFromTokens() {
  const colors: Partial<Record<Key, string>> = {};
  for (const [color, colorDef] of Object.entries(tokens)) {
    for (const [weight, weightDef] of Object.entries(colorDef)) {
      const key = `${color.toLowerCase()}-${weight}` as Key;
      colors[key] = weightDef.value;
    }
  }
  return colors as Record<Key, string>;
}