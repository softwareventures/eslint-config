import {Linter} from "eslint";

const config: Linter.Config = {
    env: {
        node: true
    },
    extends: ["eslint:recommended", "prettier"],
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier/@typescript-eslint"
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json",
                sourceType: "module"
            }
        }
    ]
};

export = config;
