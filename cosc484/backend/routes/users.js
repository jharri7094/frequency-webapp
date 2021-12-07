//USER ROUTE
module.exports = app => {
    const users = require("../controllers/user.controller.js");
     var router = require("express").Router();
     // Create a new Tutorial
    router.post("/", users.create);
     // Retrieve all Tutorials
    router.get("/", users.findAll);
     // Retrieve all published Tutorials
    router.get("/isArtist", users.findAllIsArtists);
     // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);
     // Update a Tutorial with id
    router.put("/:id", users.update);
     // Delete a Tutorial with id
    router.delete("/:id", users.delete);
     // Create a new Tutorial
    router.delete("/", users.deleteAll);
     app.use('/users', router);
};