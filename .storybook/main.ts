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
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
        offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },

};

module.exports = config;