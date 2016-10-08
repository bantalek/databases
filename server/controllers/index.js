var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //look into database
      //get info from database and turn it into a json string to send over
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

