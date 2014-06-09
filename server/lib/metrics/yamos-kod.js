module.exports = {
  name: 'yamos kod',
  action: function(db){
    return db.count({
      name: 'ko',
      target: 'yamo'
    });
  },
  interval: 3000
};