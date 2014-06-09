var bunyan = require('bunyan');
var _ = require('lodash');
var config = require('./config');

module.exports = bunyan.createLogger(
  _.merge(
    {
      name: 'instruments'
    },
    config[process.env.NODE_ENV]
  )
);