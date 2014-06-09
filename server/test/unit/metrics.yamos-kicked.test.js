var yamosKicked = source('metrics/yamos-kicked');

describe('metrics / yamos-kicked', function(){
  
  it('should be named "yamos kicked"', function(){
    yamosKicked.name.should.equal('yamos kicked');
  });

  it('should return a count of "yamos kicked" events', function(){
    var dbStub = { count: sinon.stub() };
    yamosKicked.action(dbStub);
    dbStub.count.getCall(0).args[0].should.eql({
      name: 'kick delivered',
      target: 'yamo'
    });
  });

  it('should be emitted every 3000ms', function(){
    yamosKicked.interval.should.equal(3000);
  });

});
