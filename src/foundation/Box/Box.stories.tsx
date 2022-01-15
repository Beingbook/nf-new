import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Box } from './Box';
import { atoms } from '../../theme';
import { overloadRecipe, overloadStyle } from './Box.stories.css';

const props = Array.from(atoms.properties);

// Set controls
const argTypes = props.reduce(
  (all, a) => { all[a] = { table: { category: 'atoms' } }; return all; },
  {} as Record<(typeof props)[number], any>
);

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

export const BasicUsage = () => <Box p={1} color="blue" backgroundColor="gray-060">Hello, world!</Box>;

export const StyleWithConditions = () => <Box p={1} color="blue" cursor="pointer" backgroundColor={{
  default: 'gray-060', hover: 'gray-100'
}}>Some atomic styles can be defined conditionally, e.g. for hover effects.</Box>;

/**
 * Combining sprinkles and a recipe can be useful.
 */
export const StyleWithRecipe = () => {
  const className = overloadRecipe();
  return <Box p={1} color="blue" className={className}>For biggest flexibility, define a recipe.</Box >;
};

/**
 * Using sprinkles like this is unnecessary for Box, you can just pass the properties to the Box component.
 * But this can be a useful example for other components.
 */
export const StyleWithAtoms = () => {
  const className = atoms({
    display: 'flex',
    justifyContent: 'center',
    padding: 'medium', // this overrides the Box prop
    backgroundColor: {
      hover: 'blue-050', // this overrides the Box prop on hover
    },
  });
  return <Box p={1} color="blue" backgroundColor="gray-060" className={className}>Use atoms directly.</Box>;
};

/**
 * Setting custom styles manually is also possible.
 */
export const StyleCustom = () => {
  return <Box p={1} color="blue" backgroundColor="gray-060" className={overloadStyle}>Define custom styles.</Box>;
};
