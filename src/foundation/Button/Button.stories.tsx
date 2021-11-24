import { colors } from '../../theme/theme.css';
import { Button } from './Button';

export default {
  title: 'Foundation/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
};

export const WithArgs = (args: any) => <Button {...args}>Button</Button>;

WithArgs.args = {
  color: 'red-600',
  size: 'm',
  variant: 'stroke',
};

