module.exports = {
  name: 'yamos kicked',
  action: function(db){
    return db.count({
      name: 'kick delivered',
      target: 'yamo'
    });
  },
  interval: 3000
};