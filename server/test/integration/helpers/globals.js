// These help keep the tests clean and readable.
global.request = require('supertest');
global.path = require('path');

// Make it easier to grab source files.
global.source = function(sourcePath){
  return require(path.join('../../../lib', sourcePath));
};

// Run in the correct env.
source('env').set('NODE_ENV', 'test');