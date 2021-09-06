import type {Linter} from "eslint";

const config: Linter.Config = {
    extends: "@softwareventures/eslint-config",
    rules: {
        "@typescript-eslint/no-require-imports": "error"
    }
};

export = config;
