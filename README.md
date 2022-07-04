# Premiere Protocol Interface

[![License](https://img.shields.io/github/license/premiere-sh/interface?color=blue)](https://github.com/premiere-sh/interface/blob/master/LICENSE)

## Development

### Requirements

- [node](https://nodejs.org/en/) (ideally version 18 or greater, my advice
  would be to use [nvm](https://github.com/nvm-sh/nvm))
- [yarn](https://yarnpkg.com/)

### Workflow

In order to install dependencies:

```sh
yarn
```

Then, to start the development server (default port is 3000)

```sh
yarn dev
```

After running the above command a development server can be accessed in the
browser under url `http://localhost:3000`. The NextJS supports hot reload but
for some changes to populate you might need to re-run the development server.

In order to check if the website builds right (in case the build as part of the PR
CI/CD fails), one can run

```sh
yarn build
```

Other useful commands involve running [ESLint](https://eslint.org/) (static analysis):

```sh
yarn lint
```

and [Prettier](https://prettier.io/) (code formatter):

```sh
yarn prettier --write .
```

## TODOs

Join our [Slack](https://join.slack.com/t/aso-ltd/shared_invite/zt-1bktroyrp-D2sSgK38OwU4193cIyHmbg) and I will add you to the Jira board!
