var body = require('koa-body')();
var client = require('../client');
var dbStore = require('../db/store');
var db = require('../db')(dbStore);
var eventsRegistry = require('../events/registry');
var events = require('../events')(db, eventsRegistry);

module.exports = function(instruments){
  instruments.app.get('/', client.index);
  instruments.app.post('/api/events', body, events.create);
};