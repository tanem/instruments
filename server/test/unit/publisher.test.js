describe('publisher', function(){
  
  var publisher;
  var ioStub;
  var registry;

  beforeEach(function(){
    ioStub = { sockets: { emit: sinon.stub() } };
    registry = [];
    publisher = source('publisher')(ioStub, {}, registry);
  });

  it('should allow registration of a metric', function(){
    publisher.register({ name: 'foo' });
    registry.should.eql([{ name: 'foo' }]);
  });

  it('should emit metric data to all sockets at the given metric interval', function(){
    var clock = sinon.useFakeTimers();
    publisher.register({
      name: 'foo',
      action: function(){ return 'result'; },
      interval: 1000
    });

    publisher.start();
    clock.tick(1000);
    
    ioStub.sockets.emit.getCall(0).args[0].should.equal('foo');
    ioStub.sockets.emit.getCall(0).args[1].should.equal('result');

    clock.restore();
  });

});