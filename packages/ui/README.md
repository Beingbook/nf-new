# NF new

## Build

    yarn build

This runs `tsup`, which is a wrapper around `esbuild`.

It uses vanilla-extract to extract static css.

This does NOT use Babel.

## Use

    import '@superb-ai/ui/dist/index.css';
    import { Box } from '@superb-ai/ui'

## Storybook

    yarn storybook

Launch storybook. This uses the .babelrc because Storybook is built through Webpack and Babel.
