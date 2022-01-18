import React from 'react';

import { mergeProps } from '@react-aria/utils';

import { atoms, Color } from '../../theme';
import { Box } from '../Box/Box';
import { typoRecipe, Variants } from './styles.css';

type TypoProps = Variants & { color?: Color };
type Props = Omit<React.ComponentProps<'span'>, 'color'> & TypoProps;
type ParagraphProps = Omit<React.ComponentProps<typeof Box>, 'color'> & TypoProps;

function getProps({ variant, color }: Props) {
  return mergeProps(
    { className: typoRecipe({ variant }) },
    color ? { className: atoms({ color }) } : {},
  );
}

/**
 * Typography is for text. It's a `<span>` with typo-related styling.
 */
export function Typography({ variant, color, ...props }: Props) {
  return <span {...mergeProps(props, getProps({ variant, color }))} />;
}

/**
 * Paragraph supports all props from Box and Typography
 */
export function Paragraph({ color, variant, ...props }: ParagraphProps) {
  return <Box as="p" {...mergeProps(props, getProps({ variant, color }))} />;
}