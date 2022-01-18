import { createTheme, globalStyle } from '@vanilla-extract/css';

import { colorMap, namedColorMap } from './color-util';
import { space } from './space';
export type { Space } from './space';
export { spaces } from './space';

export const [themeClass, vars] = createTheme({
  color: { ...colorMap, ...namedColorMap },
  space,
});

globalStyle('body', {
  fontFamily: 'sans-serif',
  WebkitFontSmoothing: 'antialiased',
});