# Rest API boilerplate using Koa2 & ES2017

[![CircleCI](https://img.shields.io/circleci/project/github/pranavpr/koa2-es2017-api-boilerplate/master.svg?label=circle&maxAge=43200)](https://circleci.com/gh/pranavpr/koa2-es2017-api-boilerplate)
[![Coverage Status](https://img.shields.io/codecov/c/github/pranavpr/koa2-es2017-api-boilerplate/master.svg?maxAge=43200)](https://codecov.io/gh/pranavpr/koa2-es2017-api-boilerplate)
[![dependency Status](https://david-dm.org/pranavpr/koa2-es2017-api-boilerplate.svg)](https://david-dm.org/pranavpr/koa2-es2017-api-boilerplate)
[![devDependency Status](https://david-dm.org/pranavpr/koa2-es2017-api-boilerplate/dev-status.svg)](https://david-dm.org/pranavpr/koa2-es2017-api-boilerplate?type=dev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)


An opinionated starter project for creating RESTful APIs using Koa2, Typescript, and ES2017+ features in a Node.js server environment as well as providing code formatting and testing support. It provides the setup for compiling, formatting and testing your code but doesn't make any further assumptions on how your project should be structured.

Make sure you read the FAQ for more details and info.

### Features:
- [Koa](http://koajs.com/) as the web framework.
- ES2017+ support with [Babel](https://babeljs.io/).
- Automatic polyfill requires based on environment with [babel-preset-env](https://github.com/babel/babel-preset-env).
- Linting with [ESLint](http://eslint.org/).
- Testing with [Jest](https://facebook.github.io/jest/).
- Type checking with [Typescript](https://www.typescriptlang.org/)

## Getting started

```sh
# Clone the project
git clone git@github.com:murcul/starter-rest-api.git
cd starter-rest-api

# Install dependencies
npm install

# or if you're using Yarn
yarn
```

Then you can begin development:

```sh
npm run dev
```

This will launch a [nodemon](https://nodemon.io/) process for automatic server restarts when your code changes.

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/). This project also uses [supertest](https://github.com/visionmedia/supertest) for demonstrating a simple routing smoke test suite. Feel free to remove supertest entirely if you don't wish to use it.

Start the test runner in watch mode with:

```sh
npm test
```

You can also generate coverage with:

```sh
npm test --coverage
```

### Environmental variables in development

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables during development. Simply copy `.env.example`, rename it to `.env` and add your env vars as you see fit.

It is **strongly** recommended **never** to check in your .env file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution. `dotenv` is only for development.

### Deployment

Deployment is specific to hosting platform/provider but generally:

```sh
npm run build
```

will compile your src into `/dist`, and

```sh
npm start
```

will start the compiled application from the `/dist` folder.

## License
MIT License. See the [LICENSE](LICENSE) file.
