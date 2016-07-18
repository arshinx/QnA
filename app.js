'use strict';

var express = require('express');
var app = express();

// Configure Middleware
app.use(function(req, res, next) {
    console.log("The leaves on the Tree are", req.query.color);
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Express Server is running on port", port);
});
