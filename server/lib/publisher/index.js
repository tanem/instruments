
module.exports = function(io, db, registry){

  var publisher = {};

  publisher.register = function(metric){
    registry.push(metric);
  };

  publisher.start = function(){
    registry.forEach(function(metric){
      setInterval(function(){
        io.sockets.emit(metric.name, metric.action.call(metric, db));
      }, metric.interval);
    });
  };

  return publisher;

};