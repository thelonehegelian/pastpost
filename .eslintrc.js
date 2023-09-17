
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
    "parser": "@typescript-eslint/parser",
      "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
        "rules": {
    "prettier/prettier": "error",
      "react/prop-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
