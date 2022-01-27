import React from 'react';
import { Range } from './Range';

export default {
  title: 'Foundation/Inputs/Range',
  component: Range,
};

export const WithArgs = (args: React.ComponentProps<typeof Range>) => {
  const [value, setValue] = React.useState(args.value);
  const [valueSettled, setValueSettled] = React.useState(args.value);
  return <>
    <Range {...args} value={value} onValueInput={setValue} onValueChange={setValueSettled} />
    {value} {valueSettled}
  </>;
}

WithArgs.args = {
  variant: '',
  color: 'red',
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  minSymbol: '-',
  maxSymbol: '+',
};