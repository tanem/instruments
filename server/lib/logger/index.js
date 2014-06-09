var bunyan = require('bunyan');
var _ = require('lodash');
var config = require('./config');
var env = require('../env');

module.exports = bunyan.createLogger(
  _.merge(
    {
      name: 'instruments'
    },
    config[env.get('nodeEnv')]
  )
);