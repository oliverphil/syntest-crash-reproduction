import * as fs from "fs";

const functions = [
    "stackMatchWrongCrash",
    "rightExceptionRaisedOnRightLineFuzzy",
    // "rightExceptionRaisedInWrongFunction",
    // "rightExceptionRaisedOnRightLine",
    "rightExceptionRaisedFuzzy",
    // "rightExceptionRaised",
    "rightExceptionInNeighbouringFunction",
    "checkExceptionLineCovered",
    "rightExceptionPartialStackTraceMatch",
    "rightExceptionRaisedInWrongFunctionFuzzy"
];

const permutations = [];
let notUsedFunctions = [...functions];

let permCSV = '';

for (const i of functions) {
    notUsedFunctions = notUsedFunctions.filter(f => f !== i);
    let innerNotUsedFunctions = [...notUsedFunctions];
    for (const j of notUsedFunctions) {
        innerNotUsedFunctions = innerNotUsedFunctions.filter(f => f !== j);
        for (const k of innerNotUsedFunctions) {
            const x = i.replaceAll('Fuzzy', '');
            const y = j.replaceAll('Fuzzy', '');
            const z = k.replaceAll('Fuzzy', '');
            if (x.includes(y) || x.includes(z) || y.includes(x) || y.includes(z) || z.includes(x) || z.includes(y)
            || x === y || x === z || y === z) {
                console.log(`Removing ${i}, ${j}, ${k} combination as dominated`);
                continue;
            }
            permutations.push([i, j, k]);
            console.log(i, j, k);
            permCSV += `${i}, ${j}, ${k}\n`;
        }
    }
}
console.log(permutations.length);
fs.writeFileSync('permutations.json', JSON.stringify(permutations, undefined, 4));
fs.writeFileSync('permutations.csv', permCSV);

