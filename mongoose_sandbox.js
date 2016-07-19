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

        type:  {type: String, default: "goldfish"},
        size:  {type: String, default: "small"},
        color: {type: String, default: "golden"},
        mass:  {type: Number, default: 0.007},
        name:  {type: String, default: "Angela"}

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

    // Generic Goldfish
    var animal = new Animal({});

    // Remove
    Animal.remove({}, function(){
        if (err) console.error("Save Failed", err);
        // Note: Save Function runs Asynchronously, we woould not know which save fcn runs first
        elephant.save(function (err) {
            if (err) console.error("Save Failed", err);
            animal.save(function(){
                if (err) console.error("Save Failed", err);
                db.close(function () {
                    console.log("DB Connection Closed!");
                });
            });
        });
    }); 
    // Remove Fcn Ends here!

}); // End db.once