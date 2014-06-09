module.exports = {
  name: 'lanterns gathered',
  action: function(db){
    return db.count({
      name: 'lantern gathered'
    });
  },
  interval: 3000
};