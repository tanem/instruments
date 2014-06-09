describe('POST /api/events', function(){

  it('should create a valid event', function(done){
    request
      .post('/api/events')
      .send({ name: 'lantern gathered' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect({ name: 'lantern gathered', id: 1 }, done);
  });

  it('should fail with an invalid event', function(done){
    request
      .post('/api/events')
      .set('Accept', 'application/json')
      .send({ name: 'foo bar' })
      .expect('Content-Type', /json/)
      .expect(400)
      .expect({ message: 'invalid event name' }, done);
  });

});