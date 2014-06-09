var env = require('../env');

module.exports = function(instruments){
  instruments.config = {
    hostname: env.get('instrumentsHostname'),
    port: env.get('instrumentsPort'),
    env: env.get('nodeEnv')
  };
};