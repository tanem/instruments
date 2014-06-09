var router = require('koa-router');
var serve = require('koa-static');
var component = require('component-koa');

module.exports = function(instruments){
  instruments.app.use(component());
  instruments.app.use(router(instruments.app));
  instruments.app.use(serve('build'));
};