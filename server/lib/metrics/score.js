module.exports = {
  name: 'score',
  action: function(db){
    return db.sum('points');
  },
  interval: 3000
};