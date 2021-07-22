import React from 'react';
import cn from 'classnames';
import { createInlineTheme } from '@vanilla-extract/dynamic';

import * as classes from './styles.css';
import { currentValue } from './styles.css';

interface Props extends React.ButtonHTMLAttributes<HTMLInputElement> {
  value: number;
  min?: number;
  max?: number;
  onValueChange?: (value: number) => void;
}

export function Range({ value, min, max, onChange, onValueChange, ...props }: Props) {
  const percentage = Math.abs(value - (min ?? 0)) / Math.abs((max ?? 0) - (min ?? 0));

  const dynamicStyles = createInlineTheme({
    currentValue,
  }, {
    currentValue: `${100 * percentage}%`,
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onValueChange) {
      onValueChange(Number(e.currentTarget.value));
    }
    if (onChange) {
      onChange(e);
    }
  }

  return <div className={classes.wrap}>
    <input
      {...props}
      value={value}
      type="range"
      className={cn(classes.input, props.className)}
      style={dynamicStyles}
      onChange={handleOnChange}
    />
  </div>;
}