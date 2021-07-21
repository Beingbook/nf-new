import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Box, atoms } from './Box';
import { spaces, colors } from '../../theme/sprinkles.css';

type SetValue<T extends Set<any>> = T extends Set<infer A> ? A : T;

const p = Array.from(atoms.properties);

const argTypes = p.reduce(
  (all, a) => { all[a] = { table: { category: 'atoms' } }; return all; },
  {} as Record<typeof p, any>
);
argTypes.color.control = {
  type: 'select',
  options: [undefined, ...colors],
}
argTypes.background.control = argTypes.color.control;

export default {
  title: 'Foundation/Box',
  component: Box,
  argTypes,
  parameters: {
    controls: {
      exclude: new RegExp(`^(?!${Array.from(atoms.properties).join('|')})`)
    },
  },
} as ComponentMeta<typeof Box>;

export const WithArgs = (args: any) => <Box {...args}>Content</Box>;

WithArgs.args = Array.from(atoms.properties).reduce(
  (all, a) => { all[a] = undefined; return all; },
  {} as Record<SetValue<typeof atoms.properties>, any>
);