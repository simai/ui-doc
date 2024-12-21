# @diplodoc/eslint-config

[![NPM version](https://img.shields.io/npm/v/@diplodoc/eslint-config.svg?style=flat)](https://www.npmjs.org/package/@diplodoc/eslint-config)

## Install

```
npm install --save-dev eslint @diplodoc/eslint-config
```

## Usage

Add `.eslintrc` file in the project root with the following content:

```json
{
  "extends": "@diplodoc/eslint-config",
  "root": true
}
```

### Prettier

If you are using Prettier, extend root config with the additional rules:

```json
{
  "extends": ["@diplodoc/eslint-config", "@diplodoc/eslint-config/prettier"],
  "root": true
}
```
