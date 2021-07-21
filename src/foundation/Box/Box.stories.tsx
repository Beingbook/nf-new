import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Box, atoms } from './Box';
import { spaces, colors } from '../../theme/sprinkles.css';

const props = Array.from(atoms.properties);

// Set controls
const argTypes = props.reduce(
  (all, a) => { all[a] = { table: { category: 'atoms' } }; return all; },
  {} as Record<(typeof props)[number], any>
);
argTypes.color.control = {
  type: 'select',
  options: [undefined, ...colors],
}
argTypes.background.control = argTypes.color.control;
argTypes.borderColor.control = argTypes.color.control;
argTypes.padding.control = {
  type: 'select',
  options: [undefined, ...spaces],
}

export default {
  title: 'Foundation/Box',
  component: Box,
  argTypes,
  parameters: {
    controls: {
      // Let's hide the non-atoms props since those are rarely useful in Storybook
      include: new RegExp(`^(${props.join('|')})`)
    },
  },
} as ComponentMeta<typeof Box>;

export const WithArgs = (args: any) => <Box {...args}>Content</Box>;

/*
WithArgs.args = props.reduce(
  (all, a) => { all[a] = undefined; return all; },
  {} as Record<SetValue<typeof atoms.properties>, any>
);
*/