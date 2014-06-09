var query = require('query');
var before = require('before');
var TweeningCounter = require('tweening-counter');

var scoreLabelEl = query('.js-score-label');
var lanternsGatheredLabelEl = query('.js-lanterns-gathered-label');
var ninjasKickedLabelEl = query('.js-ninjas-kicked-label');
var yamosKickedLabelEl = query('.js-yamos-kicked-label');
var yamosKodLabelEl = query('.js-yamos-kod-label');

var scoreCounter = new TweeningCounter().duration(1000);
var lanternsGatheredCounter = new TweeningCounter().duration(1000);
var ninjasKickedCounter = new TweeningCounter().duration(1000);
var yamosKickedCounter = new TweeningCounter().duration(1000);
var yamosKodCounter = new TweeningCounter().duration(1000);

before(scoreLabelEl, scoreCounter.el);
before(lanternsGatheredLabelEl, lanternsGatheredCounter.el);
before(ninjasKickedLabelEl, ninjasKickedCounter.el);
before(yamosKickedLabelEl, yamosKickedCounter.el);
before(yamosKodLabelEl, yamosKodCounter.el);

scoreCounter.to(0).start();
lanternsGatheredCounter.to(0).start();
ninjasKickedCounter.to(0).start();
yamosKickedCounter.to(0).start();
yamosKodCounter.to(0).start();

var socket = io.connect('http://127.0.0.1/');

socket.on('score', function (data) {
  scoreCounter.to(data).start();
});

socket.on('lanterns gathered', function (data) {
  lanternsGatheredCounter.to(data).start();
});

socket.on('ninjas kicked', function (data) {
  ninjasKickedCounter.to(data).start();
});

socket.on('yamos kicked', function (data) {
  yamosKickedCounter.to(data).start();
});

socket.on('yamos kod', function (data) {
  yamosKodCounter.to(data).start();
});