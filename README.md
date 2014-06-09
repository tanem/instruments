# Instruments

[![Build Status](https://travis-ci.org/tanem/instruments.png)](https://travis-ci.org/tanem/instruments)

A little metrics dashboard created as an excuse to play around with [Koa](http://koajs.com/), [Component](http://component.io/) and [Socket.IO](http://socket.io/).

![](https://raw.github.com/tanem/instruments/master/instruments.png)

The data for the demo is pulled from a demo of an old favourite game of mine -> [Bruce Lee](https://www.youtube.com/watch?v=CX8jdKNO4t8).

![](https://raw.github.com/tanem/instruments/master/brucelee.png)

## Start

Ensure node 0.11.x is installed ([n](https://github.com/visionmedia/n) is a convenient tool for Node version management), then install the dependencies:

```sh
$ npm install
```

Supported environment variables are `INSTRUMENTS_HOSTNAME` (defaults to `localhost`), `INSTRUMENTS_PORT` (defaults to a random port) and `NODE_ENV`. Supported `NODE_ENV` values are `dev`, `test` and `demo`. See `scripts.start` in `package.json`.

To start the app:

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



