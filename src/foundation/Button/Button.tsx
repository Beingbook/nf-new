import React from 'react';

import { mergeProps } from '@react-aria/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { Color, vars } from '../../theme/theme.css';
import { buttonRecipe, currentColor, Variants } from './styles.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & Variants & {
  color: Color;
};

export function getProps({ color, size, variant, ...props }: Props) {
  const className = buttonRecipe({ size, variant });
  const style = assignInlineVars({[currentColor]: vars.color[color]});
  return mergeProps(props, {className, style});
}

export function Button(props: Props) {
  return <button {...getProps(props)} />;
}
