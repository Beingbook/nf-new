import { createTheme } from '@vanilla-extract/css';

import { colorMap, namedColorMap } from './color-util';
import { space } from './space';
export { Space, spaces } from './space';

export const [themeClass, vars] = createTheme({
  color: { ...colorMap, ...namedColorMap },
  space,
});

