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
        response: "You sent me a Post Request",
        body: req.body
    });

});


// GET /:qID
// Route for questions collection
router.get("/:qID", function(req, res) {

    // Return All Questions - Stringify JSON
    res.json({ response: "You sent me a GET Request for qID: " + req.params.qID });

});

// POST /questions/:qID/answers
// Route for creating an answer
router.post("/:qID/answers", function(req, res) {

    // Return All Questions - Stringify JSON
    res.json({
        response: "You sent me a Post Request to /answers",
        questionqID: req.params.qID,
        body: req.body
    });

});

// PUT /questions/:qID/answers/:aID
// Edit a specific answer
router.put("/:qID/answers/aID", function(req, res) {

    // Return All Questions - Stringify JSON
    res.json({
        response: "You sent me a PUT Request to /answers",
        questionqID: req.params.qID,
        answerID: req.params.aID,
        body: req.body
    });

})

// Delete /questions/:qID/answers/:aID
// Delete a specific answer
router.delete("/:qID/answers/aID", function(req, res) {

    // Return All Questions - Stringify JSON
    res.json({
        response: "You sent me a Delete Request to /answers",
        questionqID: req.params.qID,
        answerID: req.params.aID,
        body: req.body
    });

})

// Upvote and Downvote --

// Post /questions/:qID/answers/:aID/vote-up
// Post /questions/:qID/answers/:aID/vote-down
// Vote a specific answer
router.post("/:qID/answers/aID/vote-:dir", function(req, res) {

    // Return All Questions - Stringify JSON
    res.json({
        response: "You sent me a Post Request to /vote-" + req.params.dir,
        questionqID: req.params.qID,
        answerID: req.params.aID,
        vote: req.params.dir
    });

})

module.exports = router;