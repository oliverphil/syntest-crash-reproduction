import { TransformOptions } from "@babel/core";

export const defaultBabelOptions: TransformOptions = {
  configFile: false,
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react",
    // "babel-preset-atomic",
  ],
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
      "objectRestSpread"
    ],
    strictMode: false,
  },
  plugins: [
    "@babel/plugin-transform-typescript",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-react-inline-elements",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-strict-mode"
  ],
  exclude: [
    // "gatsby-browser.js",
    // "gatsby-ssr.js",
    // "Accordion.js",
    // "./benchmark/crashes/**/npm/docs/**/*.js"
  ]
};
