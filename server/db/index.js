var Sequelize = require('sequelize');
var db = new Sequelize('chatter', 'root', 'wally');

var users = db.define('users', {
  username: Sequelize.STRING
});

var rooms = db.define('users', {
  roomname: Sequelize.STRING
});

var messages = db.define('messages', {
  text: Sequelize.STRING,
});

users.hasMany(messages);
rooms.hasMany(messages);
messages.belongsTo(users);
messages.belongsTo(rooms);

module.exports = {
  users: users,
  rooms: rooms,
  messages: messages,
  close: function() {
    db.close();
  }
};