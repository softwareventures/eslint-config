import type {Linter} from "eslint";

const config: Linter.Config = {
    env: {
        es6: true,
        node: true
    },
    extends: ["eslint:recommended", "prettier"],
    plugins: ["@typescript-eslint", "import", "jsdoc", "prefer-arrow", "sonarjs"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"
            ],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "tsconfig.json"
            },
            rules: {
                "dot-notation": "off",
                "no-duplicate-imports": "off",
                "no-unused-expressions": "off",
                "sonarjs/prefer-while": "error",
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        default: "array-simple"
                    }
                ],
                "@typescript-eslint/ban-tslint-comment": "error",
                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        types: {
                            "Object": {
                                message: [
                                    'Do not use `Object`, it means "any non-nullish value".',
                                    '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                                    '- If you want a type meaning "any value", you probably want `unknown` instead.'
                                ].join("\n"),
                                fixWith: "Record<string, unknown>"
                            },
                            "{}": {
                                message: [
                                    'Do not use `{}`, it means "any non-nullish value".',
                                    '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                                    '- If you want a type meaning "any value", you probably want `unknown` instead.',
                                    '- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.'
                                ].join("\n"),
                                fixWith: "Record<string, never>"
                            },
                            "Function": {
                                message: [
                                    "The `Function` type accepts any function-like value.",
                                    "It provides no type safety when calling the function, which can be a common source of bugs.",
                                    "It also accepts things like class declarations, which may throw at runtime as they may not be called with `new`.",
                                    "If you are expecting a function to accept certain arguments, you should explicitly define the function shape."
                                ].join("\n"),
                                fixWith: "() => void"
                            }
                        },
                        extendDefaults: true
                    }
                ],
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/class-literal-property-style": "error",
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {assertionStyle: "as", objectLiteralTypeAssertions: "never"}
                ],
                "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
                "@typescript-eslint/consistent-type-imports": "error",
                "@typescript-eslint/dot-notation": "error",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        allowExpressions: true,
                        allowTypedFunctionExpressions: true
                    }
                ],
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        accessibility: "explicit"
                    }
                ],
                "@typescript-eslint/explicit-module-boundary-types": [
                    "error",
                    {
                        allowDirectConstAssertionInArrowFunctions: false,
                        allowHigherOrderFunctions: false
                    }
                ],
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/method-signature-style": "error",
                "@typescript-eslint/no-base-to-string": "error",
                "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-confusing-void-expression": [
                    "error",
                    {ignoreVoidOperator: true}
                ],
                "@typescript-eslint/no-duplicate-imports": "error",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-extraneous-class": "error",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-unused-expressions": "error",
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/no-use-before-define": "off",
                "@typescript-eslint/prefer-for-of": "off",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-regexp-exec": "off",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        allowNumber: true,
                        allowBoolean: true,
                        allowAny: false,
                        allowNullish: false
                    }
                ],
                "@typescript-eslint/require-await": "off",
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        path: "always",
                        types: "prefer-import",
                        lib: "always"
                    }
                ],
                "@typescript-eslint/unified-signatures": "error"
            }
        },
        {
            files: [
                "test.ts",
                "test.tsx",
                "*.test.ts",
                "*.test.tsx",
                "*.test-d.ts",
                "*.test-d.tsx"
            ],
            parserOptions: {
                project: "tsconfig.test.json"
            }
        },
        {
            files: ["test.{js,jsx,ts,tsx}", "*.test.{js,jsx,ts,tsx}", "*.config.{js,jsx,ts,tsx}"],
            rules: {
                "no-restricted-imports": "off"
            }
        }
    ],
    rules: {
        "arrow-body-style": "error",
        "complexity": "off",
        "curly": "error",
        "dot-notation": "error",
        "eqeqeq": ["error", "always", {null: "never"}],
        "guard-for-in": "error",
        "id-blacklist": "error",
        "id-match": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: [
                    "**/*.config.{js,jsx,ts,tsx}",
                    "**/*.test.{js,jsx,ts,tsx}",
                    "**/*.test-d.{ts,tsx}",
                    "**/test.{js,jsx,ts,tsx}"
                ],
                optionalDependencies: false
            }
        ],
        "import/order": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "off",
        "jsdoc/newline-after-description": "error",
        "jsdoc/no-types": "error",
        "max-classes-per-file": "off",
        "new-parens": "error",
        "no-caller": "error",
        "no-duplicate-imports": "error",
        "no-empty": "off",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-irregular-whitespace": ["error", {skipStrings: false}],
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-proto": "error",
        "no-restricted-imports": [
            "error",
            {
                patterns: [
                    "**/*.config{,.js,.jsx,.ts,.tsx}",
                    "**/*.test{,.js,.jsx,.ts,.tsx}",
                    "**/test{,.js,.jsx,.ts,.tsx}"
                ]
            }
        ],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unused-expressions": "error",
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "prefer-arrow/prefer-arrow-functions": ["error", {allowStandaloneDeclarations: true}],
        "prefer-object-spread": "error",
        "radix": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: ["variableLike", "enumMember"],
                format: ["strictCamelCase"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid"
            },
            {
                selector: "typeLike",
                format: ["StrictPascalCase"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid"
            }
        ]
    }
};

export = config;
