var path = require('path');
var send = require('koa-send');

exports.index = function*(){
  yield send(this, path.join(__dirname, '../../../client/boot/index.html'));
};