// Start the server prior to running any integration tests.
var Instruments = require('../../../lib/app');

before(function(done){
  var instruments = new Instruments();
  instruments.start(function(){
    request = request('http://localhost:3000');
    done();
  });
});