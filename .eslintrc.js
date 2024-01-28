module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  "eol-last": 0,
  "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 0
  }
}
