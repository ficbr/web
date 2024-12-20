[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<br />

<div align="center">
  <a href="https://github.com/ficbr/web">
    <img src="./public/favicon/android-icon-96x96.png" alt="Logo" width="96" height="96">
  </a>

  <h3 align="center">Single Page Application</h3>
</div>

## 💾 Info

UI developed with the aim of bringing a functional and creative approach to the dissemination of Brazilian culture abroad.

### 🤖 Developed with

[![React][react]][react-url]
[![TypeScript][typescript]][typescript-url]
[![Vite][vite]][vite-url]

### 💽 First class support

[![Yarn][yarn]][yarn-url]
[![Visual Studio Code][vscode]][vscode-url]

[![Vitest][vitest]][vitest-url]
[![Apollo GraphQL][apollo-graphql]][apollo-graphql-url]

## 🔰 Getting started

### 📋 Pre-requisites

[![Node.js version][node.js-version]][node.js-installation]
[![Yarn version][yarn-version]][yarn-installation]

### 🔩 Local setup

TODO

### 🐋 Docker setup

TODO

## 🏗 Nomenclatures

### 🏘 Domain, module and folders

All the folders except **pages** folder is considered global stuff, and the same structure needs to be replicated inside every page that's, if needed. Every page is a new module, and for module, we can define as a collection of files that was created to support the same motivation (domain).

### 📁 Folders

| Pattern                                                   | Category                             |
| --------------------------------------------------------- | ------------------------------------ |
| [Pascal Case](https://en.wiktionary.org/wiki/Pascal_case) | Components                           |
| [Camel Case](https://en.wiktionary.org/wiki/CamelCase)    | Functions and hooks                  |
| [Kebab Case](https://en.wiktionary.org/wiki/kebab_case)   | Folders, constants, types and assets |

### 🧩 Resources

| Pattern                                                   | Category                      |
| --------------------------------------------------------- | ----------------------------- |
| [Pascal Case](https://en.wiktionary.org/wiki/Pascal_case) | Components, classes and types |
| [Camel Case](https://en.wiktionary.org/wiki/CamelCase)    | Functions and hooks           |
| [Snake Case](https://en.wiktionary.org/wiki/snake_case)   | Constants                     |

## 🗃 Tests

All test files needs **.test.** suffix, and must be inside **\_\_tests\_\_** folder to be recognize for Vitest configuration.

| Folder           | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| \_\_tests\_\_    | A collection of test files                                                          |
| \_\_mocks\_\_    | A collection of mocks generated by vi.mock functions                                |
| \_\_fixtures\_\_ | A collection of functions and constants that will be used in one or more test files |

## 🏛 Architecture

TODO

## 📑 License

Distributed under the MIT License. See [LICENSE](https://github.com/ficbr/web/blob/main/LICENSE) for more information.

<!-- ASSETS -->

<!-- TOP INFO - BADGE - Contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/ficbr/web.svg?style=for-the-badge
[contributors-url]: https://github.com/ficbr/web/graphs/contributors

<!-- TOP INFO - BADGE - Issues -->

[issues-shield]: https://img.shields.io/github/issues/ficbr/web.svg?style=for-the-badge
[issues-url]: https://github.com/ficbr/web/issues

<!-- TOP INFO - BADGE - License -->

[license-shield]: https://img.shields.io/github/license/ficbr/web.svg?style=for-the-badge
[license-url]: https://github.com/ficbr/web/blob/main/LICENSE.md

<!-- TECHNOLOGIES - BADGE - Vite -->

[vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev/

<!-- TECHNOLOGIES - BADGE - React -->

[react]: https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react-url]: https://react.dev/

<!-- FIRST CLASS SUPPORT - BADGE - Vitest -->

[vitest]: https://img.shields.io/badge/-vitest-%FCC72B5?style=for-the-badge&logo=vitest&logoColor=white
[vitest-url]: https://vitest.dev/

<!-- FIRST CLASS SUPPORT - BADGE - Apollo GraphQL -->

[apollo-graphql]: https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=for-the-badge&logo=apollo-graphql
[apollo-graphql-url]: https://www.apollographql.com/

<!-- FIRST CLASS SUPPORT - BADGE - VS Code -->

[vscode]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[vscode-url]: https://code.visualstudio.com/

<!-- FIRST CLASS SUPPORT - BADGE - TypeScript -->

[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/

<!-- FIRST CLASS SUPPORT - BADGE - Yarn -->

[yarn]: https://img.shields.io/badge/Yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[yarn-url]: https://www.npmjs.com/

<!-- PRE REQUISITES - BADGE - Node.js -->

[node.js-version]: https://shields.io/badge/node->=18.7.0-43853D?logo=node.js&style=for-the-badge&logoColor=white
[node.js-installation]: https://nodejs.dev/en/learn/how-to-install-nodejs

<!-- PRE REQUISITES - BADGE - Yarn -->

[yarn-version]: https://shields.io/badge/yarn->=1.19.1-%232C8EBB?logo=yarn&style=for-the-badge&logoColor=white
[yarn-installation]: https://yarnpkg.com/cli/install
