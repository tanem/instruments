module.exports = function(store){

  var db = {};
  
  db.id = 1;

  db.insert = function(obj){
    obj.id = this.id++;
    store.push(obj);
    return obj;
  };

  db.count = function(conditions){
    return find(conditions).length;
  };

  db.last = function(conditions){
    return find(conditions).pop();
  };

  db.sum = function(key){
    var sum = 0;
    store.forEach(function(item){
      sum += item[key];
    });
    return sum;
  };

  function find(conditions) {
    var keys = Object.keys(conditions);
    return store.filter(function(item){
      return keys.every(function(key){
        return conditions[key] === item[key];
      });
    });
  }

  return db;

};