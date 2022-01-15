import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Box } from './Box';
import { namedColors as colors } from '../../theme/color-util';
import { spaces, atoms } from '../../theme';
import { overloadRecipe, overloadStyle } from './Box.stories.css';

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

export const WithArgs = (args: any) => <Box {...args}>Welcome to the box! Box can be used to abstract certain often-used style properties.</Box>;

export const BasicUsage = () => <Box p={1} color="blue" background="gray-060">Hello, world!</Box>;

/**
 * Combining sprinkles and a recipe can be useful.
 */
export const StyleRecipe = () => {
  const className = overloadRecipe();
  return <Box p={1} color="blue" background="gray-060" className={className}>Hello, world!</Box>;
};

/**
 * Using sprinkles like this is unnecessary for Box, you can just pass the properties to the Box component.
 * But this is can be a useful example for other components.
 */
export const StyleAtoms = () => {
  const className = atoms({
    display: 'flex',
    justifyContent: 'center',
    padding: 'medium',
  });
  return <Box p={1} color="blue" background="gray-060" className={className}>Hello, world!</Box>;
};

/**
 * Setting custom styles manually is also possible.
 */
export const StyleCustom = () => {
  return <Box p={1} color="blue" background="gray-060" className={overloadStyle}>Hello, world!</Box>;
};
