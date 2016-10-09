var db = require('../db');
//db.query(.....)
module.exports = {
  messages: {
    get: function (callback) {
      var queryArgs = [];
      // var queryString = 'select * from users; select * from messages;';
      var queryString = "select m.id, u.username, m.text, r.roomname from users u inner join messages m on m.id_users=u.id inner join rooms r on m.id_rooms=r.id;";
      db.query(queryString, queryArgs, function (err, results) {
        if (err) {
          console.error(err);
        }
        callback(results);
      }); 

    },
    post: function (username, text, roomname, callback) {
      var queryArgs = [username];
      var queryString = 'select u.id from users u where u.username = ?';
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          console.error(err);
        }
        if (results.length === 0) {
          console.error(' ERROR: Username: ' + username + ' is not in our database');
        }
        
        var userId = results[0].id;
        var queryArgs = [roomname];
        var queryString = 'select r.id from rooms r where r.roomname = ?';        
        db.query(queryString, queryArgs, function(err, results) {
          if (err) {
            console.error(err);
          }
          var roomId = 1;
          var queryArgs = [text, userId, roomId];
          var queryString = 'insert into messages (text, id_users, id_rooms) values (?,?,?)';
          db.query(queryString, queryArgs, function(err, results) {
            if (err) {
              console.error(err);
            }
            callback();
          });
        });
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (username, callback) {
      var queryArgs = [];
      var queryString = "insert into users (username) values (\'" + username + "\');";
      db.query(queryString, queryArgs, function(err, results) {
        if (err) { console.error(err); }
        callback();
      });
    }
  }
};

