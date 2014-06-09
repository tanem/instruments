var lanternsGathered = source('metrics/lanterns-gathered');

describe('metrics / lanterns-gathered', function(){
  
  it('should be named "lanterns gathered"', function(){
    lanternsGathered.name.should.equal('lanterns gathered');
  });

  it('should return a count of "lanterns gathered" events', function(){
    var dbStub = { count: sinon.stub() };
    lanternsGathered.action(dbStub);
    dbStub.count.getCall(0).args[0].should.eql({
      name: 'lantern gathered'
    });
  });

  it('should be emitted every 3000ms', function(){
    lanternsGathered.interval.should.equal(3000);
  });

});
