[![ESLint](https://github.com/Catatomik/eslint-ts-fpos-no-base-to-string/actions/workflows/lint.yml/badge.svg)](https://github.com/Catatomik/eslint-ts-fpos-no-base-to-string/actions/workflows/lint.yml)

# *typescript-eslint* false positive : `no-base-to-string`

This repository illustrates a [false positive of the typescript-eslint's rule `no-base-to-string`](https://github.com/typescript-eslint/typescript-eslint/issues/8585).  
It uses types from [`discord.js`](https://old.discordjs.dev/#/docs/discord.js/14.14.1/general/welcome)

## Setup

Install dependencies : `pnpm install` or `npm install`.

## Usage

Simply run linting on repository : `npm run lint`.

## Explanation

Type of variable `channel` is [`TextChannel`, which has a correct `.toString` method](https://old.discordjs.dev/#/docs/discord.js/14.14.1/class/TextChannel?scrollTo=toString). The type of variable `channel` has been checked by debugging the typescript-eslint rule, using `checker.typeToString`.  
Other debugging shows that parent expression, `channel.toString`, is of type
```ts
(() => `<#${string}>`) & (() => string)
```  
For clarification purpose, `.toString` is directly called, but done under the hood by JavaScript, and TypeScript & typescript-eslint understand that, so the result is the same.

Cannot explain why this false positive exists.
