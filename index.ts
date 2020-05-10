import {Linter} from "eslint";

const config: Linter.Config = {
    env: {
        node: true
    },
    extends: ["eslint:recommended", "prettier"],
    plugins: ["@typescript-eslint", "import", "jsdoc", "prefer-arrow", "@typescript-eslint/tslint"],
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
            },
            rules: {
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        default: "array-simple"
                    }
                ],
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        types: {
                            Object: {
                                message:
                                    "Do not use the `Object` type. Did you mean `object` or `Record<string, any>`?",
                                fixWith: "object"
                            },
                            Function: {
                                message:
                                    "Do not use the `Function` type. Prefer a specific function type, like `() => void`.",
                                fixWith: "() => void"
                            },
                            Boolean: {
                                message: "Use boolean instead",
                                fixWith: "boolean"
                            },
                            Number: {
                                message: "Use number instead",
                                fixWith: "number"
                            },
                            String: {
                                message: "Use string instead",
                                fixWith: "string"
                            },
                            Symbol: {
                                message: "Use symbol instead",
                                fixWith: "symbol"
                            }
                        }
                    }
                ],
                "@typescript-eslint/explicit-function-return-type": "error",
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        accessibility: "explicit"
                    }
                ],
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/member-delimiter-style": [
                    "error",
                    {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: false
                        }
                    }
                ],
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-extraneous-class": "error",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/prefer-for-of": "off",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        path: "always",
                        types: "prefer-import",
                        lib: "always"
                    }
                ],
                "@typescript-eslint/unbound-method": "error",
                "@typescript-eslint/unified-signatures": "error",
                "arrow-body-style": "error",
                "arrow-parens": ["off", "always"],
                "brace-style": ["error", "1tbs"],
                "class-methods-use-this": "error",
                "comma-dangle": "error",
                "complexity": "off",
                "curly": "error",
                "dot-notation": "error",
                "eqeqeq": ["error", "smart"],
                "guard-for-in": "error",
                "id-blacklist": "error",
                "id-match": "error",
                "import/no-extraneous-dependencies": "error",
                "import/order": "error",
                "jsdoc/check-alignment": "error",
                "jsdoc/check-indentation": "error",
                "jsdoc/newline-after-description": "error",
                "jsdoc/no-types": "error",
                "max-classes-per-file": "off",
                "new-parens": "error",
                "no-caller": "error",
                "no-duplicate-imports": "error",
                "no-empty": "off",
                "no-eval": "error",
                "no-extra-bind": "error",
                "no-irregular-whitespace": "error",
                "no-new-func": "error",
                "no-new-wrappers": "error",
                "no-proto": "error",
                "no-return-await": "error",
                "no-script-url": "error",
                "no-self-compare": "error",
                "no-throw-literal": "error",
                "no-undef-init": "error",
                "no-underscore-dangle": "error",
                "no-unused-expressions": "error",
                "no-useless-constructor": "error",
                "no-void": "error",
                "object-shorthand": "error",
                "one-var": ["error", "never"],
                "prefer-arrow/prefer-arrow-functions": "error",
                "prefer-object-spread": "error",
                "radix": "error",
                "@typescript-eslint/tslint/config": [
                    "error",
                    {
                        rules: {
                            "no-inferred-empty-object-type": true,
                            "no-mergeable-namespace": true,
                            "no-unnecessary-callback-wrapper": true,
                            "prefer-while": true
                        }
                    }
                ]
            }
        }
    ]
};

export = config;
