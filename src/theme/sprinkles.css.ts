import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';

/**
 * Maps several keys to the same value
 */
function mapTo<Key extends string, Value>(keys: readonly Key[], value: Value) {
  return Object.fromEntries(keys.map(key => [key, value])) as Record<Key, Value>;
}

const spaceProperties = [
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
  'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
  'gap', 'rowGap', 'columnGap',
] as const;

const layoutStyles = defineProperties({
  properties: {
    display: ['none', 'flex', 'grid', 'block', 'inline', 'inline-flex'],
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    cursor: ['pointer'],
    ...mapTo(spaceProperties, { ... vars.space, auto: 'auto', full: '100%' }),
  },
  shorthands: {
    p: ['padding'],
    ...mapTo(['px', 'paddingX'], ['paddingLeft', 'paddingRight']),
    ...mapTo(['py', 'paddingY'], ['paddingTop', 'paddingBottom']),
    m: ['margin'],
    ...mapTo(['mx', 'marginX'], ['marginLeft', 'marginRight']),
    ...mapTo(['my', 'marginY'], ['marginTop', 'marginBottom']),
  },
});

const colorStyles = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'default',
  properties: {
    ...mapTo(['color', 'borderColor', 'backgroundColor'], vars.color),
  },
});

export const atoms = createSprinkles(layoutStyles, colorStyles);

export type Atoms = Parameters<typeof atoms>[0];