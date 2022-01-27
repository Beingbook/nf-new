import { pxToRem } from "../utils";

export const space = {
  // since we cannot use '.' in CSS variable identifier, use '_' as an alternative
  "0_25": pxToRem(2),
  "0_5": pxToRem(4),
  "1": pxToRem(8),
  "1_5": pxToRem(12),
  "2": pxToRem(16),
  "3": pxToRem(24),
  "4": pxToRem(32),
  "5": pxToRem(40),
  "6": pxToRem(48),

  // semantic alias
  xs: "$0_25",
  s: "$0_5",
  m: "$1",
  ml: "$1_5",
  l: "$2",
  xl: "$3",
  "2xl": "$4",
  "3xl": "$5",
  "4xl": "$6",
};
