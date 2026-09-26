// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", "android/*", "ios/*"],
  },
  {
    // Apostrophes are normal in React Native <Text> (and everywhere in Uzbek).
    rules: { "react/no-unescaped-entities": "off" },
  }
]);
