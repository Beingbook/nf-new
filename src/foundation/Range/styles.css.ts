import { createVar, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../../theme";

export const currentValue = createVar();

export const wrap = style({
  display: 'flex',
  alignItems: 'center',
  height: vars.space.medium,
});

export const symbol = style({
  minWidth: vars.space.medium,
  padding: '0 5px',
  boxSizing: 'border-box',
  height: vars.space.medium,
  fontSize: '13px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
});

export const inputRecipe = recipe({
  base: {
    width: '100%',
    height: '3px',
    WebkitAppearance: 'none',
    appearance: 'none',
    cursor: 'pointer',
    background: '#f0f0f0',

    vars: {
      [currentValue]: '0',
    },

    ':focus': {
      outline: 'none',
    },

    selectors: {
      '&::-webkit-slider-thumb': {
        WebkitAppearance: 'none',
        appearance: 'none',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        border: `solid 2px #fff`,
        background: `${vars.color['red-600']}`,
      },
    }
  },
  
  variants: {
    variant: {
      bigThumb: { 
        height: '2px',
        background: `linear-gradient(to right, ${vars.color['red-600']} ${currentValue}, #f0f0f0 0)`,
        selectors: {
          '&::-webkit-slider-thumb': {
            background: '#FFFFFF',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
            width: '16px',
            height: '16px',
          },
        }
      }
    }
  },
});

export type Variants = RecipeVariants<typeof inputRecipe>;

