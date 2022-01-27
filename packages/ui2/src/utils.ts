import type * as Stitches from "@stitches/react";

export const pxToRem = (px: number) => {
  return `${px / 16}rem`;
};

export const marginHelper = {
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
};

export const paddingHelper = {
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
};
