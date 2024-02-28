## BugsJS Crash Collection

Checkout BugsJS from [here](https://github.com/BugsJS/bug-dataset).  
Copy `create_crashes.js` and `extract_crashes.js` to the BugsJS directory.  
Run `node extract_crashes.js` in the BugsJS directory.
This will run the buggy versions of the tests for each BugsJS bug and output the results, including stack traces.  
Run `node create_crashes.js` to create the crash folder and crashes for CrashJS from the BugsJS data.
