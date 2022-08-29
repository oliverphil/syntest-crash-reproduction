import fs from 'fs';

const run = async () => {
  const files = JSON.parse(fs.readFileSync('files.json').toString());
  for (const file of files) {
    console.log(`Parsing file: ${file}`);
    console.log(`**Start Function List for ${file}**`);
    try {
      const imp = await import(file);
      const properties = Object.getOwnPropertyNames(imp.default);
      properties.push(...Object.getOwnPropertyNames(imp.default.prototype));
      properties.forEach(property => {
        const prop = imp.default[property] || imp.default.prototype[property];
        if (typeof imp.default[property] === 'function' || typeof imp.default.prototype[property] === 'function') {
          console.log(`${property}:${prop.length}`);
        }
      });
    } catch (e) {
      console.log(`**Failed Reading Function List for ${file}**`);
      console.log(e);
      continue;
    }
    console.log(`**End Function List for ${file}**`);
  }
}

run().then(() => process.exit());
