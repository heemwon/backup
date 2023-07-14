module.exports = {
  extends: [],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: 2,
    // https://stylelint.io/user-guide/rules/list/selector-type-no-unknown/
    'selector-type-no-unknown': null,
    // https://stylelint.io/user-guide/rules/list/value-keyword-case/
    'value-keyword-case': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include'],
      },
    ],
  },
}
