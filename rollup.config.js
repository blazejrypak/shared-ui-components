// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from 'rollup-plugin-typescript2'

const packageJson = require("./package.json");

export default [
    {
      input: "src/index.ts",
      preserveModules: true,
      output: [
        {
          file: packageJson.main,
          format: "cjs",
          sourcemap: true,
          exports: "auto",
        },
        {
          file: packageJson.module,
          format: "esm",
          sourcemap: true,
          exports: "auto",
        },
      ],
      plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
          rollupCommonJSResolveHack: false,
          clean: true,
        }),
        terser(),
      ],
      external: ["react", "react-dom"],
    },
    {
      input: "src/index.ts",
      output: [{ file: "dist/types.d.ts", format: "es" }],
      plugins: [dts.default()],
    },
  ];