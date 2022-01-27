import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { atoms, vars } from '../../theme';

const baseStyle = style({
  fontSize: '12px',
  lineHeight: 1.5,
});

globalStyle(`${baseStyle} thead th, ${baseStyle} tfoot td`, {
  textAlign: 'inherit',
  padding: '8px 32px',
  fontWeight: 'normal',
});
globalStyle(`${baseStyle} thead th[align=right], ${baseStyle} tfoot td[align=right]`, {
  textAlign: 'right',
});
globalStyle(`${baseStyle} td`, {
  padding: '16px 32px',
});
globalStyle(`${baseStyle} caption`, {
  fontSize: '14px',
  fontWeight: 'medium',
  padding: '16px 32px',
  textAlign: 'left',
});

const tableVariants = styleVariants({
  simple: {

  },
});

globalStyle(`${tableVariants.simple} thead, ${tableVariants.simple} tfoot`, {
  color: vars.color['gray-800'],
  backgroundColor: vars.color['gray-050'],
});

globalStyle(`${tableVariants.simple} thead`, {
  fontSize: '10px',
});

export const tableRecipe = recipe({
  base: [
    atoms({
      position: 'relative',
      borderCollapse: 'collapse',
      width: '100%',
    }),
    baseStyle,
  ],
  variants: {
    variant: tableVariants,
  },
});

export type Variants = RecipeVariants<typeof tableRecipe>;

export const captionRecipe = recipe({
  base: [
    {
      fontSize: '14px',
      fontWeight: 500,
      padding: '16px 32px',
      textAlign: 'left',
    },
  ],
  variants: {
    side: {
      top: {
        captionSide: 'top',
        borderBottom: `1px solid ${vars.color['gray-080']}`,
      },
      bottom: {
        captionSide: 'bottom',
        borderTop: `1px solid ${vars.color['gray-080']}`,
      },
    },
  },
  defaultVariants: {
    side: 'top',
  },
});
