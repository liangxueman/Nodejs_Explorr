var mongoose = require("mongoose");

var comment_schema = new mongoose.Schema({
  text: String,
  author: {
    id: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  created_at: {
    type: Date, 
    default: Date.now
  } 
});

module.exports = mongoose.model("Comment", comment_schema);