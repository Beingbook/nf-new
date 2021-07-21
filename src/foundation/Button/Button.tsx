import { composeStyles, styleVariants } from '@vanilla-extract/css';

import React from 'react';
import { atoms } from '../../theme';

import * as styles from './styles.css';


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  specialProp: string;
  variant?: keyof typeof styles.variants;
}

export function Button({ specialProp, children, variant, ...props }: Props) {
  const className = composeStyles(
    atoms({
      display: 'inline-flex',
      padding: 'medium',
      borderColor: 'gray-700',
    }),
    styles.base,
    variant ? styles.variants[variant] : '',
  );
  return <button {...props} className={className}>{children}</button>;
}

