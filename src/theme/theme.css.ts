import { createTheme } from '@vanilla-extract/css';

import { colorsFromTokens } from './util';

const color = colorsFromTokens();
export type Color = keyof typeof color;
export const colors = Object.keys(color) as Color[];

export const [themeClass, vars] = createTheme({
  color,
  space: {
    small: '4px',
    medium: '8px',
  },
});

