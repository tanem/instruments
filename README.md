# Instruments

[![Build Status](https://travis-ci.org/tanem/instruments.png)](https://travis-ci.org/tanem/instruments)

A little metrics dashboard created as an excuse to play around with [Koa](http://koajs.com/), [Component](http://component.io/) and [Socket.IO](http://socket.io/).

![](https://raw.github.com/tanem/instruments/master/instruments.png)

The data for the demo is pulled from a demo of an old favourite game of mine ... [Bruce Lee](https://www.youtube.com/watch?v=CX8jdKNO4t8).

![](https://raw.github.com/tanem/instruments/master/brucelee.png)

## Start

Ensure node 0.11.x is installed ([n](https://github.com/visionmedia/n) is a convenient tool for Node version management), then install the dependencies:

```sh
$ npm install
```

Environment variables are managed by [habitat](https://github.com/brianloveswords/habitat). Create a `.env` file at the project root specifying the hostname, port and environment you want the app to run with. Supported environments are `dev`, `test` and `demo`. For example:

```sh
$ echo "export INSTRUMENTS_HOSTNAME=localhost" >> .env
$ echo "export INSTRUMENTS_PORT=3000" >> .env
$ echo "export NODE_ENV=demo" >> .env
```

Start the app:

```sh
$ npm start
```

If you'd like to prettify the log stream, pipe it through the bunyan CLI:

```sh
$ npm install -g bunyan
$ npm start | bunyan
```

## Components

The app uses [component-koa](https://github.com/component/koa.js) to build the `build.js` and `build.css` files upon every request. Not suitable for production, but useful for development.

## Logging

[Bunyan](https://github.com/trentm/node-bunyan) is used for logging, and depending on `NODE_ENV` is output to `process.stdout` and/or `process.stderr`. Processing of log files is left up to the execution environment. 

## Tests

Server unit and integration tests can be run via:

```sh
$ npm test
```

## Credits

 * [Component/Koa Boilerplate](https://github.com/component/boilerplate-koa)



