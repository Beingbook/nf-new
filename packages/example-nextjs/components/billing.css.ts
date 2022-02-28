import { atoms } from '@superb-ai/ui';
import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  maxWidth: 840,
});

export const card = style([
  atoms({ borderRadius: '2px' }),
  {
    boxShadow: 'rgb(0 0 0 / 10%) 2px 4px 10px',
  },
]);

export const usageGrid = style([
  atoms({
    display: 'grid',
    gap: 3,
  }),
  {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
]);