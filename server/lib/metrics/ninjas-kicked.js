module.exports = {
  name: 'ninjas kicked',
  action: function(db){
    return db.count({
      name: 'kick delivered',
      target: 'ninja'
    });
  },
  interval: 3000
};