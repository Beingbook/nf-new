import React from 'react';
import { colors, namedColors } from '../../theme/color-util';
import { Typography, Paragraph } from './Typography';

export default {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    controls: {
      include: ['variant', 'color'],
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [...namedColors, ...colors],
      },
    },
  },
};

export const WithArgs = (args: any) => {
  return <Typography {...args}>Hello,<br />beautiful world.</Typography>;
};

export const AsParagraph = () => {
  return <>
    <Paragraph variant="body2" marginBottom={2}>Hello,<br />beautiful world.</Paragraph>
    <Paragraph variant="body2">Hello,<br />beautiful world.</Paragraph>
  </>;
};

WithArgs.args = {
  color: 'blue',
  variant: 'headline2',
};


