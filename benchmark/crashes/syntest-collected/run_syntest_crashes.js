const fs = require('fs');
const {SilentMochaReporter} = require("../libraries/search-javascript");
const Mocha = require("mocha");
const execSync = require('child_process').execSync;

async function main()  {
    for (const project of fs.readdirSync('.')
        .filter(item => fs.statSync(`${item}`).isDirectory())) {
        for (const crash of fs.readdirSync(`${project}`)
            .filter(item => item !== 'instrumented')) {
            try {
                const argv = {
                    reporter: undefined,
                    timeout: 5000
                };

                const mocha = new Mocha(argv); // require('ts-node/register')
                // eslint-disable-next-line unicorn/prefer-module
                require("regenerator-runtime/runtime");
                // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
                require("@babel/register")({
                    // eslint-disable-next-line unicorn/prefer-module
                    presets: [require.resolve("@babel/preset-env")],
                });

                mocha.addFile(`${project}/${crash}/${crash}.spec.js`);

                let runner;

                // Finally, run mocha.
                await new Promise((resolve) => {
                    runner = mocha.run((failures) => resolve(failures));
                });
                const stack = runner.suite.suites[0].tests[0].err.stack;
                fs.writeFileSync(`${project}/${crash}/${crash}-output.log`, stack);
            } catch (e) {
                console.log(e);
            }
        }
    }
}

main()
