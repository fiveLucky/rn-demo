module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint-config-airbnb",
    "plugins": ["react", "jsx-a11y", "import"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
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
        "react/prefer-stateless-function": [
            "off"
        ],
        "react/jsx-filename-extension": "off"
    }
};