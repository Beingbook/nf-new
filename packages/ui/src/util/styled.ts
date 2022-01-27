/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, createElement, JSXElementConstructor } from 'react';

import { mergeProps } from '@react-aria/utils';
import { CSSProperties } from '@vanilla-extract/css';

export function styled<C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(base: C, className: string, style?: CSSProperties) {
  function StyledComponent(props: ComponentProps<C>) {
    return createElement(base, mergeProps(props as ComponentProps<any>, { className, style }));
  }
  return StyledComponent;
}