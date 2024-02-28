## SecBench.js Crash Collection

Checkout SecBench.js from [here](https://github.com/TQRG/secbench).  
Copy `collect_stacks.js` and `create_crashes.js` to the SecBench.js folder.  
Run `node collect_stacks.js` in the SecBench.js folder to run the SecBench.js tests for the code injection vulnerabilities.
This will create `output.log` and `stderr.log` which contain the execution information from the SecBench.js tests.  
Run `node create_crashes.js` in the SecBench.js folder.
This will parse `output.log` and create the crash folder for SecBench.js crashes for CrashJS.
