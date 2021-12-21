import React from 'react';

import { mergeProps } from '@react-aria/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { getColor, NamedColor } from '../../theme';
import { buttonRecipe, currentColor, Variants } from './styles.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & Variants & {
  color: NamedColor;
};

export function getButtonProps({ color, size, variant, ...props }: Props) {
  const className = buttonRecipe({ size, variant });
  const style = assignInlineVars({ [currentColor]: getColor(color) });
  return mergeProps(props, { className, style });
}

export function Button(props: Props) {
  return <button {...getButtonProps(props)} />;
}
