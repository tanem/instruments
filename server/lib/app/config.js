module.exports = function(instruments){
  instruments.config = {
    hostname: process.env.INSTRUMENTS_HOSTNAME || null,
    port: process.env.INSTRUMENTS_PORT || 0,
    env: process.env.NODE_ENV
  };
};