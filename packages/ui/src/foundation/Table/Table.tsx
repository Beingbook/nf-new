import React, { ComponentProps } from 'react';

import { mergeProps } from '@react-aria/utils';

import { atoms } from '../../theme';
import { captionRecipe, tableRecipe, Variants } from './styles.css';

type TableProps = ComponentProps<'table'> & Variants;

export function Table({ variant, ...props }: TableProps) {
  const className = tableRecipe({ variant });
  return <table {...mergeProps({ className }, props)} />;
}

export function Head({ sticky, ...props }: ComponentProps<'thead'> & { sticky?: boolean }) {
  const className = sticky ? atoms({ position: 'sticky', top: '0', backgroundColor: 'white' }) : '';
  return <thead {...mergeProps({ className }, props)} />;
}

export function Body(props: ComponentProps<'tbody'>) {
  return <tbody {...props} />;
}

export function Footer({ sticky, ...props }: ComponentProps<'tfoot'> & { sticky?: boolean }) {
  const className = sticky ? atoms({ position: 'sticky', bottom: '0', backgroundColor: 'white' }) : '';
  return <tfoot {...mergeProps({ className }, props)} />;
}

export function Row({ sticky, ...props }: ComponentProps<'tr'> & { sticky?: boolean }) {
  const className = sticky ? atoms({ position: 'sticky', top: '0', backgroundColor: 'white' }) : '';
  return <tr {...mergeProps({ className }, props)} />;
}

export function Cell({ head = false, ...props }: ComponentProps<'td'> & { head?: boolean }) {
  if (head) return <th {...props} />;
  return <td {...props} />;
}

export function Caption({ side = 'top', ...props }: { side?: 'top' | 'bottom' } & ComponentProps<'caption'>) {
  const className = captionRecipe({ side });
  return <caption {...mergeProps({ className }, props)} />;
}
