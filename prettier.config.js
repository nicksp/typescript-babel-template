// Some settings automatically inherited from .editorconfig

module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' }
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' }
    }
  ]
}
