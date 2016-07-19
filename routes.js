'use strict';

var express = require("express");
var router = express.Router();

// GET /questions
// Route for questions collection
router.get("/", function(req, res) {

    // Return All Questions - Stringify JSON
    res.json({response: "You sent me a GET Request"});

});

// POST /questions
router.post("/", function(req, res) {

    // Return All Questions - Stringify JSON
    res.json({
        response: "You sent me a Post Request"
    });

});

module.exports = router;