import { createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles, vars } from '../../theme';

export const buttonColor = createVar();

export const buttonRecipe = recipe({
  base: [sprinkles({
    display: 'inline-flex',
  }),
  {
    background: 'transparent',
    border: 0,
    borderRadius: 2,
    cursor: 'pointer',
    ':hover': {
      outline: '1px solid currentColor',
    },
    color: buttonColor,
    vars: {
      [buttonColor]: vars.color['gray'],
    },
  }],

  variants: {
    size: {
      s: { lineHeight: '24px', padding: '0 8px' },
      m: { lineHeight: '32px', padding: '0 10px' },
      l: { lineHeight: '40px', padding: '0 12px' },
    },
    variant: {
      stroke: { boxShadow: `inset 0 0 1px 1px ${buttonColor}` },
      'strong-fill': { backgroundColor: buttonColor, color: '#fff' },
    },
  },

  defaultVariants: {
    variant: 'stroke',
    size: 'm',
  },
});

export type Variants = RecipeVariants<typeof buttonRecipe>;
