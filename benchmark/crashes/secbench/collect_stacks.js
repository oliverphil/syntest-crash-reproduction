const fs = require("node:fs");
const execSync = require("node:child_process").execSync;

const vulTypes = ['code-injection'];

for (const vulType of vulTypes) {
    const vuls = fs.readdirSync(vulType).filter(file => {
        return fs.statSync(`${vulType}/${file}`).isDirectory();
    });
    console.log(vuls);
    for (const vul of vuls) {
        try {
            execSync(`npm --prefix ${vulType}/${vul} i`);
            execSync(`jest ${vulType}/${vul} >> output.log 2>> stderr.log`);
        } catch (error) {
            // console.log(error);
        }
    }
}
