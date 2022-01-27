import { defineConfig } from "tsup";

import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  splitting: true,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  target: ["chrome64", "edge79", "firefox62", "safari11.1"],
  entryPoints: ["src/index.ts"],
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: process.env.NODE_ENV === "production" ? "short" : "debug",
    }),
  ],
});
