const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("form", formSchema);
