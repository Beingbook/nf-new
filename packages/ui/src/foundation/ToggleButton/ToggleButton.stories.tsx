import React from 'react';
import { ToggleButton } from './ToggleButton';

export default {
  title: 'Foundation/Inputs/ToggleButton',
  component: ToggleButton,
};

export const WithArgs = (args: any) => {
  const [checked, setChecked] = React.useState(false);
  return <ToggleButton checked={checked} onChange={() => setChecked(!checked)} {...args} />;
};

WithArgs.args = {
  color: 'red',
  size: 'm',
  variant: 'strong-fill',
};


