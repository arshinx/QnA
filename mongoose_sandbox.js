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
        size:  String,
        color: {type: String, default: "golden"},
        mass:  {type: Number, default: 0.007},
        name:  {type: String, default: "Angela"}

    });

    // Animal Object connecting to Animal Schema
    var Animal = mongoose.model("Animal", AnimalSchema);

    // Elephant - Lawrence
    var elephant = new Animal({
        type: "Elephant",
        color: "gray",
        mass: 6000,
        name: "Lawrence"

    });

    // Generic Goldfish
    var animal = new Animal({});

    // Create Whale using Animal Constructor
    var whale = new Animal({
        type: "whale",
        mass: 190500,
        name: "Fig"

    });

    // Array of objects
    var AnimalData = [
        {
            type: "mouse",
            color: "gray",
            mass: 0.035,
            name: "Marvin"
        },
        {
            type: "nutria",
            color: "brown",
            mass: 6.35,
            name: "Gretchen"   
        },
        {
            type: "wolf",
            color: "gray",
            mass: 45,
            name: "Iris"   
        },
        elephant,
        animal,
        whale
    ];

    // Remove
    Animal.remove({}, function(err){
        if (err) console.error("Save Failed", err);
        // Note: Save Function runs Asynchronously, we would not know which save fcn runs first
        Animal.create(animalData, function(err, animals) {
            if (err) console.error("Save Failed", err);
            Animal.find({size: "big"}, function (err, animals) {
                animals.forEach(function(animal) {
                    console.log(animal.name + " the " + animal.color + " " + animal.type)
                });
                db.close(function () {
                    console.log("DB Connection Closed!");
                });
            });
        }); 
    });
    // Remove Fcn Ends here!

}); // End db.once