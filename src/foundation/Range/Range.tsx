import React from 'react';

import { clamp, mergeProps } from '@react-aria/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { currentValue, inputRecipe, symbol, Variants, wrap } from './styles.css';

type Props = React.ComponentProps<'input'> & {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  onValueMouseUp?: (value: number) => void;
  minSymbol?: React.ReactNode;
  maxSymbol?: React.ReactNode;
} & Variants;

export function Range({ variant, onValueChange, onValueMouseUp, minSymbol, maxSymbol, ...props }: Props) {
  const { value, min, max, step = 1 } = props;

  const percentage = Math.abs(value - (min ?? 0)) / Math.abs((max ?? 0) - (min ?? 0));
  const style = assignInlineVars({
    [currentValue]: `${100 * percentage}%`,
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onValueChange?.(Number(e.currentTarget.value));
  }

  function onMouseUp(e: React.ChangeEvent<HTMLInputElement>) {
    onValueMouseUp?.(Number(e.currentTarget.value));
  }

  function getStepClickHandler(change: number) {
    return () => {
      const newValue = clamp((value ?? 0) + change, min, max);
      onValueChange?.(newValue);
    };
  } 

  return <div className={wrap}>
    {minSymbol && (
      <span className={symbol} onClick={getStepClickHandler(-step)}>{minSymbol}</span>
    )}
    <input {...mergeProps(props, {
      type: 'range',
      className: inputRecipe({ variant }),
      style,
      onChange,
      onMouseUp,
    })}
    />
    {maxSymbol && (
      <span className={symbol} onClick={getStepClickHandler(step)}>{maxSymbol}</span>
    )}
  </div>;
}