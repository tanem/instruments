var fs = require('fs');
var co = require('co');
var koa = require('koa');
var path = require('path');
var thunkify = require('thunkify');
var isFunction = require('lodash.isfunction');
var readdir = thunkify(fs.readdir);
var dbStore = require('../db/store');
var db = require('../db')(dbStore);
var publisherRegistry = require('../publisher/registry');
var logger = require('../logger');

module.exports = function(){

  var instruments = {};
  instruments.app = koa();
  
  require('./config')(instruments);
  require('./middleware')(instruments);
  require('./server')(instruments);
  require('./router')(instruments);

  instruments.start = function(cb){
    instruments.server.listen(
      instruments.config.port,
      instruments.config.hostname,
      function(){
        var address = this.address();
        var hostname = address.address;
        var port = address.port;
        instruments.config.hostname = hostname;
        instruments.config.port = port;
        co(startPublisher)();
        logger.info('instruments listening at http://%s:%d', hostname, port);
        if (isFunction(cb)) cb();
        if (instruments.config.env === 'demo') startDemo(hostname, port);
      }
    );
  };

  function* startPublisher() {
    instruments.publisher = require('../publisher')(instruments.io, db, publisherRegistry);
    var metricsDir = path.join(__dirname, '../metrics');
    var files = yield readdir(metricsDir);
    files.forEach(function(file){
      instruments.publisher.register(
        require(path.join(metricsDir, file))
      );
    });
    instruments.publisher.start();
  }

  function startDemo(address, port) {
    var demo = require('../demo')(address, port, require('../demo/data'));
    demo.start();
  }

  return instruments;

};