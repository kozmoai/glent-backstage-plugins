module.exports = require('@kozmoai/cli/config/eslint-factory')(__dirname, {
  ignorePatterns: ['sample-templates/'],
  restrictedSrcImports: [
    {
      name: 'path',
      importNames: ['resolve'],
      message:
        'Do not use path.resolve, use `resolveSafeChildPath` from `@kozmoai/backend-common` instead as it prevents security issues',
    },
  ],
  restrictedSrcSyntax: [
    {
      message:
        'Do not use path.resolve, use `resolveSafeChildPath` from `@kozmoai/backend-common` instead as it prevents security issues',
      selector: 'MemberExpression[object.name="path"][property.name="resolve"]',
    },
  ],
});
