'use strict';

var express = require('express');
var app = express();
var jsonParser = require('body-parser').json;

// Configure Middleware
app.use(function(req, res, next) {
    if (req.body) {
        console.log("The Sky is", req.body.color);
    }
    next();
});

// Use Modules with Express
app.use(jsonParser());

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});

