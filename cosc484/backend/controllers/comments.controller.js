const db = require("../models/posts.model");
const Comment = db.posts;
 
// Create and Save a new Comment
exports.create = (req, res) => {
   // Validate request
   if (!req.body.comment) {
       res.status(400).send({ message: "Content can not be empty!" });
       return;
   }
 
   const comment = new Comment({
       comment = req.body.comment,
       user = req.body.user,
       post = req.body.post,
   });
 
   // Save Comment in the database
    Comment
       .save(comment)
       .then(data => {
           res.send(data);
       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Some error occurred while creating the Comment."
           });
       });
};
 
// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
   const comment = req.query.comment;
   var condition = comment ? { comment: { $regex: new RegExp(comment), $options: "i" } } : {};
 
   Comment.find(condition)
       .then(data => {
           res.send(data);
       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Some error occurred while retrieving Comment."
           });
       });
};
 
// Find a single Comment with an id
exports.findOne = (req, res) => {
   const id = req.params.id;
 
   Comment.findById(id)
       .then(data => {
           if (!data)
               res.status(404).send({ message: "Not found Comment with id " + id });
           else res.send(data);
       })
       .catch(err => {
           res
               .status(500)
               .send({ message: "Error retrieving Comment with id=" + id });
       });
};
 
// Update a Comment by the id in the request
exports.update = (req, res) => {
   if (!req.body) {
       return res.status(400).send({
           message: "Data to update can not be empty!"
       });
   }
 
   const id = req.params.id;
 
   Comment.findByIdAndUpdate(id, req.body)
       .then(data => {
           if (!data) {
               res.status(404).send({
                   message: `Cannot update Comment with id=${id}. Maybe Comment was not found!`
               });
           } else res.send({ message: "Comment was updated successfully." });
       })
       .catch(err => {
           res.status(500).send({
               message: "Error updating Comment with id=" + id
           });
       });
};
 
// Delete a Comment with the specified id in the request
exports.delete = (req, res) => {
   const id = req.params.id;
 
   Comment.findByIdAndRemove(id)
       .then(data => {
           if (!data) {
               res.status(404).send({
                   message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`
               });
           } else {
               res.send({
                   message: "Comment was deleted successfully!"
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Could not delete Comment with id=" + id
           });
       });
};
 
// Delete all Comments from the database.
exports.deleteAll = (req, res) => {
   exports.deleteAll = (req, res) => {
       Comment.deleteMany({})
           .then(data => {
               res.send({
                   message: `${data.deletedCount} Comments were deleted successfully!`
               });
           })
           .catch(err => {
               res.status(500).send({
                   message:
                       err.message || "Some error occurred while removing all Comments."
               });
           });
   };
};
 

