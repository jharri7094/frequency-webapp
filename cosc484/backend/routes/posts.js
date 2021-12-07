//POST ROUTE
module.exports = app => {
    const posts = require("../controllers/posts.controller.js");
     var router = require("express").Router();
     // Create a new Tutorial
    router.post("/", posts.create);
     // Retrieve all Tutorials
    router.get("/", posts.findAll);
     // Retrieve a single Tutorial with id
    router.get("/:id", posts.findOne);
     // Update a Tutorial with id
    router.put("/:id", posts.update);
     // Delete a Tutorial with id
    router.delete("/:id", posts.delete);
     // Create a new Tutorial
    router.delete("/", posts.deleteAll);
     app.use('/posts', router);
  };