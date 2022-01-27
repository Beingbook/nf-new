import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const pxToRem = (px: number) => {
  return `${px / 16}rem`;
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
    colors: {
      // red
      red50: "#FFF6F6",
      red100: "#FFECEC",
      red200: "#FFDADA",
      red300: "#FFBCBC",
      red400: "#FF9EA7",
      red500: "#FF828A",
      red600: "#FF625A",
      red700: "#FF4539",
      red800: "#E53D30",
      red900: "#C23C33",

      // orange
      orange50: "#FFF8F4",
      orange100: "#FFF4ED",
      orange200: "#FFEADD",
      orange300: "#FFDBC5",
      orange400: "#FDCDB0",
      orange500: "#FFB692",
      orange600: "#FE9573",
      orange700: "#FF8041",
      orange800: "#FF681D",
      orange900: "#E65400",

      // blue
      blue50: "#F3F5FF",
      blue100: "#E6EBFF",
      blue200: "#D6DEFD",
      blue300: "#BECAFC",
      blue400: "#A3B6FE",
      blue500: "#7691FF",
      blue600: "#5A7BFF",
      blue700: "#2A42E4",
      blue800: "#1226AA",
      blue900: "#0F206C",

      // gray
      gray50: "#FBFBFB",
      gray60: "#F3F3F3",
      gray80: "#E5E5E5",
      gray100: "#D4D4D4",
      gray200: "#BCBCBC",
      gray300: "#ADADAD",
      gray400: "#929292",
      gray500: "#7B7B7B",
      gray600: "#6E6E6E",
      gray700: "#555555",
      gray800: "#333333",
      gray900: "#101010",

      backgroundColor: "#fff",
      primary: "$red600",
    },
    space: {
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
    },
    fontSizes: {
      "3xl": pxToRem(48),
      "2xl": pxToRem(36),
      xl: pxToRem(24),
      l: pxToRem(18),
      m: pxToRem(16),
      s: pxToRem(14),
      xs: pxToRem(12),
      "2xs": pxToRem(11),
      "3xs": pxToRem(10),
      tiny: pxToRem(8),
    },
    fonts: {
      inter: "Inter, sans-serif",
    },
    fontWeights: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeights: {
      headline: "120%",
      body: "150%",
    },
    letterSpacings: {},
    sizes: {
      m: pxToRem(38),
    },
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
    // margin helper
    m: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mr: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),

    // padding helper
    p: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    pr: (value: Stitches.PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pt: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pb: (value: Stitches.PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
  },
});
