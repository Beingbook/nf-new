import React from 'react';

import { mergeProps } from '@react-aria/utils';

import { Box } from '../Box/Box';
import { typoRecipe, Variants } from './styles.css';

type Props = React.ComponentProps<typeof Box> & Variants;

/**
 * Typography is a `<span>` with a variant and support for all props from Box
 */
export function Typography({ variant, ...props }: Props) {
  return <Box as="span" {...mergeProps(props, { className: typoRecipe({ variant }) })} />;
}

/**
 * Paragraph is a `<p>` with a variant and support for all props from Box
 */
export function Paragraph({ variant, ...props }: Props) {
  return <Box as="p" {...mergeProps(props, { className: typoRecipe({ variant }) })} />;
}