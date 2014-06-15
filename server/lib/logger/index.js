var bunyan = require('bunyan');
var merge = require('lodash.merge');
var config = require('./config');

module.exports = bunyan.createLogger(
  merge(
    {
      name: 'instruments'
    },
    config[process.env.NODE_ENV]
  )
);