module.exports = {
	parser: '@typescript-eslint/parser', // ESLint 파서를 지정한다.
	extends: [
		'plugin:react/recommended',
		// @eslint-plugin-react의 규칙을 사용한다.
		'plugin:@typescript-eslint/recommended',
		// @typescript-eslint/ eslint-plugin의 규칙을 사용한다.
		// 'prettier/@typescript-eslint',
		// 'some-other-config-you-use',
		// eslint-config-prettier를 사용해서 @typescript-eslint/eslint-plugin의 규칙들 중 prettier와 충돌하는 규칙을 비활성화한다.
		'plugin:react/recommended',
		'plugin:prettier/recommended'
		// eslint-plugin-prettier와 eslint-config-prettier를 활성화한다. prettier 에러를 eslint 에러로 표시해 줄 것이다. 이 설정은 반드시 extends 배열의 마지막 값이어야 한다.
	],
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
			jsx: true // jsx의 파싱을 허용한다.
		},
		ecmaVersion: 2015, // 모던 ES의 파싱을 허용한다.
		sourceType: 'module' // import의 사용을 허용한다.
	},
	Plugin: ['react-hooks'],
	rules: {
		// ESLint 규칙을 작성한다. extends 한 규칙들을 덮어쓸 수 도 있다.
		// 예시 "@typescript-eslint/explicit-function-return-type": "off",
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
	},
	settings: {
		react: {
			version: 'detect' // eslint-plugin-react에게 사용하고 있는 리액트의 버전을 알아서 탐지하도록 한다.
		}
	}
}
