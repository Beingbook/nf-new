import React from 'react';
import cn from 'classnames';

import { buttonRecipe, Variants, currentColor } from './styles.css';
import { Color, vars } from '../../theme/theme.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & Variants & {
  color: Color,
};

export function Button({ color, size, variant, ...props }: Props) {
  const classNames = cn(
    buttonRecipe({ size, variant }),
    props.className,
  );
  const style = {
    ...props.style,
    ...assignInlineVars({[currentColor]: vars.color[color]}),
  }
  return <button {...props} style={style} className={classNames} />;
}
