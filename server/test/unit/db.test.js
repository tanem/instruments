describe('db', function(){

  var db;
  var store;

  beforeEach(function(){
    store = [];
    db = source('db')(store);
  });

  describe('insert', function(){
    it('should insert an object', function(){
      db.insert({ name: 'foo' });
      store.should.eql([{ id: 1, name: 'foo' }]);
    });
  });

  describe('count', function(){
    it('should return a count of all objects that match the given conditions', function(){
      db.insert({ name: 'foo' });
      db.insert({ name: 'bar' });
      db.count({ name: 'foo' }).should.equal(1);
    });
  });

  describe('last', function(){
    it('should return the last object inserted that matches the given conditions', function(){
      db.insert({ name: 'foo' });
      db.insert({ name: 'bar' });
      db.insert({ name: 'foo' });
      db.last({ name: 'foo' }).id.should.equal(3);
    });
  });

  describe('sum', function(){
    it('should return a sum of the values for a given key', function(){
      db.insert({ name: 'foo', points: 10 });
      db.insert({ name: 'bar', points: 20 });
      db.insert({ name: 'foo', points: 10 });
      db.sum('points').should.equal(40);
    });
  });

});