# Pivotal UI Starter

Pivotal UI Starter is a todoApp project with much of the tooling in place you would need for a fully-featured React application.
[Click here](https://pivotal-ui-starter.cfapps.io/) to see it in action.

## Getting Started

Install gulp:
```bash
brew install gulp
```

Checkout the project, install dependencies, and start foreman:
```bash
git clone git@github.com:pivotal-cf/pui-starter.git && cd pui-starter
npm install
gulp foreman
```

This will start up the development server at [3000](http://localhost:3000) and the Jasmine server at [8888](http://localhost:8888).
The app includes example React architecture, along with Jasmine unit tests and a WebdriverIO integration test.

## Compiling & Deploying 

To deploy to cloud foundry:

1. choose a unique name for your application and change `name: pivotal-ui-starter` in `manifest.yml` to your unique name
1. login to cf, target your org and space
1. `gulp deploy`

Note that `cf push` by itself will not work. The `gulp deploy` task will compile your assets and configure the staticfile for the buildpack before doing `cf push`

## Compiling without deploying

To deploy to elsewhere, or just to generate a deployable app: 

1. `gulp compile`

## Testing and Development
For testing and development, see our [developer guide](https://github.com/pivotal-cf/pui-starter/blob/master/development.md)