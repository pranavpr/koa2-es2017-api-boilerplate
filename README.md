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
- Code formatter with [Prettier](http://prettier.io/).
- Testing with [Jest](https://facebook.github.io/jest/).
- Type checking with [Typescript](https://www.typescriptlang.org/)

## Getting started

```sh
# Clone the project
git clone git@github.com:murcul/starter-rest-api.git
cd starter-rest-api.git

# Install dependencies
yarn
```

### Start development server
Run the app in the development mode with file watcher and server restart support using [nodemon](https://nodemon.io/) when code changes.

```sh
yarn run dev
```

### Testing
Start the test runner in watch mode with:

```sh
yarn test
```

Generate test coverage with:

```sh
yarn test --coverage
```

### Environmental variables in development

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables during development. Simply copy `.env.example`, rename it to `.env` and add your env vars as you see fit.

It is **strongly** recommended **never** to check in your .env file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution. `dotenv` is only for development.

### Deployment

Deployment is specific to hosting platform/provider but generally:

```sh
yarn run build
```

will compile your src into `/dist`, and

```sh
yarn start
```

will run `build` (via the `prestart` hook) and start the compiled application from the `/dist` folder.

The last command is generally what most hosting providers use to start your application when deployed, so it should take care of everything.

## FAQ

**Where is all the configuration for Jest and Babel?**

In `package.json`. Feel free to extract them in separate respective config files if you like.

**Why are you using `babel-register` instead of `babel-node`?**

`babel-node` contains a small "trap", it loads Babel's [polyfill](https://babeljs.io/docs/usage/polyfill/) by default. This means that if you use something that needs to be polyfilled, it'll work just fine in development (because `babel-node` polyfills it automatically) but it'll break in production because it needs to be explicitely included in Babel's CLI which handles the final build.

In order to avoid such confusions, `babel-register` is a more sensible approach in keeping the development and production runtimes equal. By using [babel-preset-env](https://github.com/babel/babel-preset-env) only code that's not supported by the running environment is transpiled and any polyfills required are automatically inserted.

## License
MIT License. See the [LICENSE](LICENSE) file.
