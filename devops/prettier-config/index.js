module.exports = {
    extends: "@gravity-ui/prettier-config",
    bracketSpacing: false,
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
            },
        },
        {
            files: ['*.md', '*.json', '*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
