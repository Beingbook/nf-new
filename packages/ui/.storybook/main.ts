import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|mdx|tsx)"],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => true,
    },
  },
};

module.exports = config;