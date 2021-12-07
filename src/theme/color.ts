import { vars } from './theme.css';
import { ColorWeightMap, NamedColor, namedColors, NamedColorWeight } from './color-util';
export { NamedColor, namedColors, NamedColorWeight };

type ColorWeights<C extends Color> = C extends NamedColor ? ColorWeightMap[C] : never;
type RgbColor = `#${string}`;

export type Color = RgbColor | NamedColor | NamedColorWeight;

export function getColor<C extends Color>(color: C, weight?: ColorWeights<C>): string {
  if (color in vars.color) {
    return vars.color[color as NamedColorWeight];
  }
  if (`${color}-600` in vars.color) {
    return vars.color[`${color}-600` as NamedColorWeight];
  }
  if (`${color}-100` in vars.color) {
    return vars.color[`${color}-100` as NamedColorWeight];
  }
  if (`${color}-${weight}` in vars.color) {
    return vars.color[`${color}-${weight}` as NamedColorWeight];
  }
  return color;
}
