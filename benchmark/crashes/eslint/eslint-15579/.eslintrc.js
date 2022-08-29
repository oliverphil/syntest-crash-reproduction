module.exports = {
    "extends": [
        "hardcore/ts"
    ],
    "parserOptions": {
    "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/no-magic-numbers": [
            "error",
            { "ignore": [ "0.5" ] }
        ]
    }
}
