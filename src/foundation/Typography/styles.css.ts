import { createStyleObject } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/inter';
import { styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

/**
 * Calculate properties for correct leading. See https://seek-oss.github.io/capsize/
 */
function capSize(fontSize: number, leading: number) {
  return createStyleObject({
    fontSize,
    leading,
    fontMetrics,
  });
}

export const typoVariants = styleVariants({
  body1: { fontSize: 16, lineHeight: 1.5 },
  body2: { fontSize: 14, lineHeight: 1.5 },
  body3: { fontSize: 12, lineHeight: 1.5 },
  body4: { fontSize: 11, lineHeight: 1.5 },
  body5: { fontSize: 10, lineHeight: 1.5 },
  body6: { fontSize: 8, lineHeight: 1.5 },

  bold1: { fontSize: 16, lineHeight: 1.5, fontWeight: 600 },
  bold2: { fontSize: 14, lineHeight: 1.5, fontWeight: 600 },
  bold3: { fontSize: 12, lineHeight: 1.5, fontWeight: 600 },
  bold4: { fontSize: 11, lineHeight: 1.5, fontWeight: 600 },
  bold5: { fontSize: 10, lineHeight: 1.5, fontWeight: 600 },
  bold6: { fontSize: 8, lineHeight: 1.5, fontWeight: 600 },

  headline1: { ...capSize(48, 56), fontWeight: 600 },
  headline2: { ...capSize(36, 40), fontWeight: 600 },
  headline3: { ...capSize(24, 32), fontWeight: 600 },
  headline4: { ...capSize(18, 24), fontWeight: 500 },
  headline5: { ...capSize(16, 24), fontWeight: 500 },
  headline6: { ...capSize(14, 16), fontWeight: 500 },
  headline7: { ...capSize(12, 16), fontWeight: 500 },
  headline8: { ...capSize(10, 16), fontWeight: 500 },

  label: { ...capSize(12, 16), fontWeight: 500 },
});


export const typoRecipe = recipe({
  base: [],
  variants: {
    variant: typoVariants,
    defaultVariants: {
      variant: 'body4',
    },
  },
});

export type Variants = RecipeVariants<typeof typoRecipe>;
