module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
	},
	globals: {
		Response: "readonly",
		addEventListener: "readonly",
		WORKERS_GRAPHQL_CACHE: "readonly",
	},
	// https://ota-meshi.github.io/eslint-plugin-yml/rules/
	rules: {
		"array-callback-return": [
			"error",
			{
				allowImplicit: true,
				checkForEach: true,
			},
		],
		"no-constant-binary-expression": "error",
		"no-constructor-return": "error",
		"no-duplicate-imports": [
			"error",
			{
				includeExports: true,
			},
		],
		"no-invalid-regexp": [
			"error",
			{
				allowConstructorFlags: ["g", "i", "m"],
			},
		],
		"no-promise-executor-return": "error",
		"no-self-compare": "error",
		"no-template-curly-in-string": "error",
		"no-undef": [
			"error",
			{
				typeof: true,
			},
		],
		"no-unmodified-loop-condition": "warn",
		"no-unreachable-loop": "error",
		"no-unused-private-class-members": "warn",
		"no-unused-vars": [
			"warn",
			{
				args: "all",
			},
		],
		"no-use-before-define": "error",
		"require-atomic-updates": "error",
		"use-isnan": [
			"error",
			{
				enforceForIndexOf: true,
			},
		],
		"accessor-pairs": [
			"warn",
			{
				getWithoutSet: true,
			},
		],
		"arrow-body-style": ["error", "as-needed"],
		"block-scoped-var": "error",
		camelcase: "warn",
		"class-methods-use-this": "off",
		complexity: "warn",
		"consistent-return": [
			"error",
			{
				treatUndefinedAsUnspecified: true,
			},
		],
		curly: "error",
		"default-case": "warn",
		"default-case-last": "error",
		"default-param-last": ["error"],
		"dot-notation": [
			"error",
			{
				allowKeywords: false,
			},
		],
		eqeqeq: "off",
		//
		"array-bracket-newline": [
			"error",
			{
				multiline: true,
			},
		],
		"array-bracket-spacing": [
			"error",
			"never",
			{
				singleValue: true,
			},
		],
		indent: ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "single"],
		semi: ["error", "always"],
	},
};