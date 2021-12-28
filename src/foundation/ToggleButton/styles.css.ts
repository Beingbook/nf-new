
import { createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles, vars } from '../../theme';

export const buttonColor = createVar();

export const toggleButtonRecipe = recipe({
  base: [sprinkles({
    display: 'inline-flex',
  }),
  {
    background: 'transparent',
    appearance: 'none',
    border: 0,
    borderRadius: '1em',
    height: '1em',
    width: '1.8333333em',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    position: 'relative',
    flex: 'flex: 0 0 1.8333333em',
    opacity: '0.9',
    selectors: {
      '&:before': {
        content: '\'\'',
        display: 'block',
        width: '0.8em',
        height: '0.8em',
        borderRadius: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        left: '0.1em',
        top: '0.1em',
        transition: 'all 0.1s',
      },
      '&:checked:before': {
        left: '0.9333em',
      },
      '&:disabled': {
        opacity: '0.7',
      },
      '&:hover:not(:disabled)': {
        opacity: '1',
      },
    },
    color: buttonColor,
    vars: {
      [buttonColor]: vars.color['gray'],
    },
  }],

  variants: {
    size: {
      s: { fontSize: '16px' },
      m: { fontSize: '20px' },
      l: { fontSize: '24px' },
    },
    variant: {
      stroke: { boxShadow: `inset 0 0 1px 1px ${buttonColor}`, ':before': { backgroundColor: buttonColor } },
      'strong-fill': { backgroundColor: buttonColor },
    },
  },

  defaultVariants: {
    variant: 'strong-fill',
    size: 'm',
  },
});

export type Variants = RecipeVariants<typeof toggleButtonRecipe>;



/*const toggleButtonBaseStyles = css`

export const toggleButtonColorStyles = memoize(
[WeakMap, Map],
(theme: ModeSelectedThemeType, color: DefaultColor = 'primary') => {
  const [selectedColor, darkenColor] = getColors(theme.palette, color);
  return css`
    background-color: ${selectedColor};
    &:hover,
    &:focus-visible {
      background-color: ${darkenColor};
    }
  `;
},
);

*/