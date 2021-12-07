import { namedColors } from '../../theme';
import { Button } from './Button';

export default {
  title: 'Foundation/Inputs/Button',
  component: Button,
};

export const WithArgs = (args: any) => <Button {...args}>Button</Button>;

WithArgs.args = {
  color: 'red',
  size: 'm',
  variant: 'stroke',
};

