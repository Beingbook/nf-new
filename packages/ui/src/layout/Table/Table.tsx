import { ComponentProps } from 'react';

import { atoms } from '../../theme';
import { styled } from '../../util/styled';
import { captionRecipe, tableRecipe, Variants } from './styles.css';

const stickyTop = ({ sticky }: { sticky?: boolean }) => sticky ? atoms({ position: 'sticky', top: '0', backgroundColor: 'white' }) : '';
const stickyBottom = ({ sticky }: { sticky?: boolean }) => sticky ? atoms({ position: 'sticky', bottom: '0', backgroundColor: 'white' }) : '';

export const Table = styled('table', ({ variant }: ComponentProps<'table'> & Variants) => tableRecipe({ variant }));

export const Head = styled('thead', stickyTop);

export const Body = styled('tbody');

export const Footer = styled('tfoot', stickyBottom);

export const Row = styled('tr', stickyTop);

export const Cell = styled('td');

export const HeadCell = styled('th');

export const Caption = styled('caption', ({ side }: ComponentProps<'caption'> & { side?: 'top' | 'bottom' }) => captionRecipe({ side }));
