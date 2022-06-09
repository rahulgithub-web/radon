const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  publisher_id: String,
  name: String,
  headQuater: String,
}, {timestamps: true});

module.exports = mongoose.model("rahulPublisher", publisherSchema);
