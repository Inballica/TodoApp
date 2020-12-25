const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = Todo = mongoose.model("post", PostSchema);
