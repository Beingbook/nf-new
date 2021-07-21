import { Button } from './Button';

export default {
  title: 'Foundation/Button',
  component: Button,
};

export const WithArgs = (args: any) => <Button {...args}>Button</Button>;
