import { createVar, style } from "@vanilla-extract/css";
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

export const input = style({
  width: '100%',
  WebkitAppearance: 'none',
  appearance: 'none',
  cursor: 'pointer',

  vars: {
    [currentValue]: '0',
  },


  height: '2px',
  background: `linear-gradient(to right, ${vars.color.brand} ${currentValue}, #f0f0f0 0)`,

  ':focus': {
    outline: 'none',
  },

  selectors: {
    '&:-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      appearance: 'none',
      borderRadius: '50%',
      border: `solid 2px ${vars.color.brand}`,
      background: vars.color.white,
      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
      width: '16px',
      height: '16px',
    },
  }
});

