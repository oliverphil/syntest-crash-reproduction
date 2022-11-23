import { TransformOptions, transformSync } from "@babel/core";
import { Visitor } from "./Visitor";
import { defaultBabelOptions } from "../configs/DefaultBabelConfig";
import * as path from "path";
import { Properties } from "@syntest/framework";
const globby = require('globby');

export interface OutputObject {
  fileCoverage?: any;
  sourceMappingURL?: any;
}

export class Instrumenter {
  instrument(code: string, filename: string) {
    const options = JSON.parse(JSON.stringify(defaultBabelOptions)) ;

    let output: OutputObject = {};

    options.filename = filename;
    options.plugins.push([
      ({ types }) => {
        const ee = new Visitor(types, filename, {
          coverageVariable: "__coverage__",
          // reportLogic: opts.reportLogic,
          // coverageGlobalScope: opts.coverageGlobalScope,
          // coverageGlobalScopeFunc: opts.coverageGlobalScopeFunc,
          ignoreClassMethods: [],
          // inputSourceMap
        });

        return {
          visitor: {
            Program: {
              enter: (path) => ee.enter(path),
              exit(path) {
                output = ee.exit(path);
              },
            },
          },
        };
      },
    ]);

    // if (Properties.exclude.includes(options.filename) || !Properties.include.includes(options.filename)) {
    //   return;
    // }
    // console.log(options.filename);
    // for (const ex of Properties.exclude) {
    //   if (options.filename.includes(ex)) {
    //     return;
    //   }
    // }
    // for (const inc of Properties.include) {
    //   if (!options.filename.includes(inc)) {
    //     return;
    //   }
    // }
    if (code.includes('etch.dom')) {
      return;
    }

    const codeMap = transformSync(code, options);

    if (!output || !output.fileCoverage) {
      return code;
    }

    return codeMap.code;
  }
}
