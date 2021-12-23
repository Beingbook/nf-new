import { createTheme } from '@vanilla-extract/css';

import { colorMap, namedColorMap } from './color-util';

const space = {
  'none': '0px',
  'small': '4px',
  'medium': '8px',
  'large': '16px',
};

export const spaces = Object.keys(space) as (keyof typeof space)[];
export type Space = typeof spaces[number];

export const [themeClass, vars] = createTheme({
  color: { ...colorMap, ...namedColorMap },
  space,
});

