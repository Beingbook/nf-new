import { style, styleVariants } from '@vanilla-extract/css';

export const base = style({
  background: 'transparent',
  borderWidth: '1px',
  cursor: 'pointer',
  ':hover': {
    outline: '1px solid currentColor'
  }
})

export const variants = styleVariants({
  primary: { background: 'blue' },
  secondary: { background: 'aqua' }
});