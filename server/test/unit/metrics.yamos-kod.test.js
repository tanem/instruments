var yamosKod = source('metrics/yamos-kod');

describe('metrics / yamos-kod', function(){
  
  it('should be named "yamos kod"', function(){
    yamosKod.name.should.equal('yamos kod');
  });

  it('should return a count of "yamos kod" events', function(){
    var dbStub = { count: sinon.stub() };
    yamosKod.action(dbStub);
    dbStub.count.getCall(0).args[0].should.eql({
      name: 'ko',
      target: 'yamo'
    });
  });

  it('should be emitted every 3000ms', function(){
    yamosKod.interval.should.equal(3000);
  });

});
