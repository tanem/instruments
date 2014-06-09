
module.exports = function(db, registry){
  
  var events = {};

  events.create = function*(){
    var data = this.request.body;
    if (!~registry.indexOf(data.name)) {
      this.status = 400;
      this.body = { message: 'invalid event name' };
    } else {
      this.status = 201;
      this.type = 'application/json';
      this.body = JSON.stringify(db.insert(data));
    }
  };

  return events;

};