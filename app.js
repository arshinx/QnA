'use strict';

var express = require('express');
var app = express();
var jsonParser = require('body-parser').json;

// Configure Middleware - DRY Principle
var jsonCheck = function(req, res, next) {
    if (req.body) {
        console.log("The Sky is", req.body.color);
    } else {
        console.log("There is no body property on the request");
    }
    next();
}

app.use();

// Use Modules with Express
app.use(jsonParser());

// Configure Second Middleware
app.use(function(req, res, next) {
    if (req.body) {
        console.log("The Sky is", req.body.color);
    } else {
        console.log("There is no body property on the request");
    }
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});

