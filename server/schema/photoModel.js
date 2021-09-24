const mongoose = require("mongoose");

const Photo = new mongoose.Schema({
  user_id: { type: String, required: true },
  link: { type: String, required: true },
  caption: String,
  latitute: Number,
  longitude: Number,
  timeOfCapture: Date,
});

module.exports = mongoose.model("Photo", Photo);
