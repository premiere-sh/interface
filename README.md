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

- prem earned delete for now
- for now solos only so no teams in the interface
- recommended events:
```jsx
events.map((event) => Date.now() - event.startDate < thresh
```
- Bring the mozilla observatory rating up (currently at D+)
- Check if Google Lighthouse score can be improved
- Add google, facebook etc signups
- Improve mobile scaling of some components
- Add friends mechanisms (need the design)
- Add tournaments creation (need the design)
- Add separate profile based on the id in the url
