module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
	},
	// https://ota-meshi.github.io/eslint-plugin-yml/rules/
	rules: {
		// Possible Problems
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
		// Suggestions
		"accessor-pairs": [
			"warn",
			{
				getWithoutSet: true,
			},
		],
		"arrow-body-style": ["error", "as-needed"],
		"block-scoped-var": "error",
		"camelcase": "warn",
		"class-methods-use-this": "off",
		"complexity": "warn",
		"consistent-return": [
			"error",
			{
				treatUndefinedAsUnspecified: true,
			},
		],
		"curly": "error",
		"default-case": "warn",
		"default-case-last": "error",
		"default-param-last": ["error"],
		"dot-notation": [
			"error",
			{
				allowKeywords: false,
			},
		],
		"eqeqeq": "off",
		"func-name-matching": "off",
		"func-names": [
			"error",
			"as-needed",
			{
				generators: "as-needed",
			},
		],
		"func-style": ["warn", "declaration", { allowArrowFunctions: true }],
		"grouped-accessor-pairs": ["warn", "getBeforeSet"],
		"guard-for-in": "warn",
		"init-declarations": ["off", "always", { ignoreForLoopInit: true }],
		"multiline-comment-style": ["warn", "starred-block"],
		"new-cap": "error",
		"no-alert": "warn",
		"no-array-constructor": "off",
		"no-bitwise": ["off", { int32Hint: true }],
		"no-caller": "error",
		"no-confusing-arrow": ["error", { onlyOneSimpleParam: true }],
		"no-console": "warn",
		"no-continue": "error",
		"no-delete-var": "warn",
		"no-div-regex": "error",
		"no-else-return": "error",
		"no-empty": "error",
		"no-empty-function": "error",
		"no-eq-null": "warn",
		"no-eval": "error",
		// "no-extend-native": ["error", { exceptions: [] }],
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-semi": "error",
		"no-floating-decimal": "error",
		// "no-global-assign": ["error", { exceptions: [] }],
		"no-implicit-coercion": "error",
		//
		// Layout & Formatting
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
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
	},
};
