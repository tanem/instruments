var ninjasKicked = source('metrics/ninjas-kicked');

describe('metrics / ninjas-kicked', function(){
  
  it('should be named "ninjas kicked"', function(){
    ninjasKicked.name.should.equal('ninjas kicked');
  });

  it('should return a count of "ninjas kicked" events', function(){
    var dbStub = { count: sinon.stub() };
    ninjasKicked.action(dbStub);
    dbStub.count.getCall(0).args[0].should.eql({
      name: 'kick delivered',
      target: 'ninja'
    });
  });

  it('should be emitted every 3000ms', function(){
    ninjasKicked.interval.should.equal(3000);
  });

});
