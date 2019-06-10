module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint-config-airbnb",
    "plugins": ["react", "jsx-a11y", "import"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true
        },
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/prefer-stateless-function": "off",
        "react/jsx-filename-extension": "off",
        "class-methods-use-this": "off"
    }
};