describe('events', function(){
  
  var db;
  var registry;
  var events;

  beforeEach(function(){
    db = { insert: sinon.stub().returns({ name: 'foo' }) };
    registry = ['foo'];
    events = source('events')(db, registry);
  });

  describe('create', function(){

    it('should return a 400 for an invalid event name', function(done){
      var ctx = { request: { body: { name: 'bar' } } };
      co(events.create).call(ctx, function(){
        ctx.status.should.equal(400);
        ctx.body.should.eql({ message: 'invalid event name' });
        done();
      });
    });

    it('should return a 201 for a valid event name', function(done){
      var ctx = { request: { body: { name: 'foo' } } };
      co(events.create).call(ctx, function(){
        ctx.status.should.equal(201);
        ctx.body.should.eql({ name: 'foo' });
        done();
      });
    });

    it('should add the event to the db', function(done){
      var ctx = { request: { body: { name: 'foo' } } };
      co(events.create).call(ctx, function(){
        db.insert.getCall(0).args[0].should.eql({ name: 'foo' });
        done();
      });
    });

  });

});