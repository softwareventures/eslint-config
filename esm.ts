import type {Linter} from "eslint";

const config: Linter.Config = {
    extends: "@softwareventures/eslint-config",
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        "@typescript-eslint/no-require-imports": "error"
    }
};

export = config;
