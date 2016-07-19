'use strict';

var express = require('express');
var app = express();

var jsonParser = require('body-parser').json;
var routes = require('./routes');
var logger = require('morgan')

// Use Modules with Express
app.use(jsonParser());
app.use('/questions', routes);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});

