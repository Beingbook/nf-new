import { createTheme } from '@vanilla-extract/css';

import { colorMap } from './color-util';

export const [themeClass, vars] = createTheme({
  color: colorMap,
  space: {
    small: '4px',
    medium: '8px',
  },
});

