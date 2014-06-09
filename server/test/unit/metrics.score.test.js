var score = source('metrics/score');

describe('metrics / score', function(){
  
  it('should be named "score"', function(){
    score.name.should.equal('score');
  });

  it('should return the score', function(){
    var dbStub = { sum: sinon.stub() };
    score.action(dbStub);
    dbStub.sum.getCall(0).args[0].should.equal('points');
  });

  it('should be emitted every 3000ms', function(){
    score.interval.should.equal(3000);
  });

});
