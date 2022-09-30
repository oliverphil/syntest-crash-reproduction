import { TransformOptions } from "@babel/core";

export const defaultBabelOptions: TransformOptions = {
  configFile: false,
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  babelrc: false,
  ast: true,
  sourceMaps: true,
  compact: false,
  comments: true,
  parserOpts: {
    allowReturnOutsideFunction: true,
    sourceType: "module",
    plugins: [
      "asyncGenerators",
      "classProperties",
      "dynamicImport",
      "objectRestSpread",
      // "@babel/plugin-transform-typescript",
      // "@babel/plugin-transform-react-jsx",
      // "@babel/plugin-transform-strict-mode",
      // "@babel/plugin-proposal-numeric-separator",
      // "@babel/plugin-transform-literals"
    ],
    strictMode: false,
  },
  plugins: [
    "@babel/plugin-transform-typescript",
    // "@babel/plugin-transform-react-jsx",
    // "@babel/plugin-transform-strict-mode",
    // "@babel/plugin-proposal-numeric-separator",
    //   "@babel/plugin-transform-literals"
  ],
};
