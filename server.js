var express = require('express');
const jwt = require('jsonwebtoken')
var routes = require('./route')
var app = express();

var bodyParser = require('body-parser');
app.use(express.static("myApp")); // myApp will be the same folder name.
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/', routes);
app.use(function (err, req, res, next) {
    if (res.status) {
         
   return next(err)
        }
        res.status(500)
        res.render('error', { error: err })
      }     
);
app.listen(9090, 'localhost');
console.log("MyProject Server is Listening on port 9090");