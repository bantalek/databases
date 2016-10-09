var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

    // var allowCrossDomain = function(req, res, next) {
    //   res.header('Access-Control-Allow-Origin', '*');
    //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        
    //   // intercept OPTIONS method
    //   if ('OPTIONS' === req.method) {
    //     res.sendStatus(204);
    //     res.end();
    //   } else {
    //     next();
    //   }
    // };
    // app.use(allowCrossDomain);


// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());


// Set up our routes
app.use('/classes', router);


// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
