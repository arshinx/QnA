'use strict';

var express = require('express');
var app = express();

var jsonParser = require('body-parser').json;
var routes = require('./routes');
var logger = require('morgan');

// Use Modules with Express
app.use(logger('dev')); // modify middleware to return colorful response codes
app.use(jsonParser());
app.use('/questions', routes);

// Error Handling Middleware Setup
// Catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler -- Extra Parameter helps differentiate between Error Handler and Middleware
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});

