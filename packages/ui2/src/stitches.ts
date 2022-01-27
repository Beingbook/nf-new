import { createStitches } from "@stitches/react";

import { marginHelper, paddingHelper, pxToRem } from "./utils";

import { colors } from "./tokens/colors";
import { space } from "./tokens/space";
import * as fonts from "./tokens/fonts";

const sizes = {
  m: pxToRem(38),
};

export const {
  getCssText,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  styled,
} = createStitches({
  theme: {
    colors,
    space,
    ...fonts,
    sizes,
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      // shadow not defined, just same with NF
      1: `2px 4px 10px rgb(0 0 0 / 10%)`,
    },
    zIndices: {},
    transitions: {
      // not defined, just use material
      standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      decelerated: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      accelerated: "cubic-bezier(0.4, 0.0, 1, 1)",

      long: "200ms",
      common: "150ms",
      short: "100ms",
    },
  },
  utils: {
    ...marginHelper,
    ...paddingHelper,
  },
});
