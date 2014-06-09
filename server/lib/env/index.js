var path = require('path');
var habitat = require('habitat');
habitat = habitat.load(path.join(__dirname, '../../../.env'));
module.exports = new habitat();