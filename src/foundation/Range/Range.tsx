import React from 'react';
import cn from 'classnames';
import { createInlineTheme } from '@vanilla-extract/dynamic';

import * as classes from './styles.css';
import { currentValue } from './styles.css';

interface Props extends React.ComponentProps<'input'> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

export function Range({ onChange, onValueChange, ...inputProps }: Props) {
  const { value, min, max } = inputProps;
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
      {...inputProps}
      type="range"
      className={cn(classes.input, inputProps.className)}
      style={dynamicStyles}
      onChange={handleOnChange}
    />
  </div>;
}