import { composeStyles } from '@vanilla-extract/css';

import React from 'react';
import { atoms, Atoms } from '../../theme';

import * as styles from './styles.css';


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  specialProp: string;
  variant?: keyof typeof styles.variants;
  atomProps?: Atoms;
  className?: string;
}

export function Button({ specialProp, children, variant, atomProps = {}, className = '', ...props }: Props) {
  const classNames = composeStyles(
    atoms({
      display: 'inline-flex',
      padding: 'medium',
      borderColor: 'gray-700',
      ...atomProps,
    }),
    styles.base,
    variant ? styles.variants[variant] : '',
    className,
  );
  return <button {...props} className={classNames}>{children}</button>;
}

