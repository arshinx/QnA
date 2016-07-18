'use strict';

var express = require('express');
var app = express();

// Configure Middleware
app.use(function(req, res, next) {
    req.myMessage = "Hello from Middleware #1!"
    next();
});

app.use("/different/:id", function(req, res, next) {
    console.log(req.myMessage)
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});
