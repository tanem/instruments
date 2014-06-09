var http = require('http');
var socketio = require('socket.io');

module.exports = function(instruments){
  instruments.server = http.createServer(instruments.app.callback());
  instruments.io = socketio.listen(instruments.server, {
    'log level': instruments.config.env === 'test' ? 1 : 3
  });
};