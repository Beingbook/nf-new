import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { mergeProps } from '@react-aria/utils';

import { buttonRecipe, Variants, currentColor } from './styles.css';
import { Color, vars } from '../../theme/theme.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & Variants & {
  color: Color;
};

export function Button({ color, size, variant, ...props }: Props) {
  const className = buttonRecipe({ size, variant });
  const style = assignInlineVars({[currentColor]: vars.color[color]});
  return <button {...mergeProps(props, {className, style})} />;
}
