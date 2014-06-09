// Start the server prior to running any integration tests.
before(function(done){
  var instruments = source('app')();
  instruments.start(function(){
    request = request(instruments.app.callback());
    done();
  });
});