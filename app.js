'use strict';

var express = require('express');
var app = express();

// Configure Middleware
app.use(function(req, res, next) {
    console.log("First piece of Middleware")
    next();
});

app.use("/different/:id", function(req, res, next) {
    console.log("Second piece of Middleware, ID: ", req.params.id)
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});
