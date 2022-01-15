import { createTheme } from '@vanilla-extract/css';

import { colorMap, namedColorMap } from './color-util';
import { scalePx } from './scale';

const space = {
  'none': scalePx(0),
  'small': scalePx(1),
  'medium': scalePx(2),
  'large': scalePx(4),
};

export const spaces = Object.keys(space) as (keyof typeof space)[];
export type Space = typeof spaces[number];

export const [themeClass, vars] = createTheme({
  color: { ...colorMap, ...namedColorMap },
  space,
});

