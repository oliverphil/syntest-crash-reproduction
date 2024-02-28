## Syntest-JavaScript Crashes

Clone Syntest-JavaScript and Syntest-Framework from [here](https://github.com/syntest-framework).  
Checkout commit 0b10ffc24438b15514afbf89690b01bf87c39c9b for Syntest-JavaScript  
Checkout commit f60c1efdd83a047aabc820f3cc673ddc2c4f393b for Syntest-Framework
Follow the Syntest-JavaScript README.md to correctly set up the tool.  
Add `retainLines: true` to `syntest-javascript/libraries/analysis-javascript/lib/ast/defaultBabelConfig.ts`  
Add the following code to `libraries/search-javascript/lib/testcase/execution/JavaScriptRunner.ts` after the line `const test = suites[0].tests[0];` (line 161):
```typescript
if (test.error) {
    console.log("Start Error");
    console.log(test.error.stack);
    console.log("Start Test");
    console.log(decodedTestCase);
    console.log("End Test");
    console.log("End Error");
}
```
Run `npm run build` for each project.  
Run `npx syntest javascript test > output.log 2> stderr.log` to collect the crashes from the tool for each of the projects in syntest-javascript-benchmark. 
This will require manually copying the setup from the [repository](https://github.com/syntest-framework/syntest-javascript-benchmark) to the `.syntest.json` file in syntest-javascript.  
Run `node generateCrashDataFromSyntestOutput.mjs` to create the crash files for CrashJS.
