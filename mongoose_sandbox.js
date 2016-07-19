'use strict';

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(err) {
    console.error("connection error:", err);
});

db.once("open", function(){
    console.log("db connection succesful!");

    // All DB Communication goes here
    var Schema = mongoose.Schema;
    var AnimalSchema = new Schema({

        type: String,
        size: String,
        color: String,
        mass: Number,
        name: String

    });

    // Animal Object connecting to Animal Schema
    var Animal = mongoose.model("Animal", AnimalSchema);

    // Elephant - Lawrence
    var elephant = new Animal({
        type: "Elephant",
        size: "big",
        color: "gray",
        mass: 6000,
        name: "Lawrence"

    });

    elephant.save(function (err) {
        if (err) console.error("Save Failed", err);
        else console.log("Saved!");
        db.close(function () {
            console.log("DB Connection Closed!");
        });
    });
});