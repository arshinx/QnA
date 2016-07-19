'use strict';

var express = require('express');
var app = express();
var jsonParser = require('body-parser').json;
var routes = require('./routes');

// Use Modules with Express
app.use(jsonParser());

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});

