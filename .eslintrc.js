module.exports = {
  "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": 'airbnb-base',
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [".eslintrc.js"],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["off", "double"],
        "quote-props": ["error", "always"],
        "quote-props": ["off", "consistent"],
        "import/prefer-default-export": "off",
        "no-console": "off",
        "no-unused-vars": "off",
  }
}