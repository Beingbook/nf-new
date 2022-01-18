import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { atoms, vars } from '../../theme';

const baseStyle = style({
  fontSize: '12px',
  lineHeight: 1.5,
});

globalStyle(`${baseStyle} th`, {
  textAlign: 'left',
  padding: '8px 32px',
  fontWeight: 'normal',
});
globalStyle(`${baseStyle} td`, {
  padding: '16px 32px',
});

const tableVariants = styleVariants({
  default: {

  },
  simple: {

  },
});

globalStyle(`${tableVariants.simple} thead, ${tableVariants.simple} tfoot`, {
  fontSize: '10px',
  color: vars.color['gray-800'],
  backgroundColor: vars.color['gray-050'],
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
  defaultVariants: {
    variant: 'default',
  },
});

export type Variants = RecipeVariants<typeof tableRecipe>;
