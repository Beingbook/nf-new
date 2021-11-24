import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const space = {
  'none': 0,
  'small': '4px',
  'medium': '8px',
  'large': '16px',
};

export const spaces = Object.keys(space) as (keyof typeof space)[];
export type Space = typeof spaces[number];

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-flex'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  }
});

const colorStyles = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color,
    borderColor: vars.color,
    background: vars.color,
  }
});

export const sprinkles = createSprinkles(colorStyles, responsiveStyles);

export type Atoms = Parameters<typeof sprinkles>[0];