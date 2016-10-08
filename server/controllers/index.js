var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('Handling get request');
      models.messages.get(function(results) {
        console.log(results);
        res.end(JSON.stringify(results));
      });

    }, 
    post: function (req, res) {
      username = req.body.username;
      message = req.body.message;
      roomname = req.body.roomname; 
      models.messages.post(username, message, roomname, function() {
        res.end();
      });

    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {


    },
    post: function (req, res) {
      console.log('Controller handling POST');
      var username = req.body.username;
      models.users.post(username);
      res.end();
    }
  }
};

