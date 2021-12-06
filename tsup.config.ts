import type { Options } from 'tsup';

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export const tsup: Options = {
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  target: 'es2019',
  entryPoints: ['src/index.ts'],
  esbuildPlugins: [
    vanillaExtractPlugin(),
  ]
}
