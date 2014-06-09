var http = require('http');
var co = require('co');
var sleep = require('co-sleep');

module.exports = function(hostname, port, data){

  var demo = {};

  demo.start = function start() {
    co(function*(){
      for (var i = 0; true; i++) {
        var event = data[i];
        var prevEvent = data[i - 1];
        var prevOffset = prevEvent ? prevEvent.offset : 0;
        yield sleep(event.offset - prevOffset);
        event.tstamp = Date.now();
        sendData(event);
        if (i + 1 === data.length) i = -1;
      }
    }).call(this);
  };

  function sendData(event) {
    var req = http.request({
      hostname: hostname,
      port: port,
      path: '/api/events',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    req.write(JSON.stringify(event));
    req.end();
  }

  return demo;

};