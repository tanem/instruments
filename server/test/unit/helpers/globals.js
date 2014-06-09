// These help keep the tests clean and readable.
global.path = require('path');
global.should = require('should');
global.sinon = require('sinon');
global.co = require('co');

// Make it easier to grab source files.
global.source = function(sourcePath){
  return require(path.join('../../../lib', sourcePath));
};