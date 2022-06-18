const mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

let todoModel = new mongoose.model("todo", todoSchema);
module.exports = todoModel;
