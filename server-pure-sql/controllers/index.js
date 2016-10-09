var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        console.log(results);
        res.send(results);
      });
    }, 
    post: function (req, res) {
      var body = req.body;
      username = body.username;
      text = body.text;
      roomname = body.roomname; 
      models.messages.post(username, text, roomname, function() {
        res.send();
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Handling GET users request');

    },
    post: function (req, res) {
      console.log('Posting a new user, ', req.body);
      var username = req.body.username;
      models.users.post(username, function() {
        res.send();
      });
    }
  }
};

