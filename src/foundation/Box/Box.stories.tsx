import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Box, atoms } from './Box';
import { namedColors as colors } from '../../theme/color-util';
import { spaces } from '../../theme';

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
      include: props,
    },
  },
} as ComponentMeta<typeof Box>;

export const WithArgs = (args: any) => <Box {...args}>Content</Box>;
