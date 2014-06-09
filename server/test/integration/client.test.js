describe('GET /', function(){

  it('should return the index.html page', function(done){
    request
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

});